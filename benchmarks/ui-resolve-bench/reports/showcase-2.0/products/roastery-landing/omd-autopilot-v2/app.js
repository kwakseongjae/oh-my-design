(function () {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("site-nav-list");
  const openButton = document.getElementById("reserve-open");
  const closeButton = document.getElementById("reserve-close");
  const dialog = document.getElementById("reservation-dialog");
  const form = document.getElementById("reservation-form");
  const submitButton = document.getElementById("reserve-submit");
  const statusNode = document.getElementById("form-status");
  const loadingNode = document.getElementById("form-loading");
  const emptyNote = document.getElementById("reservation-empty");
  const sessionLog = document.getElementById("session-log");
  const sessionList = document.getElementById("session-list");
  const dateInput = document.getElementById("cupping-date");

  const fields = {
    name: document.getElementById("guest-name"),
    email: document.getElementById("guest-email"),
    date: document.getElementById("cupping-date"),
    party: document.getElementById("party-size"),
  };

  const requests = [];
  let lastRequestId = 0;

  const today = "2026-08-17";
  dateInput.min = today;
  dateInput.setAttribute("min", today);

  function requiredFilled() {
    return Boolean(
      fields.name.value.trim() &&
      fields.email.value.trim() &&
      fields.date.value &&
      fields.party.value
    );
  }

  function setSubmitEnabled(enabled) {
    submitButton.disabled = !enabled;
    submitButton.setAttribute("data-state", enabled ? "default" : "disabled");
  }

  function syncSubmitFromFields() {
    if (dialog.getAttribute("data-state") === "loading") return;
    setSubmitEnabled(requiredFilled());
  }

  function setNavOpen(open) {
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navList.classList.toggle("is-open", open);
  }

  function describedByFor(field, includeError) {
    const parts = [];
    if (field.id === "guest-name") parts.push("reservation-hint");
    if (includeError) parts.push(`${field.id}-error`);
    return parts.join(" ");
  }

  function clearErrors() {
    Object.values(fields).forEach((field) => {
      field.removeAttribute("aria-invalid");
      const described = describedByFor(field, false);
      if (described) field.setAttribute("aria-describedby", described);
      else field.removeAttribute("aria-describedby");
      const error = document.getElementById(`${field.id}-error`);
      if (error) {
        error.hidden = true;
        error.textContent = "";
      }
    });
  }

  function showError(field, message) {
    field.setAttribute("aria-invalid", "true");
    const error = document.getElementById(`${field.id}-error`);
    if (error) {
      error.hidden = false;
      error.textContent = message;
    }
    field.setAttribute("aria-describedby", describedByFor(field, true));
  }

  function firstInvalid() {
    const name = fields.name.value.trim();
    if (!name) return { field: fields.name, message: "Enter a name." };

    const email = fields.email.value.trim();
    if (!email) return { field: fields.email, message: "Enter an email address." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { field: fields.email, message: "Enter an email address with a name, @, and domain." };
    }

    if (!fields.date.value) return { field: fields.date, message: "Choose a preferred date." };
    if (fields.date.value < today) return { field: fields.date, message: "Choose today or a later date." };

    if (!fields.party.value) return { field: fields.party, message: "Choose a party size." };
    return null;
  }

  function setDialogState(state) {
    dialog.setAttribute("data-state", state);
    loadingNode.hidden = state !== "loading";
    if (state !== "success") {
      statusNode.hidden = true;
    }
  }

  function renderRequests() {
    const hasRequests = requests.length > 0;
    emptyNote.hidden = hasRequests;
    sessionLog.hidden = !hasRequests;
    sessionList.replaceChildren();
    requests.forEach((item) => {
      const li = document.createElement("li");
      li.dataset.recordId = item.id;
      li.textContent = `${item.id}: ${item.name}, party of ${item.party}, ${item.date}.`;
      sessionList.appendChild(li);
    });
  }

  function openDialog() {
    clearErrors();
    statusNode.hidden = true;
    setDialogState(requiredFilled() ? "default" : "empty");
    syncSubmitFromFields();
    openButton.disabled = true;
    openButton.setAttribute("data-state", "disabled");
    dialog.showModal();
    fields.name.focus();
  }

  function closeDialog() {
    if (dialog.getAttribute("data-state") === "loading") return;
    dialog.close();
    openButton.disabled = false;
    openButton.removeAttribute("data-state");
    openButton.focus();
  }

  navToggle.addEventListener("click", function () {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    setNavOpen(open);
    if (open) navList.querySelector("a").focus();
  });

  navList.addEventListener("click", function (event) {
    if (event.target.closest("a")) setNavOpen(false);
  });

  document.addEventListener("click", function (event) {
    if (!navList.classList.contains("is-open")) return;
    if (event.target.closest(".site-nav")) return;
    setNavOpen(false);
  });

  openButton.addEventListener("click", openDialog);
  closeButton.addEventListener("click", closeDialog);

  dialog.addEventListener("cancel", function (event) {
    if (dialog.getAttribute("data-state") === "loading") {
      event.preventDefault();
      return;
    }
    openButton.disabled = false;
    openButton.removeAttribute("data-state");
  });

  dialog.addEventListener("close", function () {
    openButton.disabled = false;
    openButton.removeAttribute("data-state");
  });

  form.addEventListener("input", syncSubmitFromFields);
  form.addEventListener("change", syncSubmitFromFields);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const invalid = firstInvalid();
    if (invalid) {
      setDialogState("error");
      showError(invalid.field, invalid.message);
      invalid.field.focus();
      setSubmitEnabled(true);
      return;
    }

    setDialogState("loading");
    setSubmitEnabled(false);
    submitButton.setAttribute("data-state", "loading");
    submitButton.setAttribute("aria-busy", "true");
    Object.values(fields).forEach((field) => {
      field.disabled = true;
    });
    document.getElementById("guest-notes").disabled = true;

    window.setTimeout(function () {
      lastRequestId += 1;
      const id = `CUP-${String(lastRequestId).padStart(3, "0")}`;
      const record = {
        id: id,
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        date: fields.date.value,
        party: fields.party.value,
        notes: document.getElementById("guest-notes").value.trim(),
      };
      requests.push(record);
      renderRequests();

      statusNode.hidden = false;
      statusNode.textContent = `Cupping request ${record.id} for ${record.name} on ${record.date} is recorded in this browser session.`;
      setDialogState("success");
      submitButton.setAttribute("data-state", "success");
      submitButton.removeAttribute("aria-busy");
      Object.values(fields).forEach((field) => {
        field.disabled = false;
      });
      document.getElementById("guest-notes").disabled = false;
      setSubmitEnabled(true);
      statusNode.focus();
    }, 280);
  });

  renderRequests();
  syncSubmitFromFields();
})();

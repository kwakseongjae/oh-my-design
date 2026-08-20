(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dialog = document.getElementById("reserve-dialog");
  const form = document.getElementById("reserve-form");
  const status = document.getElementById("form-status");
  const dateInput = document.getElementById("guest-date");
  const openers = document.querySelectorAll(".js-open-reserve");
  const closers = [
    document.getElementById("reserve-close"),
    document.getElementById("reserve-cancel"),
  ].filter(Boolean);

  function todayISO() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  if (dateInput) {
    dateInput.min = todayISO();
  }

  function openReserve(event) {
    if (event) event.preventDefault();
    if (!dialog || typeof dialog.showModal !== "function") {
      form?.scrollIntoView({ block: "start" });
      return;
    }
    const submit = form?.querySelector("[type=submit]");
    const wasHeld = Boolean(submit?.disabled);
    submit?.removeAttribute("disabled");
    status.textContent = "";
    status.classList.remove("is-success");
    if (wasHeld) {
      form.reset();
      if (dateInput) dateInput.min = todayISO();
      ["guest-name", "guest-email", "guest-phone", "guest-date", "guest-sitting", "guest-party"].forEach((id) => {
        setError(id, "");
      });
    }
    dialog.showModal();
    document.getElementById("guest-name")?.focus();
  }

  function closeReserve() {
    if (dialog?.open) dialog.close();
  }

  openers.forEach((el) => {
    el.addEventListener("click", openReserve);
  });

  closers.forEach((el) => {
    el.addEventListener("click", closeReserve);
  });

  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeReserve();
  });

  function setError(id, message) {
    const field = document.getElementById(id);
    const error = document.getElementById(`${id}-error`);
    if (!field || !error) return;
    if (message) {
      field.classList.add("is-invalid");
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", error.id);
      error.hidden = false;
      error.textContent = message;
    } else {
      field.classList.remove("is-invalid");
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
      error.hidden = true;
      error.textContent = "";
    }
  }

  function validate() {
    const name = document.getElementById("guest-name");
    const email = document.getElementById("guest-email");
    const phone = document.getElementById("guest-phone");
    const date = document.getElementById("guest-date");
    const sitting = document.getElementById("guest-sitting");
    const party = document.getElementById("guest-party");
    let firstInvalid = null;

    const nameValue = name.value.trim();
    if (nameValue.length < 2) {
      setError("guest-name", "Enter the name this seat should be held under.");
      firstInvalid = firstInvalid || name;
    } else {
      setError("guest-name", "");
    }

    const emailValue = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError("guest-email", "Enter an email we could use if a booking channel is published later.");
      firstInvalid = firstInvalid || email;
    } else {
      setError("guest-email", "");
    }

    const phoneValue = phone.value.trim();
    if (phoneValue && phoneValue.replace(/\D/g, "").length < 7) {
      setError("guest-phone", "Add a fuller number, or leave this field blank.");
      firstInvalid = firstInvalid || phone;
    } else {
      setError("guest-phone", "");
    }

    if (!date.value || date.value < todayISO()) {
      setError("guest-date", "Choose a date from today onward. A calendar of sittings is not published.");
      firstInvalid = firstInvalid || date;
    } else {
      setError("guest-date", "");
    }

    if (!sitting.value) {
      setError("guest-sitting", "Choose morning, afternoon, or either.");
      firstInvalid = firstInvalid || sitting;
    } else {
      setError("guest-sitting", "");
    }

    if (!party.value) {
      setError("guest-party", "Tell us how many seats to hold.");
      firstInvalid = firstInvalid || party;
    } else {
      setError("guest-party", "");
    }

    return firstInvalid;
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstInvalid = validate();
    if (firstInvalid) {
      status.textContent = "The slip is incomplete. Fix the marked fields and try again.";
      status.classList.remove("is-success");
      firstInvalid.focus();
      return;
    }

    const record = {
      name: document.getElementById("guest-name").value.trim(),
      email: document.getElementById("guest-email").value.trim(),
      phone: document.getElementById("guest-phone").value.trim(),
      date: document.getElementById("guest-date").value,
      sitting: document.getElementById("guest-sitting").value,
      party: document.getElementById("guest-party").value,
      notes: document.getElementById("guest-notes").value.trim(),
      savedAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("sash-mill-cupping-request", JSON.stringify(record));
    } catch {
      /* Storage can be blocked; the on-screen confirmation still tells the truth. */
    }

    status.classList.add("is-success");
    status.textContent =
      "Request held in this browser only. Nothing was sent. No booking channel is published yet — keep a copy of what you entered if you need it later.";
    form.querySelector("[type=submit]")?.setAttribute("disabled", "true");
  });

  ["guest-name", "guest-email", "guest-phone", "guest-date", "guest-sitting", "guest-party"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", () => {
      if (document.getElementById(id)?.classList.contains("is-invalid")) validate();
    });
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll(".hero-plate, .cupping, .register").forEach((el) => {
      el.classList.add("will-reveal");
      observer.observe(el);
    });
  }
})();

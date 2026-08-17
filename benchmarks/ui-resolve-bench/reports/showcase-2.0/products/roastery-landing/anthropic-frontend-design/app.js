(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dialog = document.getElementById("reserve-dialog");
  const form = document.getElementById("reserve-form");
  const success = document.getElementById("reserve-success");
  const successLine = document.getElementById("reserve-success-line");
  const errorEl = document.getElementById("form-error");
  const dateField = document.getElementById("field-date");
  const dek = document.getElementById("reserve-dek");
  const title = document.getElementById("reserve-title");
  const openers = Array.from(document.querySelectorAll("[data-open-reserve]"));
  let lastOpener = null;

  function reveal() {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(function (node) {
        node.classList.add("is-in");
      });
      return;
    }

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach(function (node) {
      io.observe(node);
    });
  }

  function todayISO() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return now.getFullYear() + "-" + month + "-" + day;
  }

  function setDateBound() {
    if (!dateField) return;
    dateField.min = todayISO();
  }

  function showError(message) {
    if (!errorEl) return;
    errorEl.hidden = !message;
    errorEl.textContent = message || "";
  }

  function resetDialog() {
    if (form) {
      form.hidden = false;
      form.reset();
      if (form.elements.session && form.elements.session.value === "") {
        var either = form.querySelector('input[name="session"][value="either"]');
        if (either) either.checked = true;
      }
      var seats = form.elements.seats;
      if (seats && !seats.value) seats.value = "1";
    }
    if (success) success.hidden = true;
    if (dek) dek.hidden = false;
    if (title) title.hidden = false;
    showError("");
    setDateBound();
  }

  function openReserve(opener) {
    if (!dialog) return;
    lastOpener = opener || document.activeElement;
    resetDialog();
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    var first = dialog.querySelector("#field-name");
    if (first) first.focus();
  }

  function closeReserve() {
    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    if (lastOpener && typeof lastOpener.focus === "function") {
      lastOpener.focus();
    }
  }

  function validate() {
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var date = form.elements.date.value;
    var seats = Number(form.elements.seats.value);
    var session = form.elements.session.value;

    if (!name) return "Enter the name for the seat.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Enter an email we can reply to.";
    }
    if (!date) return "Choose a preferred date.";
    if (date < todayISO()) return "Choose today or a later date.";
    if (!Number.isInteger(seats) || seats < 1 || seats > 4) {
      return "Seats must be a whole number from 1 to 4.";
    }
    if (!session) return "Choose a session.";
    return "";
  }

  function onSubmit(event) {
    event.preventDefault();
    var message = validate();
    if (message) {
      showError(message);
      return;
    }

    showError("");
    var seats = Number(form.elements.seats.value);
    var dateValue = form.elements.date.value;
    var pretty = dateValue;
    try {
      pretty = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(new Date(dateValue + "T12:00:00"));
    } catch (err) {
      pretty = dateValue;
    }

    var sessionLabels = {
      morning: "the morning table",
      midday: "the midday table",
      either: "either table"
    };
    var session = sessionLabels[form.elements.session.value] || "the table";
    var seatWord = seats === 1 ? "1 seat" : seats + " seats";

    successLine.textContent =
      "Reservation requested for " +
      seatWord +
      " at " +
      session +
      " on " +
      pretty +
      ". We’ll confirm by email. The fee, street, and entry notes are not published on this page — they arrive with that note.";

    form.hidden = true;
    if (dek) dek.hidden = true;
    success.hidden = false;
    success.focus();
  }

  openers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openReserve(btn);
    });
  });

  document.querySelectorAll("[data-close-reserve]").forEach(function (btn) {
    btn.addEventListener("click", closeReserve);
  });

  if (form) form.addEventListener("submit", onSubmit);

  if (dialog) {
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeReserve();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeReserve();
    });
  }

  setDateBound();
  reveal();
})();

(() => {
  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const dialog = document.getElementById("reserve-dialog");
  const form = document.getElementById("cupping-form");
  const done = document.getElementById("reserve-done");
  const summary = document.getElementById("reserve-summary");
  const status = document.getElementById("form-status");
  const dateInput = document.getElementById("field-date");
  const openers = document.querySelectorAll("[data-open-reserve]");

  function todayISO() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${now.getFullYear()}-${month}-${day}`;
  }

  if (dateInput) {
    dateInput.min = todayISO();
  }

  function revealAllImmediate() {
    document.querySelectorAll(".reveal").forEach((node) => {
      node.classList.add("is-inview");
    });
  }

  function initReveal() {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return;

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealAllImmediate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
  }

  initReveal();
  reduceMotion.addEventListener("change", () => {
    if (reduceMotion.matches) revealAllImmediate();
  });

  document.querySelectorAll(".reveal--immediate").forEach((node) => {
    window.requestAnimationFrame(() => node.classList.add("is-inview"));
  });

  if (!dialog || !form) return;

  let lastOpener = null;

  function openReserve(opener) {
    lastOpener = opener || document.activeElement;
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    const first = form.querySelector("input, select, textarea, button");
    if (first) first.focus();
  }

  function closeReserve() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  openers.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      openReserve(btn);
    });
  });

  dialog.querySelectorAll("[data-close-reserve]").forEach((btn) => {
    btn.addEventListener("click", () => closeReserve());
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeReserve();
  });

  dialog.addEventListener("close", () => {
    if (lastOpener && typeof lastOpener.focus === "function") {
      lastOpener.focus();
    }
  });

  function setFieldError(field, message) {
    const wrap = field.closest(".field");
    const error = wrap ? wrap.querySelector(".field__error") : null;
    if (wrap) wrap.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function clearErrors() {
    form.querySelectorAll(".field").forEach((wrap) => {
      wrap.classList.remove("is-invalid");
      const error = wrap.querySelector(".field__error");
      if (error) error.textContent = "";
    });
    form.querySelectorAll("[aria-invalid]").forEach((el) => {
      el.setAttribute("aria-invalid", "false");
    });
    if (status) {
      status.hidden = true;
      status.textContent = "";
      status.classList.remove("form-status--ok");
    }
  }

  function validate() {
    const name = form.elements.namedItem("name");
    const email = form.elements.namedItem("email");
    const date = form.elements.namedItem("date");
    const windowPref = form.elements.namedItem("window");
    const seats = form.elements.namedItem("seats");
    let firstInvalid = null;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim()) {
      setFieldError(name, "Enter the name for the seat.");
      firstInvalid = firstInvalid || name;
    } else {
      setFieldError(name, "");
    }

    if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
      setFieldError(email, "Enter a reachable email address.");
      firstInvalid = firstInvalid || email;
    } else {
      setFieldError(email, "");
    }

    if (!date.value) {
      setFieldError(date, "Choose a preferred date.");
      firstInvalid = firstInvalid || date;
    } else if (date.value < todayISO()) {
      setFieldError(date, "Choose today or a later date.");
      firstInvalid = firstInvalid || date;
    } else {
      setFieldError(date, "");
    }

    if (!windowPref.value) {
      setFieldError(windowPref, "Choose a time of day.");
      firstInvalid = firstInvalid || windowPref;
    } else {
      setFieldError(windowPref, "");
    }

    const seatCount = Number(seats.value);
    if (!seatCount || seatCount < 1 || seatCount > 4) {
      setFieldError(seats, "Seats must be between 1 and 4.");
      firstInvalid = firstInvalid || seats;
    } else {
      setFieldError(seats, "");
    }

    return firstInvalid;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const invalid = validate();
    if (invalid) {
      if (status) {
        status.hidden = false;
        status.textContent = "The request needs a few corrections before it can be held.";
      }
      invalid.focus();
      return;
    }

    const data = new FormData(form);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Preferred date: ${data.get("date")}`,
      `Time of day: ${data.get("window")}`,
      `Seats: ${data.get("seats")}`,
    ];
    const notes = String(data.get("notes") || "").trim();
    if (notes) lines.push(`Notes: ${notes}`);

    if (summary) {
      summary.textContent = lines.join("\n");
    }

    form.hidden = true;
    if (done) done.hidden = false;
    const closeBtn = done ? done.querySelector("button") : null;
    if (closeBtn) closeBtn.focus();
  });

  const another = document.getElementById("reserve-another");
  if (another) {
    another.addEventListener("click", () => {
      form.reset();
      if (dateInput) dateInput.min = todayISO();
      form.hidden = false;
      if (done) done.hidden = true;
      clearErrors();
      const first = form.querySelector("input, select, textarea");
      if (first) first.focus();
    });
  }
})();

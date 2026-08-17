(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const reveal = () => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("is-in");
      } else {
        el.classList.add("will-reveal");
        io.observe(el);
      }
    });
  };

  reveal();
  reduceMotion.addEventListener("change", () => {
    if (reduceMotion.matches) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
    }
  });

  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const setNav = (open) => {
    if (!nav || !toggle) return;
    nav.classList.toggle("nav--open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle?.addEventListener("click", () => {
    setNav(!nav.classList.contains("nav--open"));
  });
  nav?.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("click", () => setNav(false));
  });

  const dialog = document.getElementById("reserve-dialog");
  const form = document.getElementById("reserve-form");
  const success = document.getElementById("form-success");
  const toast = document.getElementById("toast");
  const dateInput = document.getElementById("field-date");
  let lastOpener = null;
  let toastTimer = 0;

  const todayISO = () => {
    const d = new Date();
    const off = d.getTimezoneOffset();
    const local = new Date(d.getTime() - off * 60000);
    return local.toISOString().slice(0, 10);
  };

  if (dateInput) {
    dateInput.min = todayISO();
  }

  const isDirty = () => {
    if (!form) return false;
    const data = new FormData(form);
    return Array.from(data.values()).some((v) => String(v).trim().length > 0);
  };

  const resetView = () => {
    form?.classList.remove("is-hidden");
    success?.classList.remove("is-visible");
    form?.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
    form?.querySelectorAll(".error").forEach((el) => {
      el.textContent = "";
    });
  };

  const openReserve = (opener) => {
    if (!dialog) return;
    lastOpener = opener || document.activeElement;
    resetView();
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    window.setTimeout(() => {
      document.getElementById("field-name")?.focus();
    }, 10);
  };

  const closeReserve = ({ force = false } = {}) => {
    if (!dialog || !dialog.open) return;
    if (!force && form && !form.classList.contains("is-hidden") && isDirty()) {
      const ok = window.confirm("Discard this reservation request?");
      if (!ok) return;
    }
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  };

  document.querySelectorAll("[data-open-reserve]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      openReserve(btn);
    });
  });

  document.querySelectorAll("[data-close-reserve]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      closeReserve();
    });
  });

  dialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeReserve();
  });

  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeReserve();
  });

  dialog?.addEventListener("close", () => {
    if (lastOpener && typeof lastOpener.focus === "function") {
      lastOpener.focus();
    }
  });

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-on");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-on"), 4200);
  };

  const setError = (id, message) => {
    const field = document.getElementById(id);
    const err = document.getElementById(`${id}-error`);
    if (field) field.setAttribute("aria-invalid", message ? "true" : "false");
    if (err) err.textContent = message || "";
  };

  const validate = () => {
    const name = document.getElementById("field-name");
    const email = document.getElementById("field-email");
    const date = document.getElementById("field-date");
    const session = document.getElementById("field-session");
    const seats = document.getElementById("field-seats");
    let firstInvalid = null;

    const nameVal = name?.value.trim() || "";
    if (nameVal.length < 2) {
      setError("field-name", "Enter your full name (at least two characters).");
      firstInvalid = firstInvalid || name;
    } else {
      setError("field-name", "");
    }

    const emailVal = email?.value.trim() || "";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    if (!emailOk) {
      setError("field-email", "Enter an email we can read, such as name@example.com.");
      firstInvalid = firstInvalid || email;
    } else {
      setError("field-email", "");
    }

    const dateVal = date?.value || "";
    if (!dateVal) {
      setError("field-date", "Choose a preferred date.");
      firstInvalid = firstInvalid || date;
    } else if (dateVal < todayISO()) {
      setError("field-date", "Choose today or a later date.");
      firstInvalid = firstInvalid || date;
    } else {
      setError("field-date", "");
    }

    if (!session?.value) {
      setError("field-session", "Select a session window.");
      firstInvalid = firstInvalid || session;
    } else {
      setError("field-session", "");
    }

    const seatsVal = Number(seats?.value);
    if (!Number.isInteger(seatsVal) || seatsVal < 1 || seatsVal > 6) {
      setError("field-seats", "Seats must be a whole number from 1 to 6.");
      firstInvalid = firstInvalid || seats;
    } else {
      setError("field-seats", "");
    }

    return firstInvalid;
  };

  form?.querySelectorAll("input, select, textarea").forEach((el) => {
    el.addEventListener("blur", () => {
      if (el.value.trim()) validate();
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = validate();
    if (invalid) {
      invalid.focus();
      return;
    }

    const submit = form.querySelector("[type='submit']");
    if (submit) {
      submit.disabled = true;
      submit.textContent = "Saving request…";
    }

    const payload = {
      savedAt: new Date().toISOString(),
      name: document.getElementById("field-name").value.trim(),
      email: document.getElementById("field-email").value.trim(),
      phone: document.getElementById("field-phone").value.trim(),
      date: document.getElementById("field-date").value,
      session: document.getElementById("field-session").value,
      seats: document.getElementById("field-seats").value,
      notes: document.getElementById("field-notes").value.trim(),
      transmitted: false
    };

    window.setTimeout(() => {
      try {
        const key = "atelier-roast-cupping-requests";
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push(payload);
        localStorage.setItem(key, JSON.stringify(existing));
      } catch {
        /* Storage may be blocked; the on-page success still tells the truth. */
      }

      form.classList.add("is-hidden");
      success?.classList.add("is-visible");
      document.getElementById("success-close")?.focus();
      showToast("Request saved on this device. It was not sent anywhere.");
      if (submit) {
        submit.disabled = false;
        submit.textContent = "Request a seat";
      }
      form.reset();
    }, 280);
  });
})();

(function () {
  "use strict";

  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var themeKey = "noll-theme";
  var dialog = document.getElementById("reserve-dialog");
  var form = document.getElementById("reserve-form");
  var success = document.getElementById("reserve-success");
  var submitBtn = document.getElementById("reserve-submit");
  var formStatus = document.getElementById("reserve-form-status");
  var dateInput = document.getElementById("reserve-date");
  var nav = document.getElementById("site-nav");
  var navToggle = document.querySelector(".nav-toggle");
  var lastOpener = null;

  function prefersReducedMotion() {
    return reduceQuery.matches;
  }

  function todayISO() {
    var t = new Date();
    var m = String(t.getMonth() + 1).padStart(2, "0");
    var d = String(t.getDate()).padStart(2, "0");
    return t.getFullYear() + "-" + m + "-" + d;
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(themeKey, theme);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.textContent = theme === "dark" ? "Use light" : "Use dark";
    });
  }

  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function initTheme() {
    setTheme(currentTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    });
  }

  function revealAll() {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  function initReveal() {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      io.observe(el);
    });
  }

  function closeMenu() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function initNav() {
    if (!nav || !navToggle) return;
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeMenu();
    });
  }

  function resetFormState() {
    form.classList.remove("is-hidden");
    success.classList.remove("is-on");
    formStatus.classList.remove("is-on");
    formStatus.textContent = "";
    submitBtn.disabled = false;
    submitBtn.textContent = "Send request";
    form.querySelectorAll(".field").forEach(function (field) {
      field.classList.remove("is-invalid");
    });
  }

  function openReserve(opener) {
    lastOpener = opener || null;
    resetFormState();
    if (dateInput) {
      dateInput.min = todayISO();
      if (!dateInput.value) dateInput.value = todayISO();
    }
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    var first = document.getElementById("reserve-name");
    if (first) first.focus();
  }

  function closeReserve() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    if (lastOpener && typeof lastOpener.focus === "function") {
      lastOpener.focus();
    }
  }

  function initDialog() {
    document.querySelectorAll("[data-open-reserve]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeMenu();
        openReserve(btn);
      });
    });
    document.querySelectorAll("[data-close-reserve]").forEach(function (btn) {
      btn.addEventListener("click", closeReserve);
    });
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeReserve();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeReserve();
    });
  }

  function emailOk(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setInvalid(name, on) {
    var field = form.querySelector('[data-field="' + name + '"]');
    if (field) field.classList.toggle("is-invalid", on);
  }

  function validate() {
    var data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      date: form.elements.date.value,
      window: form.elements.window.value,
      seats: form.elements.seats.value,
      notes: form.elements.notes.value.trim()
    };

    var errors = {
      name: data.name.length < 2,
      email: !emailOk(data.email),
      phone: data.phone.length > 24,
      date: !data.date || data.date < todayISO(),
      window: data.window !== "morning" && data.window !== "afternoon",
      seats: !/^[1-4]$/.test(data.seats),
      notes: data.notes.length > 400
    };

    Object.keys(errors).forEach(function (key) {
      setInvalid(key, errors[key]);
    });

    return {
      ok: !Object.keys(errors).some(function (key) { return errors[key]; }),
      data: data
    };
  }

  function initForm() {
    if (dateInput) dateInput.min = todayISO();

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var result = validate();
      if (!result.ok) {
        formStatus.textContent = "Check the marked fields and try again.";
        formStatus.classList.add("is-on");
        var firstInvalid = form.querySelector(".field.is-invalid input, .field.is-invalid select, .field.is-invalid textarea");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      formStatus.classList.remove("is-on");
      submitBtn.disabled = true;
      submitBtn.textContent = "Saving request";

      window.setTimeout(function () {
        try {
          window.sessionStorage.setItem("noll-cupping-request", JSON.stringify(result.data));
        } catch (err) {
          // Storage can be blocked; the on-page confirmation still stands.
        }
        form.classList.add("is-hidden");
        success.classList.add("is-on");
        var closeInSuccess = success.querySelector("[data-close-reserve]");
        if (closeInSuccess) closeInSuccess.focus();
      }, prefersReducedMotion() ? 0 : 400);
    });
  }

  initTheme();
  initReveal();
  initNav();
  initDialog();
  initForm();

  reduceQuery.addEventListener("change", function () {
    if (prefersReducedMotion()) revealAll();
  });
})();

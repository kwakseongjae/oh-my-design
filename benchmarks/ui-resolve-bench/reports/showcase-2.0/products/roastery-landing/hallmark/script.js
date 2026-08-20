(function () {
  "use strict";

  var header = document.querySelector(".nav-mast");
  var toggle = document.getElementById("mast-toggle");
  var nav = document.getElementById("mast-nav");
  var dialog = document.getElementById("reserve-dialog");
  var form = document.getElementById("reserve-form");
  var closeBtn = document.getElementById("reserve-close");
  var submitBtn = document.getElementById("reserve-submit");
  var statusEl = document.getElementById("reserve-status");
  var dateInput = document.getElementById("field-date");
  var openers = document.querySelectorAll(".js-open-reserve");

  function todayISO() {
    var now = new Date();
    var month = String(now.getMonth() + 1).padStart(2, "0");
    var day = String(now.getDate()).padStart(2, "0");
    return now.getFullYear() + "-" + month + "-" + day;
  }

  if (dateInput) {
    dateInput.min = todayISO();
  }

  if (toggle && header && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }

  function openReserve() {
    if (!dialog || typeof dialog.showModal !== "function") return;
    dialog.showModal();
    var first = dialog.querySelector("input, select, textarea, button");
    if (first) first.focus();
  }

  function closeReserve() {
    if (!dialog) return;
    dialog.close();
  }

  openers.forEach(function (btn) {
    btn.addEventListener("click", openReserve);
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeReserve);
  }

  if (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeReserve();
    });
  }

  var messages = {
    name: "Name is empty. We need something to put on the list. Type a name.",
    email: "That email is not usable. Check the @ and the domain, then try again.",
    date: "Date is missing or in the past. Pick a day from today onward.",
    seats: "Seats are not chosen. Pick how many chairs you need.",
    notes: ""
  };

  function fieldWrap(el) {
    return el.closest(".field");
  }

  function helpEl(el) {
    var wrap = fieldWrap(el);
    return wrap ? wrap.querySelector(".field__help") : null;
  }

  function isValid(el) {
    if (el.name === "date" && el.value && el.value < todayISO()) return false;
    return el.checkValidity();
  }

  function showError(el) {
    var wrap = fieldWrap(el);
    var help = helpEl(el);
    if (!wrap) return;
    wrap.classList.add("is-error");
    wrap.classList.remove("is-success");
    el.setAttribute("aria-invalid", "true");
    if (help && messages[el.name]) help.textContent = messages[el.name];
  }

  function clearError(el) {
    var wrap = fieldWrap(el);
    var help = helpEl(el);
    if (!wrap) return;
    wrap.classList.remove("is-error");
    el.removeAttribute("aria-invalid");
    if (help) {
      help.textContent = help.getAttribute("data-default") || help.textContent;
    }
  }

  function markTouched(el) {
    el.setAttribute("data-touched", "true");
  }

  if (form) {
    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      var help = helpEl(el);
      if (help && !help.getAttribute("data-default")) {
        help.setAttribute("data-default", help.textContent);
      }

      el.addEventListener("blur", function () {
        markTouched(el);
        if (el.name === "notes") return;
        if (!isValid(el)) showError(el);
        else clearError(el);
      });

      el.addEventListener("input", function () {
        if (el.getAttribute("data-touched") !== "true") return;
        if (el.name === "notes") return;
        if (!isValid(el)) showError(el);
        else clearError(el);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var invalid = [];
      form.querySelectorAll("[required]").forEach(function (el) {
        markTouched(el);
        if (!isValid(el)) {
          showError(el);
          invalid.push(el);
        } else {
          clearError(el);
        }
      });

      if (invalid.length) {
        submitBtn.setAttribute("data-state", "error");
        statusEl.textContent = "The form still has empty or unusable fields. Fix the marked ones.";
        invalid[0].focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.setAttribute("data-state", "loading");
      submitBtn.textContent = "Holding…";
      statusEl.textContent = "";

      window.setTimeout(function () {
        try {
          var payload = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            date: form.elements.date.value,
            seats: form.elements.seats.value,
            notes: form.elements.notes.value,
            savedAt: new Date().toISOString()
          };
          window.localStorage.setItem("kilnlot-cupping", JSON.stringify(payload));
        } catch (err) {
          /* storage may be blocked; the on-screen note is enough */
        }

        submitBtn.disabled = false;
        submitBtn.removeAttribute("disabled");
        submitBtn.setAttribute("data-state", "success");
        submitBtn.textContent = "Seat noted";
        dialog.classList.add("is-success");
        statusEl.textContent =
          "Recorded on this device. Nothing was sent — this page has no network. Keep the date, or wait until a desk is published.";
        form.querySelectorAll("input, select, textarea").forEach(function (el) {
          var wrap = fieldWrap(el);
          if (wrap && el.hasAttribute("required")) wrap.classList.add("is-success");
        });
      }, 320);
    });
  }
})();

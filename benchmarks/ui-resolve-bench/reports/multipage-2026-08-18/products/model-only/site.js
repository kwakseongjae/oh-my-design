(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function currentFile() {
    var file = window.location.pathname.split("/").pop();
    return (file || "index.html").toLowerCase();
  }

  function navKey(file) {
    if (file === "events.html" || file === "event-detail.html") return "events";
    if (file === "visit.html") return "visit";
    return "home";
  }

  function markCurrent() {
    var key = navKey(currentFile());
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      if (link.getAttribute("data-nav-link") === key) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function setupNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function setupMasthead() {
    if (reduceMotion) return;
    var masthead = document.querySelector(".masthead");
    if (!masthead) return;
    var last = window.scrollY;
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        masthead.classList.toggle("is-scrolled", y > 8);
        last = y;
      },
      { passive: true }
    );
  }

  markCurrent();
  setupNav();
  setupMasthead();
})();

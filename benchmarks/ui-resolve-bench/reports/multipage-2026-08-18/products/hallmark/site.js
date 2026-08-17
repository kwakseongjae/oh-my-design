(function () {
  "use strict";

  var file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!file || file === "/") file = "index.html";

  var map = {
    "index.html": "shop",
    "": "shop",
    "events.html": "events",
    "event-detail.html": "reading",
    "visit.html": "visit"
  };

  var current = map[file] || "shop";
  var links = document.querySelectorAll("[data-nav]");

  links.forEach(function (link) {
    if (link.getAttribute("data-nav") === current) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  var fold = document.querySelector(".mast-fold");
  if (fold) {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && fold.open) {
        fold.open = false;
        var summary = fold.querySelector("summary");
        if (summary) summary.focus();
      }
    });
  }
})();

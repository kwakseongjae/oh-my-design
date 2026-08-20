(function () {
  "use strict";

  var EVENTS = [
    {
      id: "EVT-READING",
      slug: "evt-reading",
      type: "reading",
      title: "An evening reading with Mira Solano",
      person: "Mira Solano",
      blurb: "A sample evening reading in the shop chairs. This person and program are fictional sample content.",
      image: "../assets/event-reading.jpg",
      width: 1248,
      height: 832,
      alt: "Sample photo of empty chairs set for an evening reading"
    },
    {
      id: "EVT-WORKSHOP",
      slug: "evt-workshop",
      type: "workshop",
      title: "A bookbinding table with June Pell",
      person: "June Pell",
      blurb: "A sample workshop at a paper-and-thread table. This person and program are fictional sample content.",
      image: "../assets/event-workshop.jpg",
      width: 1248,
      height: 832,
      alt: "Sample photo of a bookbinding table with paper and thread"
    },
    {
      id: "EVT-CLUB",
      slug: "evt-club",
      type: "club",
      title: "A window club with Theo Maren",
      person: "Theo Maren",
      blurb: "A sample book-club table by the window. This person and program are fictional sample content.",
      image: "../assets/event-club.jpg",
      width: 1248,
      height: 832,
      alt: "Sample photo of a book club table with tea and open books"
    }
  ];

  var FILTERS = ["all", "reading", "workshop", "club", "matinee"];

  function byId(id) {
    return document.getElementById(id);
  }

  function initNav() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var list = document.getElementById("site-nav-list");
    if (!header || !toggle || !list) return;
    toggle.addEventListener("click", function () {
      var open = header.getAttribute("data-nav-open") === "true";
      header.setAttribute("data-nav-open", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      list.classList.toggle("is-open", !open);
    });
  }

  function setFilterSummary(filter, count) {
    var summary = byId("filter-summary");
    if (!summary) return;
    if (filter === "all") {
      summary.textContent = "Showing all " + count + " sample events.";
    } else if (count === 0) {
      summary.textContent = "Showing no sample events for " + filter + ".";
    } else {
      summary.textContent = "Showing only " + filter + " sample events (" + count + ").";
    }
  }

  function applyFilter(filter) {
    var list = byId("event-list");
    var empty = byId("event-empty");
    if (!list || !empty) return;
    var cards = list.querySelectorAll("[data-event-type]");
    var visible = 0;
    cards.forEach(function (card) {
      var match = filter === "all" || card.getAttribute("data-event-type") === filter;
      card.hidden = !match;
      if (match) visible += 1;
    });
    empty.hidden = visible !== 0;
    list.setAttribute("data-state", visible === 0 ? "empty" : "default");
    list.setAttribute("data-filter", filter);
    setFilterSummary(filter, visible);
  }

  function initEvents() {
    var bar = byId("event-filter");
    var list = byId("event-list");
    if (!bar || !list) return;

    var buttons = bar.querySelectorAll("[data-filter]");
    var active = "all";

    function selectFilter(next) {
      if (FILTERS.indexOf(next) === -1) next = "all";
      active = next;
      buttons.forEach(function (button) {
        var on = button.getAttribute("data-filter") === active;
        button.setAttribute("aria-pressed", on ? "true" : "false");
        button.disabled = false;
      });
      list.setAttribute("data-state", "loading");
      list.setAttribute("aria-busy", "true");
      bar.setAttribute("data-state", "loading");
      window.setTimeout(function () {
        applyFilter(active);
        list.setAttribute("aria-busy", "false");
        bar.setAttribute("data-state", "default");
        var current = bar.querySelector('[data-filter="' + active + '"]');
        if (current) current.disabled = true;
      }, 180);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        selectFilter(button.getAttribute("data-filter"));
      });
    });

    applyFilter("all");
    var allBtn = bar.querySelector('[data-filter="all"]');
    if (allBtn) allBtn.disabled = true;

    var lookup = byId("event-lookup");
    var lookupField = byId("event-id");
    var lookupError = byId("lookup-error");
    var lookupHint = byId("lookup-hint");
    if (lookup && lookupField && lookupError) {
      lookup.addEventListener("submit", function (event) {
        event.preventDefault();
        var value = String(lookupField.value || "").trim().toUpperCase();
        lookupError.textContent = "";
        lookupField.removeAttribute("aria-invalid");
        if (!value) {
          lookup.setAttribute("data-state", "error");
          lookupError.textContent = "Enter a sample event ID such as EVT-READING.";
          lookupField.setAttribute("aria-invalid", "true");
          lookupField.setAttribute("aria-describedby", "lookup-hint lookup-error");
          lookupField.focus();
          return;
        }
        lookup.setAttribute("data-state", "default");
        window.location.href = "event-detail.html?id=" + encodeURIComponent(value);
      });
      if (lookupHint) {
        lookupField.setAttribute("aria-describedby", "lookup-hint");
      }
    }
  }

  function findEvent(raw) {
    var key = String(raw || "").trim();
    if (!key) return EVENTS[0];
    var upper = key.toUpperCase();
    var lower = key.toLowerCase();
    for (var i = 0; i < EVENTS.length; i += 1) {
      if (EVENTS[i].id === upper || EVENTS[i].slug === lower) return EVENTS[i];
    }
    return null;
  }

  function queryId() {
    var search = new URLSearchParams(window.location.search);
    return search.get("id");
  }

  function initDetail() {
    var root = byId("event-detail");
    if (!root) return;
    var requested = queryId();
    var record = findEvent(requested === null ? "EVT-READING" : requested);
    var errorBox = byId("detail-error");
    var article = byId("detail-record");
    var form = byId("interest-form");

    if (!record) {
      root.setAttribute("data-state", "error");
      var title = byId("detail-title");
      if (title) title.textContent = "This sample event is not on the list";
      if (errorBox) {
        errorBox.hidden = false;
        errorBox.textContent = "No sample event matches “" + String(requested) + "”. Try EVT-READING, EVT-WORKSHOP, or EVT-CLUB.";
      }
      if (article) article.hidden = true;
      if (form) form.hidden = true;
      return;
    }

    root.setAttribute("data-state", "default");
    if (errorBox) errorBox.hidden = true;
    if (article) {
      article.hidden = false;
      article.setAttribute("data-event-id", record.id);
    }

    var idEl = byId("detail-id");
    var titleEl = byId("detail-title");
    var personEl = byId("detail-person");
    var blurbEl = byId("detail-blurb");
    var typeEl = byId("detail-type");
    var flagEl = byId("detail-flag");
    var img = byId("detail-image");
    if (idEl) idEl.textContent = record.id;
    if (titleEl) titleEl.textContent = record.title;
    if (personEl) personEl.textContent = record.person + " (sample)";
    if (blurbEl) blurbEl.textContent = record.blurb;
    if (typeEl) typeEl.textContent = record.type;
    if (flagEl) flagEl.textContent = "Sample hold: not noted.";
    if (img) {
      img.src = record.image;
      img.width = record.width;
      img.height = record.height;
      img.alt = record.alt;
    }

    if (!form) return;
    var nameField = byId("interest-name");
    var nameError = byId("interest-error");
    var nameHint = byId("interest-hint");
    var submit = byId("interest-submit");
    var status = byId("interest-status");
    if (nameHint && nameField) {
      nameField.setAttribute("aria-describedby", "interest-hint");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!nameField || !nameError || !submit || !status) return;
      var name = String(nameField.value || "").trim();
      nameError.textContent = "";
      nameField.removeAttribute("aria-invalid");
      if (!name) {
        form.setAttribute("data-state", "error");
        nameError.textContent = "Enter a name to hold a sample seat for " + record.id + ".";
        nameField.setAttribute("aria-invalid", "true");
        nameField.setAttribute("aria-describedby", "interest-hint interest-error");
        nameField.focus();
        return;
      }

      form.setAttribute("data-state", "loading");
      submit.setAttribute("aria-busy", "true");
      submit.disabled = true;
      status.textContent = "Noting a sample seat for " + record.id + "…";
      window.setTimeout(function () {
        form.setAttribute("data-state", "success");
        submit.setAttribute("aria-busy", "false");
        submit.disabled = true;
        submit.setAttribute("data-state", "disabled");
        nameField.disabled = true;
        status.setAttribute("data-state", "success");
        status.textContent = "Sample seat noted for " + record.id + " under " + name + ".";
        if (flagEl) flagEl.textContent = "Sample hold: noted for " + name + ".";
        status.focus();
      }, 220);
    });
  }

  initNav();
  initEvents();
  initDetail();
})();

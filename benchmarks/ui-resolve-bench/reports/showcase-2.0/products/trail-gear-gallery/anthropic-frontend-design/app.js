(function () {
  "use strict";

  var CATALOG = {
    "ridge-two": {
      name: "Ridge Two",
      category: "Shelter",
      code: "RL-01",
      src: "../assets/item-tent.jpg",
      alt: "Olive two-person hiking tent pitched on a neutral studio backdrop",
      blurb:
        "Two-person, three-season dome in olive. Mesh door, clipped fly, stakes in the sack. Sample listing — not a live reservation.",
      specs: [
        ["Sleeps", "2 (sample)"],
        ["Trail weight", "4 lb 2 oz (sample)"],
        ["Packed", "18 × 7 in (sample)"],
        ["Season", "3 (sample)"]
      ]
    },
    "cinder-45": {
      name: "Cinder 45",
      category: "Carry",
      code: "RL-02",
      src: "../assets/item-pack.jpg",
      alt: "Rust-orange 45 liter hiking backpack standing upright on a studio backdrop",
      blurb:
        "45-liter weekend pack in rust nylon. Hip belt, ice-axe loop, lid pocket. Sample listing — not a live reservation.",
      specs: [
        ["Volume", "45 L (sample)"],
        ["Torso", "Adjustable (sample)"],
        ["Rain cover", "Stowed in lid (sample)"],
        ["Use", "Two-night ridge walk"]
      ]
    },
    "ember-ti": {
      name: "Ember Ti",
      category: "Cook",
      code: "RL-03",
      src: "../assets/item-stove.jpg",
      alt: "Small titanium camping stove with folded pot supports on a studio backdrop",
      blurb:
        "Folding titanium canister stove. Pocket size, wide pot supports. Sample listing — not a live reservation.",
      specs: [
        ["Fuel", "Threaded canister (sample)"],
        ["Weight", "2.6 oz (sample)"],
        ["Pack", "Legs fold into cup"],
        ["Boil claim", "Not published"]
      ]
    },
    switchback: {
      name: "Switchback",
      category: "Trek",
      code: "RL-04",
      src: "../assets/item-poles.jpg",
      alt: "Pair of collapsible trekking poles laid on a studio backdrop",
      blurb:
        "Collapsible poles with foam grips and a dirt-and-snow basket set. Sample listing — not a live reservation.",
      specs: [
        ["Sections", "3 (sample)"],
        ["Length", "105–135 cm (sample)"],
        ["Sold as", "Pair"],
        ["Grip", "Foam (sample)"]
      ]
    },
    "wick-mini": {
      name: "Wick Mini",
      category: "Light",
      code: "RL-05",
      src: "../assets/item-lantern.jpg",
      alt: "Compact rechargeable camping lantern glowing warm on a studio backdrop",
      blurb:
        "Rechargeable lantern with a warm wick glow, hang loop, and USB-C port. Sample listing — not a live reservation.",
      specs: [
        ["Output", "Dimmable (sample)"],
        ["Charge", "USB-C"],
        ["Hang", "Carabiner loop"],
        ["Runtime", "Not published"]
      ]
    },
    "moraine-20": {
      name: "Moraine 20",
      category: "Shelter",
      code: "RL-06",
      src: "../assets/item-bag.jpg",
      alt: "Rolled deep-teal sleeping bag with black straps on a studio backdrop",
      blurb:
        "Teal mummy in a strapped stuff sack. Comfort rating on the tag is sample data. Sample listing — not a live reservation.",
      specs: [
        ["Rating", "20°F (sample)"],
        ["Fill", "Synthetic (sample)"],
        ["Packed", "8 × 15 in (sample)"],
        ["Shape", "Mummy"]
      ]
    }
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var rack = document.getElementById("locker");
  var filters = document.getElementById("filters");
  var detail = document.getElementById("gear-detail");
  var detailEmpty = document.getElementById("detail-empty");
  var detailFilled = document.getElementById("detail-filled");
  var detailClose = document.getElementById("detail-close");
  var detailKicker = document.getElementById("detail-kicker");
  var detailHeading = document.getElementById("detail-heading");
  var detailBlurb = document.getElementById("detail-blurb");
  var detailSpecs = document.getElementById("detail-specs");
  var detailImage = document.getElementById("detail-image");

  var activeFilter = "all";
  var selectedId = null;

  function cards() {
    return Array.prototype.slice.call(rack.querySelectorAll(".card"));
  }

  function visibleCards() {
    return cards().filter(function (card) {
      return !card.hidden;
    });
  }

  function setRovingTab() {
    var vis = visibleCards();
    var focused = document.activeElement;
    var keep = vis.indexOf(focused) !== -1 ? focused : null;
    var selected = selectedId
      ? rack.querySelector('[data-id="' + selectedId + '"]')
      : null;
    if (selected && selected.hidden) selected = null;
    var primary = keep || selected || vis[0];

    vis.forEach(function (card) {
      card.tabIndex = card === primary ? 0 : -1;
    });
    cards().forEach(function (card) {
      if (card.hidden) card.tabIndex = -1;
    });
  }

  function applyFilter(next) {
    activeFilter = next;
    Array.prototype.forEach.call(filters.querySelectorAll(".filter"), function (btn) {
      var on = btn.getAttribute("data-filter") === next;
      btn.setAttribute("aria-checked", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
    });

    var shown = 0;
    cards().forEach(function (card) {
      var match = next === "all" || card.getAttribute("data-category") === next;
      card.hidden = !match;
      if (match) {
        card.style.setProperty("--i", String(shown));
        shown += 1;
      }
    });

    rack.classList.toggle("is-empty", shown === 0);

    if (selectedId) {
      var selected = rack.querySelector('[data-id="' + selectedId + '"]');
      if (!selected || selected.hidden) closeDetail(false);
    }

    setRovingTab();
  }

  function fillDetail(id) {
    var item = CATALOG[id];
    if (!item) return;

    detailKicker.textContent = item.category + " · " + item.code + " · sample data";
    detailHeading.textContent = item.name;
    detailBlurb.textContent = item.blurb;
    detail.classList.add("is-open");
    detailImage.src = item.src;
    detailImage.width = 1024;
    detailImage.height = 1024;
    detailImage.alt = item.alt;

    detailSpecs.textContent = "";
    item.specs.forEach(function (pair) {
      var row = document.createElement("div");
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = pair[0];
      dd.textContent = pair[1];
      row.appendChild(dt);
      row.appendChild(dd);
      detailSpecs.appendChild(row);
    });

    detailEmpty.hidden = true;
    detailFilled.hidden = false;
    detailClose.hidden = false;
  }

  function selectCard(card, moveFocus) {
    var id = card.getAttribute("data-id");
    selectedId = id;

    cards().forEach(function (other) {
      other.setAttribute("aria-selected", other === card ? "true" : "false");
    });
    rack.setAttribute("aria-activedescendant", card.id);

    fillDetail(id);
    setRovingTab();

    if (moveFocus) {
      detail.focus();
      if (!reduceMotion.matches) {
        detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }

  function closeDetail(restoreFocus) {
    var previous = selectedId
      ? rack.querySelector('[data-id="' + selectedId + '"]')
      : null;

    selectedId = null;
    cards().forEach(function (card) {
      card.setAttribute("aria-selected", "false");
    });
    rack.removeAttribute("aria-activedescendant");

    detailEmpty.hidden = false;
    detailFilled.hidden = true;
    detailClose.hidden = true;
    detail.classList.remove("is-open");
    detailKicker.textContent = "Locker bin";
    detailHeading.textContent = "Pull a bin to read the piece";
    detailImage.removeAttribute("src");
    detailImage.alt = "";

    setRovingTab();

    if (restoreFocus && previous && !previous.hidden) {
      previous.focus();
    }
  }

  function move(delta) {
    var vis = visibleCards();
    if (!vis.length) return;
    var current = document.activeElement;
    var index = vis.indexOf(current);
    if (index === -1) {
      index = vis.findIndex(function (card) {
        return card.getAttribute("aria-selected") === "true";
      });
    }
    if (index === -1) index = 0;
    var next = vis[(index + delta + vis.length) % vis.length];
    next.tabIndex = 0;
    current && current !== next && (current.tabIndex = -1);
    next.focus();
  }

  filters.addEventListener("click", function (event) {
    var btn = event.target.closest(".filter");
    if (!btn || !filters.contains(btn)) return;
    applyFilter(btn.getAttribute("data-filter"));
  });

  filters.addEventListener("keydown", function (event) {
    var radios = Array.prototype.slice.call(filters.querySelectorAll(".filter"));
    var current = event.target.closest(".filter");
    if (!current) return;
    var index = radios.indexOf(current);
    var next = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % radios.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + radios.length) % radios.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = radios.length - 1;
    }
    if (next === -1) return;
    event.preventDefault();
    radios[next].focus();
    applyFilter(radios[next].getAttribute("data-filter"));
  });

  rack.addEventListener("click", function (event) {
    var card = event.target.closest(".card");
    if (!card || card.hidden) return;
    selectCard(card, true);
  });

  rack.addEventListener("keydown", function (event) {
    var card = event.target.closest(".card");
    if (!card) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      var first = visibleCards()[0];
      if (first) {
        first.tabIndex = 0;
        card.tabIndex = -1;
        first.focus();
      }
    } else if (event.key === "End") {
      event.preventDefault();
      var vis = visibleCards();
      var last = vis[vis.length - 1];
      if (last) {
        last.tabIndex = 0;
        card.tabIndex = -1;
        last.focus();
      }
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCard(card, true);
    }
  });

  detailClose.addEventListener("click", function () {
    closeDetail(true);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (!selectedId) return;
    event.preventDefault();
    closeDetail(true);
  });

  if (window.PointerEvent && !reduceMotion.matches) {
    rack.addEventListener("pointermove", function (event) {
      if (reduceMotion.matches) return;
      var card = event.target.closest(".card");
      if (!card || card.hidden) return;
      var bin = card.querySelector(".card-bin");
      var rect = card.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width - 0.5;
      var py = (event.clientY - rect.top) / rect.height - 0.5;
      bin.style.transform =
        "perspective(920px) rotateX(" +
        (-py * 8).toFixed(2) +
        "deg) rotateY(" +
        (px * 10).toFixed(2) +
        "deg) translateY(-12px)";
    });

    rack.addEventListener("pointerleave", function (event) {
      var card = event.target.closest(".card");
      if (!card) {
        cards().forEach(function (c) {
          c.querySelector(".card-bin").style.transform = "";
        });
        return;
      }
    });

    cards().forEach(function (card) {
      card.addEventListener("pointerleave", function () {
        card.querySelector(".card-bin").style.transform = "";
      });
    });
  }

  applyFilter("all");
})();

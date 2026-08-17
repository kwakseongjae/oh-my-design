(() => {
  "use strict";

  const ITEMS = {
    tent: {
      name: "Ridge Two",
      catalog: "RD-10",
      category: "Shelter",
      image: "../assets/item-tent.jpg",
      alt: "Olive two-person hiking tent pitched on a neutral studio background",
      blurb:
        "A freestanding two-person tent for three-season overnights. Olive fly, mesh inner, and a wide side door. Stakes and guylines ride in the pole sack. Sample specifications — not a live locker listing.",
      specs: [
        ["Sleeps", "2"],
        ["Season", "3-season"],
        ["Trail weight", "2.1 kg (sample)"],
        ["Packed", "42 × 16 cm (sample)"],
        ["Doors", "1 side door"],
      ],
      rates: [
        ["Day", "$32"],
        ["Weekend", "$54"],
        ["Week", "$140"],
      ],
    },
    pack: {
      name: "Haul 45",
      catalog: "RD-22",
      category: "Carry",
      image: "../assets/item-pack.jpg",
      alt: "Rust-orange 45 liter hiking backpack standing upright on a neutral studio background",
      blurb:
        "A 45-liter overnight pack in rust nylon with a front shove-it and side compression. Hipbelt pockets and a lid pocket take the small kit. Sample specifications — not a live locker listing.",
      specs: [
        ["Volume", "45 L (sample)"],
        ["Frame", "Internal, removable stay"],
        ["Torso", "Adjustable (sample)"],
        ["Hipbelt", "Padded, two pockets"],
        ["Access", "Top lid + front shove-it"],
      ],
      rates: [
        ["Day", "$24"],
        ["Weekend", "$40"],
        ["Week", "$105"],
      ],
    },
    stove: {
      name: "Ember Cup",
      catalog: "RD-31",
      category: "Cook",
      image: "../assets/item-stove.jpg",
      alt: "Small titanium camping stove with folded pot-support legs on a neutral studio background",
      blurb:
        "A compact titanium canister stove. The pot supports fold into the cup for the stuff sack. Fuel canisters are sold at the desk, not rented. Sample specifications — not a live locker listing.",
      specs: [
        ["Fuel", "Threaded 110 g / 230 g canister"],
        ["Material", "Titanium cup and arms"],
        ["Packed", "Cup-nested (sample)"],
        ["Output", "Not published in this sample"],
        ["Includes", "Stove only — no canister"],
      ],
      rates: [
        ["Day", "$10"],
        ["Weekend", "$16"],
        ["Week", "$42"],
      ],
    },
    poles: {
      name: "Pairline",
      catalog: "RD-44",
      category: "Trail",
      image: "../assets/item-poles.jpg",
      alt: "Pair of collapsible trekking poles, one black and one silver, on a neutral studio background",
      blurb:
        "A mixed pair of collapsible trekking poles — one carbon, one alloy — with foam grips, wrist straps, and basket tips. Length is set at the desk. Sample specifications — not a live locker listing.",
      specs: [
        ["Pair", "1 carbon + 1 alloy (as photographed)"],
        ["Lock", "Flick-lock sections"],
        ["Grips", "Foam with straps"],
        ["Baskets", "Trail baskets fitted"],
        ["Length", "Set at pickup (sample)"],
      ],
      rates: [
        ["Day", "$12"],
        ["Weekend", "$20"],
        ["Week", "$52"],
      ],
    },
    lantern: {
      name: "Glowcell",
      catalog: "RD-51",
      category: "Light",
      image: "../assets/item-lantern.jpg",
      alt: "Compact rechargeable camping lantern glowing warm on a neutral studio background",
      blurb:
        "A rechargeable hanging lantern with a warm flood and a carabiner bail. Dimmer lives on the body; charge port is USB-C. Returned with a charge. Sample specifications — not a live locker listing.",
      specs: [
        ["Power", "USB-C rechargeable"],
        ["Light", "Warm flood, variable"],
        ["Hang", "Carabiner bail"],
        ["Weather", "Camp-dry (sample)"],
        ["Return", "With a charge, please"],
      ],
      rates: [
        ["Day", "$8"],
        ["Weekend", "$14"],
        ["Week", "$36"],
      ],
    },
    bag: {
      name: "Nightroll 20",
      catalog: "RD-18",
      category: "Sleep",
      image: "../assets/item-bag.jpg",
      alt: "Rolled sleeping bag in a deep-teal stuff sack with black compression straps on a neutral studio background",
      blurb:
        "A three-season bag issued in a deep-teal stuff sack with two compression straps. Rated figure is a sample label, not a lab sheet. Liner available at the desk. Sample specifications — not a live locker listing.",
      specs: [
        ["Rating", "20 °F / −6 °C (sample label)"],
        ["Shape", "Mummy (sample)"],
        ["Packed", "Rolled stuff sack"],
        ["Fit", "Regular (sample)"],
        ["Liner", "Optional, desk issue"],
      ],
      rates: [
        ["Day", "$18"],
        ["Weekend", "$30"],
        ["Week", "$78"],
      ],
    },
  };

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  const gallery = document.getElementById("gallery");
  const filters = document.getElementById("filters");
  const resultMeta = document.getElementById("result-meta");
  const detail = document.getElementById("detail-panel");
  const closeBtn = document.getElementById("detail-close");
  const cards = Array.from(gallery.querySelectorAll(".card"));

  let selectedId = null;

  function reduceMotion() {
    return motionQuery.matches;
  }

  function visibleCards() {
    return cards.filter((card) => !card.hidden);
  }

  function setActiveDescendant(card) {
    gallery.setAttribute("aria-activedescendant", card ? card.id : "");
  }

  function selectCard(id) {
    selectedId = id;
    cards.forEach((card) => {
      const on = card.dataset.id === id;
      card.setAttribute("aria-selected", on ? "true" : "false");
      if (on) setActiveDescendant(card);
    });
  }

  function populateDetail(id) {
    const item = ITEMS[id];
    if (!item) return;

    const img = document.getElementById("detail-image");
    img.src = item.image;
    img.alt = item.alt;
    img.width = 1024;
    img.height = 1024;

    document.getElementById("detail-title").textContent = item.name;
    document.getElementById("detail-category").textContent = item.category;
    document.getElementById("detail-catalog").textContent = item.catalog;
    document.getElementById("detail-blurb").textContent = item.blurb;
    document.getElementById("detail-kicker").textContent = `${item.category} · sample item`;

    const tbody = document.querySelector("#detail-specs tbody");
    tbody.replaceChildren(
      ...item.specs.map(([label, value]) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");
        th.scope = "row";
        th.textContent = label;
        td.textContent = value;
        tr.append(th, td);
        return tr;
      })
    );

    const rates = document.getElementById("detail-rates");
    rates.replaceChildren(
      ...item.rates.map(([label, value]) => {
        const wrap = document.createElement("div");
        wrap.className = "rate";
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = label;
        dd.textContent = value;
        wrap.append(dt, dd);
        return wrap;
      })
    );
  }

  function openDetail(id) {
    populateDetail(id);
    selectCard(id);
    if (typeof detail.showModal === "function") {
      if (!detail.open) detail.showModal();
    } else {
      detail.setAttribute("open", "");
    }
    closeBtn.focus();
  }

  function closeDetail() {
    if (typeof detail.close === "function") {
      if (detail.open) detail.close();
    } else {
      detail.removeAttribute("open");
    }
    const selected = cards.find((card) => card.dataset.id === selectedId);
    if (selected && !selected.hidden) selected.focus();
  }

  function restagger(list) {
    list.forEach((card, index) => {
      card.style.setProperty("--stagger-index", String(index));
      if (reduceMotion()) return;
      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation = "";
    });
  }

  function applyFilter(next) {
    filters.querySelectorAll("[data-filter]").forEach((btn) => {
      const on = btn.dataset.filter === next;
      btn.setAttribute("aria-checked", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
    });

    const shown = [];
    cards.forEach((card) => {
      const match = next === "all" || card.dataset.category === next;
      card.hidden = !match;
      if (!match) {
        card.tabIndex = -1;
        resetTilt(card);
      } else {
        card.tabIndex = 0;
        shown.push(card);
      }
    });

    gallery.dataset.empty = shown.length === 0 ? "true" : "false";
    const noun = shown.length === 1 ? "sample item" : "sample items";
    const scope = next === "all" ? "" : " in this category";
    resultMeta.textContent = `${shown.length} ${noun}${scope}`;

    restagger(shown);

    if (selectedId) {
      const selected = cards.find((card) => card.dataset.id === selectedId);
      if (selected && selected.hidden) {
        selected.setAttribute("aria-selected", "false");
        setActiveDescendant(shown[0] || null);
      } else if (selected) {
        setActiveDescendant(selected);
      }
    }
  }

  function resetTilt(card) {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }

  function tiltMax() {
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--motion-tilt-max");
    const value = Number.parseFloat(raw);
    return Number.isFinite(value) ? value : 0;
  }

  function onPointerMove(event) {
    if (reduceMotion() || !finePointer.matches) return;
    const max = tiltMax();
    if (!max) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${(-y * max).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(x * max).toFixed(2)}deg`);
  }

  function bindCard(card) {
    card.addEventListener("click", () => openDetail(card.dataset.id));
    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerleave", () => resetTilt(card));
    card.addEventListener("blur", () => resetTilt(card));
    card.addEventListener("focus", () => setActiveDescendant(card));
    card.addEventListener("keydown", (event) => {
      const keys = ["Enter", " ", "ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
      if (!keys.includes(event.key)) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(card.dataset.id);
        return;
      }

      const list = visibleCards();
      const index = list.indexOf(card);
      if (index < 0) return;

      let next = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % list.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + list.length) % list.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = list.length - 1;

      event.preventDefault();
      list[next].focus();
      setActiveDescendant(list[next]);
    });
  }

  filters.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;
    applyFilter(btn.dataset.filter);
  });

  filters.addEventListener("keydown", (event) => {
    const chips = Array.from(filters.querySelectorAll("[data-filter]"));
    const current = document.activeElement;
    const index = chips.indexOf(current);
    if (index < 0) return;

    let next = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % chips.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + chips.length) % chips.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = chips.length - 1;
    if (next < 0) return;

    event.preventDefault();
    chips[next].focus();
    applyFilter(chips[next].dataset.filter);
  });

  closeBtn.addEventListener("click", closeDetail);

  detail.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDetail();
  });

  detail.addEventListener("click", (event) => {
    const rect = detail.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) closeDetail();
  });

  motionQuery.addEventListener("change", () => {
    cards.forEach(resetTilt);
  });

  cards.forEach(bindCard);
  applyFilter("all");
})();

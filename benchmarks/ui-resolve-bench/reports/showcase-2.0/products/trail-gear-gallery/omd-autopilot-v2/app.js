(() => {
  const ITEMS = {
    "TG-001": {
      id: "TG-001",
      name: "Compact two-person hiking tent",
      category: "Shelter",
      src: "../assets/item-tent.jpg",
      alt: "Sample compact two-person hiking tent, olive green, on a studio background",
      copy: "Sample compact two-person hiking tent in olive green. Demonstration record only.",
    },
    "TG-002": {
      id: "TG-002",
      name: "45L hiking backpack",
      category: "Packs",
      src: "../assets/item-pack.jpg",
      alt: "Sample 45L hiking backpack, rust orange, standing upright on a studio background",
      copy: "Sample 45L hiking backpack in rust orange. Demonstration record only.",
    },
    "TG-003": {
      id: "TG-003",
      name: "Titanium camping stove",
      category: "Cook",
      src: "../assets/item-stove.jpg",
      alt: "Sample small titanium camping stove with folded legs on a studio background",
      copy: "Sample small titanium camping stove with folded legs. Demonstration record only.",
    },
    "TG-004": {
      id: "TG-004",
      name: "Collapsible trekking poles",
      category: "Trek",
      src: "../assets/item-poles.jpg",
      alt: "Sample pair of collapsible trekking poles crossed on a studio background",
      copy: "Sample pair of collapsible trekking poles. Demonstration record only.",
    },
    "TG-005": {
      id: "TG-005",
      name: "Rechargeable camping lantern",
      category: "Light",
      src: "../assets/item-lantern.jpg",
      alt: "Sample compact rechargeable camping lantern on a studio background",
      copy: "Sample compact rechargeable camping lantern. Demonstration record only.",
    },
    "TG-006": {
      id: "TG-006",
      name: "Rolled sleeping bag",
      category: "Sleep",
      src: "../assets/item-bag.jpg",
      alt: "Sample rolled sleeping bag in deep teal with straps on a studio background",
      copy: "Sample rolled sleeping bag in deep teal. Demonstration record only.",
    },
  };

  const main = document.getElementById("main");
  const filterGroup = document.getElementById("category-filter");
  const status = document.getElementById("filter-status");
  const loading = document.getElementById("catalog-loading");
  const empty = document.getElementById("catalog-empty");
  const error = document.getElementById("catalog-error");
  const list = document.getElementById("item-list");
  const dialog = document.getElementById("item-detail");
  const closeBtn = document.getElementById("detail-close");
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const reload = document.getElementById("reload-catalog");

  let lastFocus = null;
  let activeId = "TG-001";

  function cards() {
    return [...list.querySelectorAll(".card")];
  }

  function options() {
    return [...list.querySelectorAll(".card-hit")].filter((node) => !node.closest(".card").hidden);
  }

  function selectedCategory() {
    const checked = filterGroup.querySelector("input[name='category']:checked");
    return checked ? checked.value : "all";
  }

  function setFiltersDisabled(disabled) {
    filterGroup.querySelectorAll("input").forEach((input) => {
      input.disabled = disabled;
    });
    filterGroup.dataset.state = disabled ? "disabled" : "default";
  }

  function announce(message, state) {
    status.textContent = message;
    status.dataset.state = state;
  }

  function applyFilter() {
    const category = selectedCategory();
    let visible = 0;
    cards().forEach((card) => {
      const match = category === "all" || card.dataset.category === category;
      card.hidden = !match;
      if (match) visible += 1;
    });

    empty.hidden = visible !== 0;
    if (visible === 0) {
      list.hidden = true;
      main.dataset.state = "empty";
      announce("No sample items in this category.", "empty");
      return;
    }

    list.hidden = false;
    const visibleOptions = options();
    const stillActive = visibleOptions.find((option) => option.dataset.itemId === activeId);
    setActive(stillActive ? stillActive.dataset.itemId : visibleOptions[0].dataset.itemId, false);

    if (category === "all") {
      main.dataset.state = "default";
      announce("Showing all sample items.", "success");
    } else {
      main.dataset.state = "success";
      announce(`Showing only ${category} sample items.`, "success");
    }
  }

  function setActive(id, select) {
    activeId = id;
    options().forEach((option) => {
      const on = option.dataset.itemId === id;
      option.tabIndex = on ? 0 : -1;
      if (select) option.setAttribute("aria-selected", on ? "true" : "false");
    });
    list.setAttribute("aria-activedescendant", `item-${id}`);
  }

  function openDetail(id) {
    const item = ITEMS[id];
    if (!item) {
      error.hidden = false;
      error.dataset.state = "error";
      main.dataset.state = "error";
      announce("The sample catalog could not be shown.", "error");
      return;
    }

    lastFocus = document.getElementById(`item-${id}`);
    setActive(id, true);
    document.getElementById("detail-id").textContent = item.id;
    document.getElementById("detail-title").textContent = item.name;
    document.getElementById("detail-copy").textContent = item.copy;
    const image = document.getElementById("detail-image");
    image.src = item.src;
    image.alt = item.alt;
    dialog.dataset.state = "success";
    dialog.hidden = false;
    main.dataset.state = "success";
    announce(`Opened detail for ${item.id}.`, "success");
    closeBtn.focus();
  }

  function closeDetail() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    dialog.dataset.state = "default";
    if (lastFocus) lastFocus.focus();
    announce(`Closed detail for ${activeId}.`, "success");
  }

  function readyCatalog() {
    error.hidden = true;
    loading.hidden = true;
    setFiltersDisabled(false);
    cards().forEach((card) => {
      card.querySelector(".card-hit").disabled = false;
    });
    applyFilter();
  }

  function startLoading() {
    main.dataset.state = "loading";
    loading.hidden = false;
    empty.hidden = true;
    error.hidden = true;
    setFiltersDisabled(true);
    cards().forEach((card) => {
      card.querySelector(".card-hit").disabled = true;
    });
    announce("Loading sample catalog.", "default");
  }

  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    siteNav.dataset.open = String(!open);
    if (!open) navToggle.dataset.state = "success";
  });

  filterGroup.addEventListener("change", applyFilter);

  list.addEventListener("click", (event) => {
    const option = event.target.closest(".card-hit");
    if (!option || option.disabled) return;
    openDetail(option.dataset.itemId);
  });

  list.addEventListener("keydown", (event) => {
    const visible = options();
    if (!visible.length) return;
    const current = visible.find((option) => option.dataset.itemId === activeId) || visible[0];
    const index = visible.indexOf(current);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = visible[Math.min(visible.length - 1, index + 1)];
      setActive(next.dataset.itemId, false);
      next.focus();
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = visible[Math.max(0, index - 1)];
      setActive(next.dataset.itemId, false);
      next.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(visible[0].dataset.itemId, false);
      visible[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      const last = visible[visible.length - 1];
      setActive(last.dataset.itemId, false);
      last.focus();
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail(current.dataset.itemId);
    }
  });

  closeBtn.addEventListener("click", closeDetail);

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDetail();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [closeBtn];
    event.preventDefault();
    closeBtn.focus();
    void focusable;
  });

  reload.addEventListener("click", () => {
    startLoading();
    window.setTimeout(readyCatalog, 200);
  });

  document.querySelectorAll(".card-media img").forEach((image) => {
    image.addEventListener("error", () => {
      const card = image.closest(".card");
      card.dataset.state = "error";
      error.hidden = false;
      main.dataset.state = "error";
    });
  });

  document.querySelector('[data-cta="primary"]').addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("gallery").scrollIntoView({ block: "start" });
    filterGroup.querySelector("input").focus();
  });

  startLoading();
  window.setTimeout(readyCatalog, 200);
})();

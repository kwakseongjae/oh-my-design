(() => {
  const ITEMS = {
    tent: {
      title: "Ridge Two",
      category: "Shelter",
      rate: "Sample daily rate · $38",
      src: "../assets/item-tent.jpg",
      alt: "Compact two-person olive hiking tent pitched on a neutral studio background",
      copy:
        "Two-person, three-season fly in olive. Sample listing only — packed size, pole spec, and footprint are demonstration notes, not a live locker record.",
    },
    pack: {
      title: "Ember 45",
      category: "Carry",
      rate: "Sample daily rate · $22",
      src: "../assets/item-pack.jpg",
      alt: "Rust-orange 45 liter hiking backpack standing upright on a neutral studio background",
      copy:
        "Forty-five liter rust-orange pack with a padded hip belt. Sample listing only. This card does not represent a counted unit on the wall.",
    },
    stove: {
      title: "Ember Ti",
      category: "Kitchen",
      rate: "Sample daily rate · $12",
      src: "../assets/item-stove.jpg",
      alt: "Small titanium camping stove with folded legs on a neutral studio background",
      copy:
        "Fold-leg titanium canister stove. Fuel canisters are not part of this sample listing. Confirm kit contents at the desk.",
    },
    poles: {
      title: "Switchback poles",
      category: "Trail",
      rate: "Sample daily rate · $10",
      src: "../assets/item-poles.jpg",
      alt: "Pair of collapsible trekking poles crossed on a neutral studio background",
      copy:
        "Collapsible pair with cork-style grips. Sample listing only — length marks and lock type are demonstration copy.",
    },
    lantern: {
      title: "Glow compact",
      category: "Trail",
      rate: "Sample daily rate · $8",
      src: "../assets/item-lantern.jpg",
      alt: "Compact rechargeable camping lantern glowing softly on a neutral studio background",
      copy:
        "USB-C rechargeable lantern with a dimmable sample spec. Charge state and remaining run-time are not published here.",
    },
    bag: {
      title: "Nightroll 20",
      category: "Shelter",
      rate: "Sample daily rate · $16",
      src: "../assets/item-bag.jpg",
      alt: "Rolled deep-teal sleeping bag with compression straps on a neutral studio background",
      copy:
        "Deep-teal stuff sack and a sample 20° comfort note. Temperature rating and fill are demonstration data.",
    },
  };

  const gallery = document.getElementById("gallery");
  const filters = Array.from(document.querySelectorAll(".filter"));
  const status = document.getElementById("filter-status");
  const empty = document.getElementById("empty-state");
  const dialog = document.getElementById("item-detail");
  const closeBtn = document.getElementById("detail-close");
  const detailTitle = document.getElementById("detail-title");
  const detailImage = document.getElementById("detail-image");
  const detailCategory = document.getElementById("detail-category");
  const detailRate = document.getElementById("detail-rate");
  const detailCopy = document.getElementById("detail-copy");

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reduceMotion = () => motionQuery.matches;

  const cards = () => Array.from(gallery.querySelectorAll(".card"));
  const visibleCards = () => cards().filter((card) => !card.hidden);

  const setActiveDescendant = (card) => {
    gallery.setAttribute("aria-activedescendant", card ? card.id : "");
  };

  const setRovingTab = (target) => {
    cards().forEach((card) => {
      card.tabIndex = card === target && !card.hidden ? 0 : -1;
    });
  };

  const selectCard = (card, { open } = { open: false }) => {
    cards().forEach((item) => {
      item.setAttribute("aria-selected", item === card ? "true" : "false");
    });
    if (card) {
      setRovingTab(card);
      setActiveDescendant(card);
      if (open) openDetail(card);
    }
  };

  const fillDetail = (id) => {
    const item = ITEMS[id];
    if (!item) return;
    detailTitle.textContent = item.title;
    detailCategory.textContent = item.category;
    detailRate.textContent = item.rate;
    detailCopy.textContent = item.copy;
    detailImage.src = item.src;
    detailImage.alt = item.alt;
    detailImage.width = 1024;
    detailImage.height = 1024;
  };

  const openDetail = (card) => {
    fillDetail(card.dataset.id);
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    closeBtn.focus();
  };

  const closeDetail = () => {
    const selected = gallery.querySelector('.card[aria-selected="true"]');
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      dialog.classList.remove("is-closing");
      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
      if (selected && !selected.hidden) selected.focus();
    };

    if (reduceMotion() || !dialog.open) {
      finish();
      return;
    }

    dialog.classList.add("is-closing");
    const end = (event) => {
      if (event.target !== dialog) return;
      dialog.removeEventListener("animationend", end);
      finish();
    };
    dialog.addEventListener("animationend", end);
    window.setTimeout(finish, 280);
  };

  const announceFilter = (filter, count) => {
    if (filter === "all") {
      status.textContent = `Showing ${count} sample items`;
      return;
    }
    const label = filter.charAt(0).toUpperCase() + filter.slice(1);
    status.textContent = `Showing ${count} sample item${count === 1 ? "" : "s"} in ${label}`;
  };

  const restagger = (visible) => {
    visible.forEach((card, index) => {
      card.style.setProperty("--stagger-index", String(index));
      if (reduceMotion()) return;
      card.classList.remove("card-enter");
      card.classList.add("is-restagger");
      void card.offsetWidth;
      card.classList.add("card-enter");
    });
  };

  const syncFilterTabs = (filter) => {
    filters.forEach((button) => {
      const on = button.dataset.filter === filter;
      button.setAttribute("aria-checked", on ? "true" : "false");
      button.tabIndex = on ? 0 : -1;
    });
  };

  const applyFilter = (filter, { animate } = { animate: true }) => {
    syncFilterTabs(filter);

    cards().forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.hidden = !match;
      if (!match) {
        card.setAttribute("aria-selected", "false");
        card.tabIndex = -1;
      }
    });

    const visible = visibleCards();
    empty.hidden = visible.length > 0;
    gallery.hidden = visible.length === 0;
    announceFilter(filter, visible.length);

    if (visible.length) {
      const selected = visible.find((card) => card.getAttribute("aria-selected") === "true");
      const next = selected || visible[0];
      setRovingTab(next);
      setActiveDescendant(next);
      if (animate) restagger(visible);
    } else {
      setActiveDescendant(null);
    }
  };

  const tiltCard = (card, event) => {
    if (reduceMotion()) return;
    const styles = getComputedStyle(document.documentElement);
    const raw = styles.getPropertyValue("--motion-tilt-max").trim();
    const max = Number.parseFloat(raw) || 0;
    if (!max) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-y", `${(px * max * 2).toFixed(2)}deg`);
    card.style.setProperty("--tilt-x", `${(-py * max * 2).toFixed(2)}deg`);
  };

  const resetTilt = (card) => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  const moveSelection = (current, delta) => {
    const visible = visibleCards();
    if (!visible.length) return;
    const index = Math.max(0, visible.indexOf(current));
    const next = visible[(index + delta + visible.length) % visible.length];
    selectCard(next);
    next.focus();
  };

  filters.forEach((button, index) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
    button.addEventListener("keydown", (event) => {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      const delta = keys[event.key];
      if (!delta) return;
      event.preventDefault();
      const next = filters[(index + delta + filters.length) % filters.length];
      applyFilter(next.dataset.filter);
      next.focus();
    });
  });

  gallery.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (!card || card.hidden) return;
    selectCard(card, { open: true });
  });

  gallery.addEventListener("keydown", (event) => {
    const card = event.target.closest(".card");
    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCard(card, { open: true });
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveSelection(card, 1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveSelection(card, -1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      const first = visibleCards()[0];
      if (first) {
        selectCard(first);
        first.focus();
      }
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const visible = visibleCards();
      const last = visible[visible.length - 1];
      if (last) {
        selectCard(last);
        last.focus();
      }
    }
  });

  cards().forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType === "mouse") tiltCard(card, event);
    });
    card.addEventListener("pointerleave", () => resetTilt(card));
    card.addEventListener("blur", () => resetTilt(card));
  });

  closeBtn.addEventListener("click", () => closeDetail());

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDetail();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDetail();
  });

  applyFilter("all", { animate: false });
})();

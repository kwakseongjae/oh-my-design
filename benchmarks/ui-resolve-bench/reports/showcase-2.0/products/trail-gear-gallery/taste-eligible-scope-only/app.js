(() => {
  const ITEMS = {
    tent: {
      name: "Ridge Two",
      category: "Shelter",
      src: "../assets/item-tent.jpg",
      alt: "Olive two-person hiking tent with the door tied open, sample listing",
      copy: "Two-person tent with a full fly and a vestibule for wet boots.",
      rate: "$28 per weekend",
    },
    pack: {
      name: "Haul 45",
      category: "Carry",
      src: "../assets/item-pack.jpg",
      alt: "Rust orange 45 liter hiking backpack standing upright, sample listing",
      copy: "45 liter weekend pack with a floating lid and stretch side pockets. Capacity is sample data.",
      rate: "$22 per weekend",
    },
    stove: {
      name: "Ember Can",
      category: "Camp",
      src: "../assets/item-stove.jpg",
      alt: "Small titanium camping stove with folded wire legs, sample listing",
      copy: "Folding canister stove for a small pot. Fuel is not included.",
      rate: "$12 per weekend",
    },
    poles: {
      name: "Switch Pair",
      category: "Carry",
      src: "../assets/item-poles.jpg",
      alt: "Pair of collapsible trekking poles with foam grips, sample listing",
      copy: "Collapsible poles with carbide tips and winter baskets.",
      rate: "$10 per weekend",
    },
    lantern: {
      name: "Halo Mini",
      category: "Camp",
      src: "../assets/item-lantern.jpg",
      alt: "Compact rechargeable camping lantern glowing on a grey studio sweep, sample listing",
      copy: "Rechargeable lantern with a hanging clip and a dimmer wheel.",
      rate: "$8 per weekend",
    },
    bag: {
      name: "Tide Roll",
      category: "Shelter",
      src: "../assets/item-bag.jpg",
      alt: "Rolled teal sleeping bag with black compression straps, sample listing",
      copy: "Synthetic sleeping bag in a strapped stuff sack. Temperature rating is given at pickup.",
      rate: "$16 per weekend",
    },
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const gallery = document.getElementById("gallery");
  const cards = Array.from(gallery.querySelectorAll(".card"));
  const filters = Array.from(document.querySelectorAll(".filters [data-filter]"));
  const status = document.getElementById("filter-status");
  const empty = document.getElementById("empty-state");
  const dialog = document.getElementById("item-detail");
  const closeBtn = dialog.querySelector("[data-close]");
  const themeBtn = document.querySelector("[data-theme-toggle]");

  let selectedId = null;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  function visibleCards() {
    return cards.filter((card) => !card.hidden);
  }

  function setRovingTab() {
    const vis = visibleCards();
    cards.forEach((card) => {
      card.tabIndex = -1;
    });
    const current = vis.find((card) => card.dataset.id === selectedId) || vis[0];
    if (current) current.tabIndex = 0;
  }

  const ALL_SPANS = {
    tent: "wide",
    pack: "narrow",
    stove: "narrow",
    poles: "wide",
    lantern: "half",
    bag: "half",
  };

  function announceCount() {
    const n = visibleCards().length;
    status.textContent =
      n === 0
        ? "No sample items in this category"
        : n === 1
          ? "Showing 1 sample item"
          : `Showing ${n} sample items`;
    empty.hidden = n !== 0;
    gallery.hidden = n === 0;
  }

  function layoutSpans() {
    const vis = visibleCards();
    if (vis.length === 6) {
      vis.forEach((card) => {
        card.dataset.span = ALL_SPANS[card.dataset.id];
      });
      return;
    }
    if (vis.length === 1) {
      vis[0].dataset.span = "full";
      return;
    }
    vis.forEach((card) => {
      card.dataset.span = "half";
    });
  }

  function setFilterTab() {
    filters.forEach((btn) => {
      btn.tabIndex = btn.getAttribute("aria-checked") === "true" ? 0 : -1;
    });
  }

  function restagger() {
    visibleCards().forEach((card, i) => {
      card.style.setProperty("--i", String(i));
      card.classList.remove("is-entering");
      void card.offsetWidth;
      card.classList.add("is-entering");
    });
  }

  function applyFilter(next) {
    filters.forEach((btn) => {
      btn.setAttribute("aria-checked", String(btn.dataset.filter === next));
    });
    cards.forEach((card) => {
      const show = next === "all" || card.dataset.category === next;
      card.hidden = !show;
    });
    layoutSpans();
    announceCount();
    setRovingTab();
    setFilterTab();
    restagger();
  }

  function fillDetail(id) {
    const item = ITEMS[id];
    if (!item) return;
    const img = document.getElementById("detail-image");
    img.src = item.src;
    img.width = 1024;
    img.height = 1024;
    img.alt = item.alt;
    document.getElementById("detail-title").textContent = item.name;
    document.getElementById("detail-category").textContent = item.category;
    document.getElementById("detail-copy").textContent = item.copy;
    document.getElementById("detail-rate").textContent = item.rate;
  }

  function selectCard(id, open) {
    selectedId = id;
    cards.forEach((card) => {
      const on = card.dataset.id === id;
      card.setAttribute("aria-selected", String(on));
    });
    setRovingTab();
    if (open) {
      fillDetail(id);
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      closeBtn.focus();
    }
  }

  function closeDetail() {
    if (dialog.open) dialog.close();
    const current = cards.find((card) => card.dataset.id === selectedId);
    if (current && !current.hidden) current.focus();
  }

  function moveSelection(delta) {
    const vis = visibleCards();
    if (!vis.length) return;
    const currentIndex = Math.max(
      0,
      vis.findIndex((card) => card.dataset.id === selectedId || card.tabIndex === 0)
    );
    const next = vis[(currentIndex + delta + vis.length) % vis.length];
    selectedId = next.dataset.id;
    setRovingTab();
    next.focus();
  }

  function resetTilt(face) {
    face.style.transform = "perspective(920px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  function bindTilt(card) {
    const face = card.querySelector(".card-face");
    if (!face) return;

    const onMove = (event) => {
      if (reduceMotion.matches || !canHover.matches) return;
      const tokens = getComputedStyle(document.documentElement);
      const tiltYMax = parseFloat(tokens.getPropertyValue("--motion-tilt-y")) || 0;
      const tiltXMax = parseFloat(tokens.getPropertyValue("--motion-tilt-x")) || 0;
      if (!tiltXMax && !tiltYMax) return;
      const box = card.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      const tiltY = px * 2 * tiltYMax;
      const tiltX = -py * 2 * tiltXMax;
      face.style.transform = `perspective(920px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(calc(var(--motion-lift) * -1))`;
      card.classList.add("is-hot");
    };

    const onLeave = () => {
      resetTilt(face);
      card.classList.remove("is-hot");
    };

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    card.addEventListener("blur", onLeave);
  }

  function applyThemeLabel() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkNow =
      document.documentElement.dataset.theme === "dark" ||
      (!document.documentElement.dataset.theme && prefersDark);
    themeBtn.textContent = darkNow ? "Use light" : "Use dark";
  }

  function readTheme() {
    try {
      return localStorage.getItem("cairn-theme");
    } catch (err) {
      return null;
    }
  }

  function writeTheme(value) {
    try {
      localStorage.setItem("cairn-theme", value);
    } catch (err) {
      /* ignore quota or private-mode failures */
    }
  }

  function initTheme() {
    const stored = readTheme();
    if (stored === "light" || stored === "dark") {
      document.documentElement.dataset.theme = stored;
    }
    applyThemeLabel();
    themeBtn.addEventListener("click", () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const current =
        document.documentElement.dataset.theme || (prefersDark ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      writeTheme(next);
      applyThemeLabel();
    });
  }

  function bindImageFallback(img) {
    img.addEventListener("error", () => {
      if (img.dataset.failed) return;
      img.dataset.failed = "true";
      img.alt = img.alt
        ? `${img.alt}. Photo failed to load.`
        : "Sample listing photo failed to load.";
    });
  }

  document.querySelectorAll("img").forEach(bindImageFallback);

  cards.forEach((card) => {
    bindTilt(card);
    card.addEventListener("click", () => selectCard(card.dataset.id, true));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectCard(card.dataset.id, true);
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        moveSelection(1);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        moveSelection(-1);
      } else if (event.key === "Home") {
        event.preventDefault();
        const first = visibleCards()[0];
        if (first) {
          selectedId = first.dataset.id;
          setRovingTab();
          first.focus();
        }
      } else if (event.key === "End") {
        event.preventDefault();
        const vis = visibleCards();
        const last = vis[vis.length - 1];
        if (last) {
          selectedId = last.dataset.id;
          setRovingTab();
          last.focus();
        }
      }
    });
  });

  filters.forEach((btn, index) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
    btn.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowUp") {
        return;
      }
      event.preventDefault();
      const dir = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
      const next = filters[(index + dir + filters.length) % filters.length];
      applyFilter(next.dataset.filter);
      next.focus();
    });
  });

  closeBtn.addEventListener("click", closeDetail);
  dialog.addEventListener("close", () => {
    const current = cards.find((card) => card.dataset.id === selectedId);
    if (current && !current.hidden) current.focus();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDetail();
  });

  reduceMotion.addEventListener("change", () => {
    cards.forEach((card) => {
      const face = card.querySelector(".card-face");
      if (face) resetTilt(face);
      card.classList.remove("is-hot");
    });
  });

  initTheme();
  layoutSpans();
  announceCount();
  setRovingTab();
  setFilterTab();
})();

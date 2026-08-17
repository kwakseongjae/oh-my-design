(() => {
  const NOTES = {
    "item-tent":
      "Compact two-person hiking tent, olive fly, mesh door. Photographed pitched for the sample catalog.",
    "item-pack":
      "45L hiking pack in rust orange, standing for the photograph. Sample catalog entry.",
    "item-stove":
      "Small titanium camping stove with folded legs. Sample catalog entry.",
    "item-poles":
      "Pair of collapsible trekking poles, crossed for the photograph. Sample catalog entry.",
    "item-lantern":
      "Compact rechargeable lantern, photographed glowing. Sample catalog entry.",
    "item-bag":
      "Deep teal sleeping bag in a strapped roll. Sample catalog entry.",
  };

  const catalog = document.getElementById("catalog");
  const stand = document.getElementById("study-stand");
  const filters = [...document.querySelectorAll(".filter")];
  const status = document.getElementById("filter-status");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (!catalog || !stand) return;

  document.documentElement.classList.add("js");

  const items = () => [...catalog.querySelectorAll(".specimen")];
  const visibleItems = () => items().filter((item) => !item.hidden);

  let activeId = items()[0]?.id || "";
  let selectedId = "";
  let filter = "all";

  function setActive(id, { focus = false } = {}) {
    const next = document.getElementById(id);
    if (!next || next.hidden) return;
    items().forEach((item) => {
      item.tabIndex = item.id === id ? 0 : -1;
    });
    activeId = id;
    catalog.setAttribute("aria-activedescendant", id);
    if (focus) next.focus();
  }

  function fillStand(item) {
    const img = item.querySelector("img");
    document.getElementById("detail-heading").textContent = item.dataset.name;
    document.getElementById("detail-accession").textContent =
      `${item.dataset.accession} · ${labelFor(item.dataset.category)}`;
    document.getElementById("detail-copy").textContent = NOTES[item.id] || "";
    document.getElementById("detail-category").textContent = labelFor(
      item.dataset.category
    );
    const detailImg = document.getElementById("detail-image");
    detailImg.src = img.src;
    detailImg.width = img.width;
    detailImg.height = img.height;
    detailImg.alt = img.alt;
  }

  function openStand(item) {
    items().forEach((entry) => {
      entry.setAttribute("aria-selected", entry.id === item.id ? "true" : "false");
    });
    selectedId = item.id;
    fillStand(item);
    if (typeof stand.show === "function") {
      if (!stand.open) stand.show();
    } else {
      stand.setAttribute("open", "");
    }
    document.querySelector("[data-close]")?.focus();
  }

  function closeStand({ restore = true } = {}) {
    if (typeof stand.close === "function") {
      if (stand.open) stand.close();
    } else {
      stand.removeAttribute("open");
    }
    items().forEach((entry) => entry.setAttribute("aria-selected", "false"));
    const restoreTo = selectedId;
    selectedId = "";
    if (restore && restoreTo) setActive(restoreTo, { focus: true });
  }

  function labelFor(category) {
    return (
      {
        shelter: "Shelter",
        packs: "Packs",
        cook: "Cook",
        trek: "Trek",
        light: "Light",
        sleep: "Sleep",
      }[category] || category
    );
  }

  function applyFilter(nextFilter) {
    filter = nextFilter;
    filters.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        button.dataset.filter === filter ? "true" : "false"
      );
    });

    let shown = 0;
    items().forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.hidden = !match;
      if (match) {
        item.style.setProperty("--i", String(shown));
        item.classList.remove("is-entering");
        if (!reduced.matches) {
          void item.offsetWidth;
          item.classList.add("is-entering");
        }
        shown += 1;
      }
    });

    const visible = visibleItems();
    const noun = shown === 1 ? "sample item" : "sample items";
    const scope = filter === "all" ? "" : ` in ${labelFor(filter)}`;
    status.textContent = `Showing ${shown} ${noun}${scope}. Holdings counts are not published.`;

    if (selectedId && document.getElementById(selectedId)?.hidden) {
      closeStand({ restore: false });
    }

    const nextActive =
      (!document.getElementById(activeId)?.hidden && activeId) ||
      visible[0]?.id;
    if (nextActive) setActive(nextActive);
  }

  catalog.addEventListener("click", (event) => {
    const item = event.target.closest(".specimen");
    if (!item || item.hidden) return;
    setActive(item.id);
    openStand(item);
  });

  catalog.addEventListener("keydown", (event) => {
    const visible = visibleItems();
    const index = visible.findIndex((item) => item.id === activeId);
    if (index < 0) return;

    const cols =
      getComputedStyle(catalog).gridTemplateColumns.split(" ").filter(Boolean)
        .length || 1;

    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = Math.min(visible.length - 1, index + (event.key === "ArrowDown" ? cols : 1));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = Math.max(0, index - (event.key === "ArrowUp" ? cols : 1));
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = visible.length - 1;
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openStand(visible[index]);
      return;
    } else {
      return;
    }

    event.preventDefault();
    setActive(visible[next].id, { focus: true });
  });

  filters.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  stand.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) closeStand();
  });

  stand.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeStand();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && stand.open) {
      event.preventDefault();
      closeStand();
    }
  });

  if (finePointer.matches && !reduced.matches) {
    catalog.addEventListener("pointermove", (event) => {
      const item = event.target.closest(".specimen");
      if (!item || item.hidden) return;
      const box = item.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      item.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
      item.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
    });
    catalog.addEventListener("pointerleave", (event) => {
      const item = event.target.closest?.(".specimen");
      if (item) {
        item.style.removeProperty("--tilt-x");
        item.style.removeProperty("--tilt-y");
      }
    });
  }

  applyFilter("all");
})();

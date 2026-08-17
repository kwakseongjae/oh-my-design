(() => {
  const NOTES = {
    tent: {
      title: "Olive dome tent",
      category: "Shelter",
      src: "../assets/item-tent.jpg",
      alt: "Olive two-person dome tent with the mesh door open, studio shot",
      body: "Two-person dome with a mesh door and orange clip-points on the seams. Sample listing — photographed for this board, not a live reservation."
    },
    pack: {
      title: "Rust 45 pack",
      category: "Carry",
      src: "../assets/item-pack.jpg",
      alt: "Rust-orange hiking pack standing upright with a front bungee, studio shot",
      body: "Tall rust pack with a front bungee, lid straps, and a padded hip belt. Sample listing — photographed for this board, not a live reservation."
    },
    stove: {
      title: "Folded canister stove",
      category: "Cook",
      src: "../assets/item-stove.jpg",
      alt: "Small titanium camping stove with folded wire legs, studio shot",
      body: "Compact canister stove with the wire legs folded and the pot stand inverted over the burner. Sample listing — photographed for this board, not a live reservation."
    },
    poles: {
      title: "Crossing poles",
      category: "Trail",
      src: "../assets/item-poles.jpg",
      alt: "Pair of collapsible trekking poles, one black and one silver, studio shot",
      body: "A pair: one black shaft, one silver. Foam grips, wrist straps, and snow baskets. Sample listing — photographed for this board, not a live reservation."
    },
    lantern: {
      title: "Warm-glow lantern",
      category: "Light",
      src: "../assets/item-lantern.jpg",
      alt: "Compact rechargeable camping lantern glowing warm, studio shot",
      body: "Rechargeable lantern with a dimmer knob, a USB-C port, and a hanging clip. Sample listing — photographed for this board, not a live reservation."
    },
    bag: {
      title: "Teal roll bag",
      category: "Sleep",
      src: "../assets/item-bag.jpg",
      alt: "Rolled teal sleeping bag with black compression straps, studio shot",
      body: "Sleeping bag in a teal stuff sack, held by two black compression straps. Sample listing — photographed for this board, not a live reservation."
    }
  };

  const AVAIL =
    "Rental stock counts are not published. Ask at the desk for this weekend’s shelf.";

  const gallery = document.getElementById("gallery");
  const status = document.getElementById("filter-status");
  const dialog = document.getElementById("item-detail");
  const closeBtn = document.getElementById("detail-close");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!gallery || !dialog) return;

  const cards = () => Array.from(gallery.querySelectorAll(".card"));

  const visibleCards = () =>
    cards().filter((card) => card.offsetParent !== null);

  function announceFilter() {
    const n = visibleCards().length;
    const noun = n === 1 ? "sample listing" : "sample listings";
    status.textContent = `${n} ${noun}`;
  }

  function selectCard(card, selected) {
    cards().forEach((c) => c.setAttribute("aria-selected", "false"));
    if (card && selected) {
      card.setAttribute("aria-selected", "true");
      gallery.setAttribute("aria-activedescendant", card.id);
    } else {
      gallery.removeAttribute("aria-activedescendant");
    }
  }

  function fillDetail(id) {
    const note = NOTES[id];
    if (!note) {
      dialog.dataset.state = "error";
      document.getElementById("detail-title").textContent = "Listing missing";
      document.getElementById("detail-body").textContent =
        "That kit is not on this sample board. Close this panel and pick another card.";
      return;
    }
    delete dialog.dataset.state;
    document.getElementById("detail-title").textContent = note.title;
    document.getElementById("detail-cat").textContent = note.category;
    document.getElementById("detail-body").textContent = note.body;
    document.getElementById("detail-avail-copy").textContent = AVAIL;
    document.getElementById("detail-kicker").textContent = "Sample listing";
    const img = document.getElementById("detail-image");
    img.src = note.src;
    img.width = 1024;
    img.height = 1024;
    img.alt = note.alt;
  }

  let lastCard = null;
  let closing = false;

  function openDetail(card) {
    closing = false;
    dialog.classList.remove("is-closing");
    const id = card.dataset.id;
    lastCard = card;
    selectCard(card, true);
    fillDetail(id);
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    const title = document.getElementById("detail-title");
    if (title) title.focus();
  }

  function closeDetail() {
    if (closing) return;
    closing = true;
    const finish = () => {
      dialog.classList.remove("is-closing");
      if (dialog.open) dialog.close();
      else dialog.removeAttribute("open");
      selectCard(null, false);
      if (lastCard) lastCard.focus();
      closing = false;
    };

    if (reduceMotion.matches || !dialog.open) {
      finish();
      return;
    }

    dialog.classList.add("is-closing");
    window.setTimeout(finish, 140);
  }

  gallery.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (!card || card.disabled) return;
    openDetail(card);
  });

  gallery.addEventListener("keydown", (event) => {
    const current = event.target.closest(".card");
    if (!current) return;
    const list = visibleCards();
    const index = list.indexOf(current);
    if (index < 0) return;

    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = list[Math.min(list.length - 1, index + 1)];
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = list[Math.max(0, index - 1)];
    } else if (event.key === "Home") {
      next = list[0];
    } else if (event.key === "End") {
      next = list[list.length - 1];
    }

    if (next && next !== current) {
      event.preventDefault();
      next.focus();
    }
  });

  document.querySelectorAll(".chip").forEach((label) => {
    const input = label.querySelector('input[name="category"]');
    if (!input) return;
    input.addEventListener("change", announceFilter);
    label.addEventListener("click", (event) => {
      if (input.disabled) return;
      event.preventDefault();
      input.checked = true;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      input.focus({ preventScroll: true });
    });
  });

  closeBtn.addEventListener("click", () => closeDetail());

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDetail();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDetail();
  });

  announceFilter();
})();

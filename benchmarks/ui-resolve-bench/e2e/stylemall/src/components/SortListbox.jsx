import { useEffect, useId, useRef, useState } from "react";
import { SORTS } from "../lib/catalog.js";

export function SortListbox({ value, onChange }) {
  const triggerId = useId();
  const listId = useId();
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const selectedIndex = Math.max(0, SORTS.findIndex((item) => item.id === value));
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  function commit(index) {
    const next = SORTS[index];
    if (next) onChange(next.id);
    setOpen(false);
  }

  function move(delta) {
    setActiveIndex((index) => Math.min(SORTS.length - 1, Math.max(0, index + delta)));
  }

  function onTriggerKey(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) {
        setActiveIndex(selectedIndex);
        setOpen(true);
      } else {
        move(1);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        setActiveIndex(selectedIndex);
        setOpen(true);
      } else {
        move(-1);
      }
    } else if (event.key === "Home" && open) {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End" && open) {
      event.preventDefault();
      setActiveIndex(SORTS.length - 1);
    } else if ((event.key === "Enter" || event.key === " ") && !open) {
      event.preventDefault();
      setActiveIndex(selectedIndex);
      setOpen(true);
    } else if ((event.key === "Enter" || event.key === " ") && open) {
      event.preventDefault();
      commit(activeIndex);
    } else if (event.key === "Tab" && open) {
      commit(activeIndex);
    } else if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  }

  const selected = SORTS[selectedIndex];
  const active = SORTS[activeIndex];

  return (
    <div className="listbox" ref={rootRef}>
      <label className="eyebrow" htmlFor={triggerId}>
        정렬
      </label>
      <button
        type="button"
        className="listbox-trigger"
        id={triggerId}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="none"
        aria-activedescendant={open && active ? `${listId}-${active.id}` : undefined}
        onClick={() => {
          setActiveIndex(selectedIndex);
          setOpen((valueOpen) => !valueOpen);
        }}
        onKeyDown={onTriggerKey}
      >
        {selected.label}
      </button>
      <ul
        className="listbox-popup"
        id={listId}
        role="listbox"
        hidden={!open}
        aria-labelledby={triggerId}
      >
        {SORTS.map((item, index) => (
          <li
            key={item.id}
            id={`${listId}-${item.id}`}
            role="option"
            className={`listbox-option${index === activeIndex ? " is-active" : ""}`}
            aria-selected={item.id === value}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => commit(index)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

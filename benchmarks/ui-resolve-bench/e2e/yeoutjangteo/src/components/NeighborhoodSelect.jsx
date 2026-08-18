import { useEffect, useId, useMemo, useRef, useState } from "react";
import { neighborhoods } from "../lib/catalog.js";

const ALL = { id: "all", name: "모든 동네" };

export function NeighborhoodSelect({ value, onChange, id }) {
  const listId = useId();
  const labelId = useId();
  const wrapRef = useRef(null);
  const [open, setOpen] = useState(false);
  const options = useMemo(() => [ALL, ...neighborhoods], []);
  const selected = options.find((item) => item.id === value) ?? ALL;
  const selectedIndex = options.findIndex((item) => item.id === selected.id);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  useEffect(() => {
    if (open) setActiveIndex(selectedIndex);
  }, [open, selectedIndex]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  const commit = (option) => {
    onChange(option.id);
    setOpen(false);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      const delta = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((index) => (index + delta + options.length) % options.length);
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(0);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(options.length - 1);
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      commit(options[activeIndex] ?? selected);
      return;
    }
    if (event.key === "Escape") {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }
      return;
    }
    if (event.key === "Tab" && open) {
      commit(options[activeIndex] ?? selected);
    }
    if (event.key.length === 1 && /\S/.test(event.key)) {
      const needle = event.key.toLowerCase();
      const found = options.findIndex((item) => item.name.toLowerCase().startsWith(needle));
      if (found >= 0) {
        setOpen(true);
        setActiveIndex(found);
      }
    }
  };

  return (
    <div className="filter-cluster">
      <span className="filter-label" id={labelId}>
        동네
      </span>
      <div className="select-wrap" ref={wrapRef}>
        <button
          type="button"
          id={id}
          className="select-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${labelId} ${id}`}
          aria-controls={listId}
          aria-activedescendant={open ? `${listId}-${options[activeIndex]?.id}` : undefined}
          onClick={() => setOpen((valueOpen) => !valueOpen)}
          onKeyDown={onKeyDown}
        >
          <span>{selected.name}</span>
          <span className="select-chevron" aria-hidden="true" />
        </button>
        {open ? (
          <ul className="select-list" id={listId} role="listbox" tabIndex={-1} aria-labelledby={labelId}>
            {options.map((option, index) => (
              <li
                key={option.id}
                id={`${listId}-${option.id}`}
                role="option"
                aria-selected={option.id === selected.id}
                data-active={index === activeIndex ? "true" : "false"}
                className="select-option"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => {
                  event.preventDefault();
                  commit(option);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

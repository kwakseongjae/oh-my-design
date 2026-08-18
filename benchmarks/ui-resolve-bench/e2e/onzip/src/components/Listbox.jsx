import { useEffect, useId, useRef, useState } from "react";

export default function Listbox({ label, value, options, onChange }) {
  const listId = useId();
  const labelId = useId();
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(value);
  const selected = options.find((item) => item.id === value) ?? options[0];

  useEffect(() => {
    if (open) setActive(value);
  }, [open, value]);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (event) => {
      if (!triggerRef.current?.parentElement?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const commit = (id) => {
    onChange(id);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const move = (delta) => {
    const index = Math.max(0, options.findIndex((item) => item.id === active));
    const next = options[(index + delta + options.length) % options.length];
    setActive(next.id);
  };

  const onTriggerKey = (event) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const onListKey = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(options[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(options[options.length - 1].id);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      commit(active);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Tab") {
      commit(active);
    } else if (event.key.length === 1) {
      const hit = options.find((item) => item.label.startsWith(event.key));
      if (hit) setActive(hit.id);
    }
  };

  return (
    <div className="listbox">
      <div id={labelId} className="eyebrow">
        {label}
      </div>
      <button
        ref={triggerRef}
        type="button"
        className="listbox-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelId}
        onClick={() => setOpen((valueOpen) => !valueOpen)}
        onKeyDown={open ? onListKey : onTriggerKey}
      >
        <span>{selected.label}</span>
        <span className="listbox-caret" aria-hidden="true" />
      </button>
      {open ? (
        <ul
          id={listId}
          className="listbox-popup"
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`${listId}-${active}`}
        >
          {options.map((item) => (
            <li
              key={item.id}
              id={`${listId}-${item.id}`}
              role="option"
              aria-selected={item.id === value}
              data-active={item.id === active}
              onMouseEnter={() => setActive(item.id)}
              className="listbox-option"
              onClick={() => commit(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

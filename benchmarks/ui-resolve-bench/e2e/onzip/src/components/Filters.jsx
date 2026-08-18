export function FilterChip({ name, value, current, onSelect, children }) {
  const pressed = current === value;
  return (
    <button
      type="button"
      className="filter-chip"
      aria-pressed={pressed}
      data-state={pressed ? "success" : "default"}
      onClick={() => onSelect(value)}
    >
      {children}
    </button>
  );
}

export function SortSelect({ id, value, onChange, options }) {
  return (
    <div className="sort-field">
      <label className="filter-label" htmlFor={id}>
        정렬
      </label>
      <select
        id={id}
        className="sort-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function FilterChips({
  legend,
  name,
  value,
  options,
  onChange,
}) {
  return (
    <div className="filter-block">
      <div className="eyebrow" id={`${name}-legend`}>{legend}</div>
      <div className="chip-row" role="group" aria-labelledby={`${name}-legend`}>
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              className="chip"
              aria-pressed={selected}
              disabled={option.disabled || false}
              data-state={option.disabled ? "disabled" : selected ? "success" : "default"}
              onClick={() => onChange(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

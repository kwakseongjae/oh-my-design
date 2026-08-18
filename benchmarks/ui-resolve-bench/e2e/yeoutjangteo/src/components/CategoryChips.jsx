import { categories } from "../lib/catalog.js";

const ALL = { id: "all", name: "전체" };

export function CategoryChips({ value, onChange }) {
  const options = [ALL, ...categories];
  return (
    <div className="filter-cluster">
      <span className="filter-label" id="category-filter-label">
        카테고리
      </span>
      <div className="chip-row" role="group" aria-labelledby="category-filter-label">
        {options.map((option) => {
          const pressed = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              className="chip"
              aria-pressed={pressed}
              onClick={() => onChange(option.id)}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  categoryById,
  formatPrice,
  imageSrc,
  neighborhoodById,
  timeTone,
} from "../lib/catalog.js";
import { StatusBadge } from "./StatusBadge.jsx";

export function ListingRow({ item, eager = false }) {
  const neighborhood = neighborhoodById(item.neighborhood_id);
  const category = categoryById(item.category_id);
  const free = item.price === 0;
  return (
    <li>
      <Link
        className="listing-row"
        to={`/items/${item.id}`}
        data-cta="local"
        data-state={item.status}
        data-listing={item.id}
      >
        <img
          className="listing-thumb"
          src={imageSrc(item.images[0])}
          alt=""
          width={72}
          height={72}
          loading={eager ? "eager" : "lazy"}
        />
        <div className="listing-text">
          <p className="listing-title">{item.title}</p>
          <p className="listing-price" data-free={free ? "true" : "false"}>
            {formatPrice(item.price)}
          </p>
          <p className="listing-meta">
            {neighborhood?.name} · {category?.name}
          </p>
        </div>
        <div className="listing-aside">
          <StatusBadge status={item.status} />
          <span className="listing-time" data-tone={timeTone(item.created_ago)}>
            {item.created_ago}
          </span>
        </div>
      </Link>
    </li>
  );
}

export function ListingList({ items, eagerCount = 0 }) {
  return (
    <ul className="listing-list">
      {items.map((item, index) => (
        <ListingRow key={item.id} item={item} eager={index < eagerCount} />
      ))}
    </ul>
  );
}

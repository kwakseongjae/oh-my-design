import { discountPercent, formatWon } from "../lib/catalog.js";

export function PriceStack({ product }) {
  const onSale = product.sale_price != null;
  const rate = onSale ? discountPercent(product) : 0;
  return (
    <p className="price-stack">
      <span className="price-sale">{formatWon(onSale ? product.sale_price : product.price)}</span>
      {onSale ? (
        <>
          <span className="price-origin">
            <s>{formatWon(product.price)}</s>
          </span>
          <span className="price-rate">{rate}%</span>
        </>
      ) : null}
    </p>
  );
}

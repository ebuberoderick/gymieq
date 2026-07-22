import { formatMoney, FREE_SHIPPING_THRESHOLD } from "@/lib/cart/totals";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  discount?: number;
  promoCode?: string | null;
}

export function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
  discount = 0,
  promoCode = null,
}: CartSummaryProps) {
  return (
    <div className="space-y-2 text-sm">
      <Row label="Subtotal" value={formatMoney(subtotal)} />
      {discount > 0 && (
        <Row
          label={promoCode ? `Discount (${promoCode})` : "Discount"}
          value={`−${formatMoney(discount)}`}
          accent
        />
      )}
      <Row
        label="Shipping"
        value={shipping === 0 ? "Free" : formatMoney(shipping)}
      />
      <Row label="Tax" value={formatMoney(tax)} />
      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <span className="font-semibold text-white">Total</span>
        <span className="text-lg font-bold text-white">{formatMoney(total)}</span>
      </div>
      {subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD && shipping > 0 && (
        <p className="pt-1 text-xs text-white/40">
          Free shipping on orders over {formatMoney(FREE_SHIPPING_THRESHOLD)}
        </p>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between ${
        accent ? "text-brand-red" : "text-white/60"
      }`}
    >
      <span>{label}</span>
      <span className={accent ? "font-medium text-brand-red" : "text-white"}>
        {value}
      </span>
    </div>
  );
}

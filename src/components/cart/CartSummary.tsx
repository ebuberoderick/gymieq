import { formatMoney } from "@/lib/cart/totals";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
}: CartSummaryProps) {
  return (
    <div className="space-y-2 text-sm">
      <Row label="Subtotal" value={formatMoney(subtotal)} />
      <Row
        label="Shipping"
        value={shipping === 0 ? "Free" : formatMoney(shipping)}
      />
      <Row label="Tax" value={formatMoney(tax)} />
      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <span className="font-semibold text-white">Total</span>
        <span className="text-lg font-bold text-white">{formatMoney(total)}</span>
      </div>
      {subtotal > 0 && subtotal < 100 && (
        <p className="pt-1 text-xs text-white/40">
          Free shipping on orders over $100
        </p>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-white/60">
      <span>{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

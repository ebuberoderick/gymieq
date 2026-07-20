"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Lock } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { placeOrder } from "@/lib/cart/orders";
import type { CheckoutDetails } from "@/lib/cart/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { CartSummary } from "@/components/cart/CartSummary";
import { formatMoney } from "@/lib/cart/totals";

const inputClass =
  "glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-red/40 focus:outline-none";

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, shipping, tax, total } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (items.length === 0) {
      setError("Your bag is empty.");
      return;
    }

    const form = new FormData(e.currentTarget);
    const details: CheckoutDetails = {
      email: String(form.get("email") ?? ""),
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      phone: String(form.get("phone") ?? ""),
      address: String(form.get("address") ?? ""),
      city: String(form.get("city") ?? ""),
      state: String(form.get("state") ?? ""),
      zip: String(form.get("zip") ?? ""),
      country: String(form.get("country") ?? "United States"),
    };

    setSubmitting(true);
    placeOrder(items, details);
    router.push("/checkout/success");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-6 lg:col-span-3">
        <GlassCard variant="strong" className="space-y-5 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Contact</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" name="firstName" required />
            <Field label="Last name" name="lastName" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
        </GlassCard>

        <GlassCard variant="strong" className="space-y-5 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Shipping address</h2>
          <Field label="Street address" name="address" required />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="City" name="city" required />
            <Field label="State" name="state" required />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="ZIP code" name="zip" required />
            <Field label="Country" name="country" defaultValue="United States" required />
          </div>
        </GlassCard>

        <GlassCard variant="strong" className="space-y-5 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-brand-red" />
            <h2 className="text-lg font-bold text-white">Payment</h2>
          </div>
          <p className="text-xs text-white/40">
            Demo checkout — no real charge. Card details are not stored.
          </p>
          <Field label="Name on card" name="cardName" required />
          <Field
            label="Card number"
            name="cardNumber"
            placeholder="4242 4242 4242 4242"
            required
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Expiry" name="expiry" placeholder="MM/YY" required />
            <Field label="CVC" name="cvc" placeholder="123" required />
          </div>
        </GlassCard>
      </div>

      <div className="lg:col-span-2">
        <GlassCard variant="strong" className="sticky top-24 space-y-5 p-6">
          <h2 className="text-lg font-bold text-white">Order summary</h2>
          <ul className="space-y-3 border-b border-white/10 pb-4">
            {items.map((item) => (
              <li
                key={item.productId}
                className="flex justify-between gap-3 text-sm text-white/60"
              >
                <span className="truncate text-white">
                  {item.name} × {item.quantity}
                </span>
                <span>{formatMoney(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
          />
          {error && <p className="text-sm text-brand-red">{error}</p>}
          <Button type="submit" className="w-full" disabled={submitting}>
            <Lock className="h-4 w-4" />
            {submitting ? "Placing order…" : `Pay ${formatMoney(total)}`}
          </Button>
        </GlassCard>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-white/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={inputClass}
      />
    </div>
  );
}

import { NextResponse } from "next/server";
import type { CartItem } from "@/lib/cart/types";
import { validatePromo } from "@/lib/cart/promos";
import { calcSubtotal, calcTotal, formatMoney } from "@/lib/cart/totals";
import { initializeTransaction } from "@/lib/paystack/server";

interface InitBody {
  email: string;
  items: CartItem[];
  promoCode?: string | null;
  callbackUrl?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InitBody;

    if (!body.email || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: "Email and cart items are required." },
        { status: 400 },
      );
    }

    const subtotal = calcSubtotal(body.items);
    let promo = null;
    if (body.promoCode) {
      const result = validatePromo(body.promoCode, subtotal);
      if (result.ok) promo = result.promo;
    }

    const { total } = calcTotal(body.items, promo);
    if (total <= 0) {
      return NextResponse.json(
        { error: "Order total must be greater than zero." },
        { status: 400 },
      );
    }

    const origin = new URL(request.url).origin;
    const callbackUrl =
      body.callbackUrl ?? `${origin}/checkout/success`;

    const result = await initializeTransaction({
      email: body.email,
      amount: total,
      callbackUrl,
      metadata: {
        promo_code: promo?.code ?? null,
        item_count: body.items.reduce((n, i) => n + i.quantity, 0),
        custom_fields: [
          {
            display_name: "Cart Total",
            variable_name: "cart_total",
            value: formatMoney(total),
          },
        ],
      },
    });

    return NextResponse.json({
      accessCode: result.data.access_code,
      reference: result.data.reference,
      authorizationUrl: result.data.authorization_url,
      amount: total,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to start payment.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

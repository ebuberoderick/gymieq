import { NextResponse } from "next/server";
import { verifyTransaction } from "@/lib/paystack/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { error: "Payment reference is required." },
        { status: 400 },
      );
    }

    const result = await verifyTransaction(reference);
    const paid = result.data.status === "success";

    if (!paid) {
      return NextResponse.json(
        {
          success: false,
          error: `Payment status: ${result.data.status}`,
          status: result.data.status,
        },
        { status: 402 },
      );
    }

    return NextResponse.json({
      success: true,
      reference: result.data.reference,
      amount: result.data.amount,
      currency: result.data.currency,
      email: result.data.customer?.email ?? null,
      paidAt: result.data.paid_at,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to verify payment.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

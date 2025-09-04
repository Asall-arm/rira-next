import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/orderbooks/11/market_buy_price",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return NextResponse.json({ rate: data.data });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
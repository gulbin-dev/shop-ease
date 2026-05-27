import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title");
  if (title !== undefined) {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/?title=${title}`,
    );
    const data = await response.json();
    return NextResponse.json(data);
  }
  return NextResponse.json([]);
}

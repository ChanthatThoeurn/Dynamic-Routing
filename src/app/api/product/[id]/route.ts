import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await fetch(
      `${process.env.BASE_ISHOP_URL}/products/${id}`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        data,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch product detail",
      },
      {
        status: response.status,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
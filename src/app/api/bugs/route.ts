import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { title, description } = body;
  const bug = await prisma.bug.create({
    data: { title, description },
  });

  return NextResponse.json(bug, { status: 201 });
}

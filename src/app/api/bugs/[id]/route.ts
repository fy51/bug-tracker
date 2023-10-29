import prisma from "@/lib/db";
import { patchBugSchema } from "@/lib/validation";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // 1. Check request body
  const body: unknown = await request.json();
  const validation = patchBugSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 422 });
  }

  // 2. Check whether the id exists
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!bug) {
    return NextResponse.json("Invalid bug", { status: 404 });
  }

  // 3. Update data
  const { title, description } = validation.data;
  const updatedBug = await prisma.bug.update({
    where: {
      id: bug.id,
    },
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(updatedBug);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!bug) {
    return NextResponse.json("Invalid bug", { status: 404 });
  }

  await prisma.bug.delete({ where: { id: bug.id } });

  return NextResponse.json({});
}

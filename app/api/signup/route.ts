import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return NextResponse.json({ ok: false, error: "Missing email or password" }, { status: 400 });
    }

    // hash the password
    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
      },
    });

    // don't return password in response
    const safeUser = { id: user.id, email: user.email };

    return NextResponse.json({ ok: true, user: safeUser });
  } catch (err: any) {
    console.error("SIGNUP ERROR:", err);
    if (err?.code === "P2002") {
      return NextResponse.json({ ok: false, error: "Email already exists" }, { status: 409 });
    }
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

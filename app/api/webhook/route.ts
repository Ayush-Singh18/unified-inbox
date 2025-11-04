import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.formData()
  
  const text = body.get("Body")
  const from = body.get("From")
  
  console.log("TEXT:", text)
  console.log("FROM: ", from)

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json({ ok: true })
}

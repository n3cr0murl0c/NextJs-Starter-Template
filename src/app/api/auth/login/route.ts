import bcrypt from "bcrypt";
import prisma from "@utils/db";
import { NextResponse } from "next/server";

interface GetLoginProps {}
export function GET(request: Request) {
  return NextResponse.json("LoginGETRESPONSE");
}
interface PostLoginProps {}
export async function POST(request: Request) {
  //esta versión es una versión simplificado de autentificacion
  // usar el path de next_auth en /api/auth/signin
  const res = await request.json();
  if (process.env.DEBUG)
    console.log("[LOG] en api/auth/login:POST:res->\n", res, "\n");
  const ads = await prisma.user.findUnique({
    where: {
      email: res?.email,
    },
  });
  if (ads) {
    console.log(ads);
    const pp = bcrypt.compareSync(res?.password, ads?.password);
    if (pp) {
      return NextResponse.json({
        status: 200,
        statusTxt: "Login con exit",
        user: { ...ads },
      });
    }
  }
  return NextResponse.json({
    status: 400,
    statusTxt: "Usuario no existe",
    user: { ...ads },
  });
}

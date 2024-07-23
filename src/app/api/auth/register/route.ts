import bcrypt from "bcrypt";
import prisma from "@utils/db";
import { generateCustomId } from "app/services/auth.services";
import { NextResponse } from "next/server";

interface GetRegisterProps {}
export function GET(request: Request) {
  return NextResponse.json("RegisterGETRESPONSE");
}
interface PostRegisterProps {}
export async function POST(request: Request) {
  const reqJson = await request.json();
  try {
    if (reqJson) {
      if (process.env.DEBUG)
        console.log("[LOG] en api/aut/register:POST->\n", reqJson, "\n");
      if (reqJson.password === reqJson.confirmPassword) {
        const userFound = await prisma.user.findUnique({
          where: { email: reqJson.email },
        });
        if (userFound) {
          return NextResponse.json({
            status: 400,
            statusTxt: "Correo ya registrado",
          });
        }
        const newUser = await prisma.user.create({
          data: {
            id: generateCustomId("user"),
            first_name: reqJson.firstName,
            last_name: reqJson.lastName,
            email: reqJson.email,
            password: bcrypt.hashSync(reqJson.password, 15),
            role: "ADMIN",
          },
        });

        if (process.env.DEBUG)
          console.log(
            "[LOG] en api/aut/register:POST:newUser->\n",
            newUser,
            "\n"
          );
        return NextResponse.json({
          status: 200,
          statusTxt: "Usuario Creado con éxito",
          user: { ...newUser },
        });
      } else {
        return NextResponse.json({
          status: 500,
          statusTxt: "Passwords no coinciden",
        });
      }
    }
  } catch (error) {
    console.error("[ERROR] en api/aut/register:POST->\n", error);
    return NextResponse.json({
      status: 500,
      statusTxt: `Error desconocido: ${error}`,
    });
  }
}

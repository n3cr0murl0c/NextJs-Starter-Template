import prisma from "@utils/db";
import { NextResponse } from "next/server";

interface GetTemplateNameProps {}
export async function GET(request: Request) {
  console.log("en GET TemplateNameGETRESPONSE \n");

  // const res = await prisma.category.findMany({ where: {} });
  return NextResponse.json("TemplateNameGETRESPONSE");
}
interface PostTemplateNameProps {}
export async function POST(request: Request) {
  console.log("en POST TemplateNameGETRESPONSE \n");
  return NextResponse.json("TemplateNamePOSTRESPONSE");
}

"use server";
import React from "react";

export async function loginAction(_currentState: unknown, formData: FormData) {
  console.log("En Login Action...\n");
  const user = formData.get("usuario");
  const password = formData.get("pass");

  console.log("====================================");
  console.log(user, password);
  console.log("====================================");
}

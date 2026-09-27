"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/config";
import { env } from "@/lib/env";

export async function logoutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/login");
}

export async function demoLoginAction() {
  try {
    await auth.api.signInEmail({
      body: {
        email: env.DEMO_ACCOUNT_EMAIL,
        password: env.DEMO_ACCOUNT_PASSWORD,
      },
    });
  } catch (error) {
    console.error("Logowanie na konto demo nie powiodło się:", error);
    redirect("/login");
  }

  redirect("/");
}
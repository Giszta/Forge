import { auth } from "../lib/auth/config";
import { prisma } from "../lib/db/client";
import { env } from "../lib/env";

async function main() {
  const existing = await prisma.user.findUnique({
    where: { email: env.DEMO_ACCOUNT_EMAIL },
  });

  if (existing) {
    console.log("Konto demo już istnieje — pomijam.");
    return;
  }

  await auth.api.signUpEmail({
    body: {
      name: "Demo User",
      email: env.DEMO_ACCOUNT_EMAIL,
      password: env.DEMO_ACCOUNT_PASSWORD,
    },
  });

  console.log("Utworzono konto demo:", env.DEMO_ACCOUNT_EMAIL);
}

main()
  .catch((error) => {
    console.error("Seed nie powiódł się:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
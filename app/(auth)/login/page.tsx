"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useFormStatus } from "react-dom";

export default function LoginPage() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl dark:text-black">
          Iniciar sesión en Barranquiia
        </h1>
        <LoginButton />
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full"
      variant={"secondary"}
      aria-disabled={pending}
      onClick={() => signIn("google", { callbackUrl: "/lessons" })}
    >
      Iniciar sesión con Google
    </Button>
  );
}

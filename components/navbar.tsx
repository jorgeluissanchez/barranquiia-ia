"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';
import { signOut } from "next-auth/react";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="flex border-b items-center p-4 justify-between">
    <Link className="text-xl font-semibold tracking-tight" href="/lessons">
      Barranquiia
    </Link>
    <Button variant="ghost" className="flex items-center space-x-2" onClick={() => signOut({ callbackUrl: '/login' })}>
      <LogOut className="w-4 h-4" strokeWidth={2} />
      <span>Salir</span>
    </Button>
  </nav>
  )
}
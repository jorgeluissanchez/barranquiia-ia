"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function NavLinks({ links }: { links: any[] }) {
  const pathName = usePathname();
  return (
    <>
      {links.map((item) => {
        const isActive = pathName === item.href;
        return (
            <Link
              href={item.href}
              key={item.name}
              className={buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                className: "!justify-start space-x-2 md:w-full",
              })}
            >
              <item.icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.75} />
              <span className="hidden md:block">{item.name}</span>
            </Link>
        );
      })}
    </>
  );
}

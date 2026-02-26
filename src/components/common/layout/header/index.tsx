"use client";

import { NAVBAR, NavItem } from "@/helper/constant";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isOpenMobileNav, setOpenMobileNav] = useState(false);
  const router = useRouter();
  const t = useTranslations("navBar");

  const renderNavItem = (item: NavItem) => {
    if (item.children) {
      return (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuTrigger>{t(item.key)}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1 p-2">
              {item.children.map((child) => (
                <li key={child.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-accent hover:text-accent-foreground"
                    >
                      {t(child.key)}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.href}>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={item.href}>{t(item.key)}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push("/")}
        >
          <div className="text-2xl font-bold tracking-wide text-blue-700">
            HZET GLOBAL
          </div>
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-md p-1 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpenMobileNav(!isOpenMobileNav)}
        >
          <Image
            src="/icon/menu.svg"
            alt="Open menu"
            width={50}
            height={50}
            quality={100}
            priority
          />
        </button>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {NAVBAR.map(renderNavItem)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

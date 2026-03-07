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
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Building2,
  GraduationCap,
  Briefcase,
  Phone,
} from "lucide-react";

const MOBILE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  about: Building2,
  studyAbroad: GraduationCap,
  laborExport: Briefcase,
  contact: Phone,
};

export default function Header() {
  const [isOpenMobileNav, setOpenMobileNav] = useState(false);
  const [isStudyAbroadOpen, setStudyAbroadOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const t = useTranslations("navBar");
  const tc = useTranslations("common");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item: NavItem) => {
    if (item.children) {
      return (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuTrigger className="rounded-full bg-transparent text-sm font-medium text-slate-600 transition-colors hover:text-blue-500">
            {t(item.key)}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-52 gap-0.5 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50/60 hover:text-blue-500"
                  >
                    {tc("all")}
                  </Link>
                </NavigationMenuLink>
              </li>
              {item.children.map((child) => (
                <li key={child.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50/60 hover:text-blue-500"
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
          <Link
            href={item.href}
            className="rounded-full bg-transparent text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t(item.key)}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 shadow-[0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-2xl backdrop-saturate-150"
          : "bg-white/95"
      }`}
    >
      <div className="mx-4 flex max-w-[1344px] items-center justify-between py-3.5 md:mx-6 lg:mx-12 2xl:mx-auto">
        <button
          type="button"
          className="group flex cursor-pointer items-center gap-2.5 transition-all hover:opacity-80"
          onClick={() => router.push("/")}
        >
          <span className="text-xl font-bold tracking-tight text-slate-800">
            HZET GLOBAL
          </span>
        </button>

        <div className="md:hidden">
          <Drawer
            open={isOpenMobileNav}
            onOpenChange={(open) => {
              setOpenMobileNav(open);
              if (!open) setStudyAbroadOpen(false);
            }}
            direction="right"
          >
            <DrawerTrigger asChild>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200"
                aria-label="Open menu"
              >
                <Menu className="size-4 text-slate-700" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-h-none w-[85%] max-w-sm rounded-none border-l border-slate-100">
              <DrawerHeader className="flex flex-row items-center justify-between border-b border-slate-100 px-5">
                <DrawerTitle className="text-base font-bold">Menu</DrawerTitle>
                <DrawerClose asChild>
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200"
                    aria-label="Close menu"
                  >
                    <X className="size-4 text-slate-600" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              <nav className="flex flex-col gap-0.5 overflow-y-auto px-3 py-3">
                {NAVBAR.map((item) => {
                  const Icon = MOBILE_ICONS[item.key];
                  if (item.children) {
                    return (
                      <div key={item.href}>
                        <button
                          type="button"
                          onClick={() => setStudyAbroadOpen(!isStudyAbroadOpen)}
                          className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                        >
                          <span className="flex items-center gap-3">
                            {Icon && (
                              <div className="flex size-8 items-center justify-center rounded-lg bg-slate-100">
                                <Icon className="size-4 text-slate-500" />
                              </div>
                            )}
                            {t(item.key)}
                          </span>
                          <ChevronDown
                            className={`size-4 text-slate-400 transition-transform duration-200 ${isStudyAbroadOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`ml-11 overflow-hidden transition-all duration-300 ${isStudyAbroadOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                          <div className="flex flex-col gap-0.5 border-l-2 border-slate-200 py-1 pl-3">
                            <DrawerClose asChild>
                              <Link
                                href={item.href}
                                className="rounded-lg px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
                              >
                                {t(item.key)}
                              </Link>
                            </DrawerClose>
                            {item.children.map((child) => (
                              <DrawerClose key={child.href} asChild>
                                <Link
                                  href={child.href}
                                  className="rounded-lg px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
                                >
                                  {t(child.key)}
                                </Link>
                              </DrawerClose>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <DrawerClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        {Icon && (
                          <div className="flex size-8 items-center justify-center rounded-lg bg-slate-100">
                            <Icon className="size-4 text-slate-500" />
                          </div>
                        )}
                        {t(item.key)}
                      </Link>
                    </DrawerClose>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-slate-100 px-5 py-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:shadow-md"
                >
                  {tc("contactNow")}
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {NAVBAR.filter((item) => item.key !== "contact").map(renderNavItem)}
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contact"
            className="ml-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:shadow-md hover:shadow-blue-600/30"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </header>
  );
}

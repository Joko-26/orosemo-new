"use client";

import { Link } from '@tanstack/react-router'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelect } from "@/components/LanguageSelect";
import { useLanguage } from '@/context/LanguageContext';

function DesktopMenu() {
  const { t } = useLanguage();
  return (
    <div className='flex gap-4'>
      <Link to="/" className="text-sm font-medium hover:underline">{t.home}</Link>
      <Link to="/games" className="text-sm font-medium hover:underline">{t.games}</Link>
      <Link to="/tools" className="text-sm font-medium hover:underline">{t.tools}</Link>
      <Link to="/contact" className="text-sm font-medium hover:underline">{t.contact}</Link>
      <Link to="/about" className="text-sm font-medium hover:underline">{t.about}</Link>
    </div>
  );
}

function MobileMenu() {
  const { t } = useLanguage();
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu className='h-6 w-6'></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-2">
          <Link to="/" className="text-sm font-medium hover:underline">{t.home}</Link>
          <Link to="/games" className="text-sm font-medium hover:underline">{t.games}</Link>
          <Link to="/tools" className="text-sm font-medium hover:underline">{t.tools}</Link>
          <Link to="/contact" className="text-sm font-medium hover:underline">{t.contact}</Link>
          <Link to="/about" className="text-sm font-medium hover:underline">{t.about}</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  return (
    <header className="border-b pl-4">
      <div className="flex w-full h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <img src="/ororsemo_logo_trans_100.png" alt="orosemo" className="h-10" />
          <span className="font-bold text-lg">Orosemo</span>
          <DesktopMenu />
        </div>
        <div className="flex items-center gap-2 pr-3">
          <ThemeToggle />
          <LanguageSelect />
        </div>
        <div className="flex md:hidden">
          <MobileMenu/>
        </div>
      </div>
    </header>
  );
}

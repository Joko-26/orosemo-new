"use client";

import { Link } from '@tanstack/react-router'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelect } from "@/components/LanguageSelect";
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu className='h-6 w-6'></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-2 m-4">
          <Link to="/" className="text-sm font-medium hover:underline" onClick={handleClose}>{t.home}</Link>
          <Link to="/games" className="text-sm font-medium hover:underline" onClick={handleClose}>{t.games}</Link>
          <Link to="/tools" className="text-sm font-medium hover:underline" onClick={handleClose}>{t.tools}</Link>
          <Link to="/contact" className="text-sm font-medium hover:underline" onClick={handleClose}>{t.contact}</Link>
          <Link to="/about" className="text-sm font-medium hover:underline" onClick={handleClose}>{t.about}</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  return (
    <header className="border-b pl-4">
      <div className="flex w-full h-14 items-center justify-between border-r-border pr-4">
        <div className="flex items-center gap-6">
          <img src="public/ororsemo_logo_trans_100.png" alt="orosemo" className="h-10" />
          <Link to="/" className="font-bold text-lg">Orosemo</Link>
          <div className="hidden md:flex">
            <DesktopMenu />
          </div>
          <div className="flex md:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className='flex items-center m-3 space-x-3'>
          <ThemeToggle />
          <LanguageSelect/>
        </div>
      </div>
    </header>
  )
}


"use client";

import { Link } from '@tanstack/react-router'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelect } from "@/components/LanguageSelect";
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { getAssetPath } from '@/lib/assets';

import ScrollToTopButton from './ScrollToTop';

function DesktopMenu() {
  const { t } = useLanguage();
  return (
    <div className='flex gap-4'>
      <Link to="/" className="text-l md:text-xl lg:text-2xl xl:text-3xl font-medium hover:underline">{t.home}</Link>
      <Link to="/games" className="text-l md:text-xl lg:text-2xl xl:text-3xl font-medium hover:underline">{t.games}</Link>
      <Link to="/tools" className="text-l md:text-xl lg:text-2xl xl:text-3xl font-medium hover:underline">{t.tools}</Link>
      <Link to="/contact" className="text-l md:text-xl lg:text-2xl xl:text-3xl font-medium hover:underline">{t.contact}</Link>
      <Link to="/about" className="text-l md:text-xl lg:text-2xl xl:text-3xl font-medium hover:underline">{t.about}</Link>
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
        <Button variant="ghost" className='h-10 w-10' size="icon">
          <Menu className='h-20 w-20'></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='headline'>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-2 m-4">
          <Link to="/" className="headline font-medium hover:underline" onClick={handleClose}>{t.home}</Link>
          <Link to="/games" className="headline font-medium hover:underline" onClick={handleClose}>{t.games}</Link>
          <Link to="/tools" className="headline font-medium hover:underline" onClick={handleClose}>{t.tools}</Link>
          <Link to="/contact" className="headline font-medium hover:underline" onClick={handleClose}>{t.contact}</Link>
          <Link to="/about" className="headline font-medium hover:underline" onClick={handleClose}>{t.about}</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  return (
    <header className="border-b pl-4 sticky" id='header'>
      <div className="flex w-full h-16 items-center justify-between border-r-border pr-4">
        <div className='flex items-center space-x-1 scale-75 sm:scale-90 md:scale-100'>
          <img src={getAssetPath("/logos/ororsemo_logo_trans_100.png")} alt="orosemo" className="cursor-pointer h-10 gap-2" />
          <span className="font-bold text-l md:text-xl lg:text-2xl xl:text-3xl">Orosemo</span>
        </div>
        <div className="space-x-9">
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
      <ScrollToTopButton></ScrollToTopButton>
    </header>
    
  )
}


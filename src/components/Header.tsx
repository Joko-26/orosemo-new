"use client";

import { Link } from '@tanstack/react-router'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from './ThemeToggle';

function DesktopMenu() {
  return (
    <div className='flex gap-4'>
      <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
      <Link to="/games" className="text-sm font-medium hover:underline">Games</Link>
      <Link to="/tools" className="text-sm font-medium hover:underline">Tools</Link>
      <Link to="/contact" className="text-sm font-medium hover:underline">Contact</Link>      
      <Link to="/about" className="text-sm font-medium hover:underline">About</Link>

    </div>
  );
}

function MobileMenu() {
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
          <Link to="/" className="w-full text-left px-2 py-1 rounded hover:bg-accent">Home</Link>
          <Link to="/games" className="w-full text-left px-2 py-1 rounded hover:bg-accent">Games</Link>
          <Link to="/tools" className="w-full text-left px-2 py-1 rounded hover:bg-accent">Tools</Link>          
          <Link to="/contact" className="w-full text-left px-2 py-1 rounded hover:bg-accent">Contact</Link>
          <Link to="/about" className="w-full text-left px-2 py-1 rounded hover:bg-accent">About</Link>
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
        <ThemeToggle />
      </div>
    </header>
  )
}

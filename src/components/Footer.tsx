"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
  return (
    <div className="flex items-strech self-center justify-self-center py-4 bg-background border-t gap-2">
      <p>© 2025 Orosemo</p>
      <a href="https://tr.ee/Orosemo-Discord" className="text-link underline">{t.discord}</a>
    </div>
  );
}
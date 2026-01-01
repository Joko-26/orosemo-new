"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BotOff } from "lucide-react";
import { getAssetPath } from "@/lib/assets";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <div className="flex items-strech self-center justify-self-center py-4 bg-background border-t gap-4">
      <div className="flex gap-2">
        <a
          href="https://tr.ee/Orosemo-Discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            className="flex icon self-center justify-self-center"
            src={"/cardImg/discord.png"}
            alt=""
          />
        </a>
        <a
          href="https://orosemo.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            className="flex icon self-center justify-self-center"
            src={"/cardImg/itch.png"}
            alt=""
          />
        </a>
        <a
          href="https://bsky.app/profile/orosemo.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            className="flex icon self-center justify-self-center"
            src={"/cardImg/bluesky.png"}
            alt=""
          />
        </a>

        <a
          href="https://www.youtube.com/@Orosemo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            className="flex icon self-center justify-self-center"
            src={"/cardImg/youtube.png"}
            alt=""
          />
        </a>
      </div>
      <div className="flex gap-1">
        <BotOff />
        <p>{t.ai}</p>
      </div>
      <p>© 2025 Orosemo</p>
    </div>
  );
}

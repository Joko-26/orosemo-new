import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DefaultCard from "../components/DefaultCard";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { t } = useLanguage();
  const [BgImage, setBgImage] = useState("");
  const images = [
    "/backgrounds/2.png",
    "/backgrounds/image2.png",
    "/backgrounds/image3.png",
  ];

  const scrollToSection = (sectionIn: string) => {
    const section = document.getElementById(sectionIn);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setBgImage(images[Math.floor(Math.random() * images.length)]);
  });

  const cardsObj = t?.mainPage?.cards || {};

  return (
    <div>
      <div>
        <div className="relative w-full h-screen">
          <img className="w-full h-screen" src={BgImage} alt="bg-image" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-transparent rounded backdrop-blur-sm shadow-lg text-sm md:text-lg lg:text-xl xl:text-2xl">
            <div className="space-y-3 p-4">
              <h1 className="headline">{t.mainPage.Greeting}</h1>
              <p>{t.mainPage.subGreeting}</p>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("content")}
              >
                {t.mainPage.button}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        id="content"
      ></div>
      {Object.entries(cardsObj).map(([key, card]: [string, any]) => (
        <DefaultCard
          key={key}
          headline={card.head ?? card.headline ?? ""}
          secondary={card.text ?? card.secondary ?? ""}
          image={card.img ?? card.image ?? ""}
          link={card.link}
        />
      ))}
    </div>
  );
}

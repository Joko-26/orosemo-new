import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GanttChart, Search } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "../components/Cards";
import { motion } from "framer-motion";

export const Route = createFileRoute("/games")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  const [query, SetQuery] = useState("");
  const games = Object.entries(t.gamesPage?.games);

  const filteredGames = games.filter(([name]) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col self-center text-center ">
      <div className="space-y-3 p-4 text-foreground text-sm md:text-lg lg:text-xl xl:text-2xl">
        <h1 className="headline">{t?.gamesPage?.headline}</h1>
        <p>{t.gamesPage?.subHeadline}</p>
        <div className="flex flex-row justify-center p-5 space-x-5">
          <motion.input
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
            whileFocus={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-4 py-2 input"
            placeholder={t?.gamesPage?.search}
            onChange={(e) => SetQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0">
        {filteredGames.map(([name, game]) => (
          <ProjectCard
            Name={name}
            description={game.description}
            image={game.img}
            link={game.link}
            linkName={t.gamesPage?.play}
            plattforms={game?.platforms}
          />
        ))}
      </div>
    </div>
  );
}

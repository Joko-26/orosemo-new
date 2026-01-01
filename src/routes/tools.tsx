import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GanttChart, Search } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "../components/Cards";
import { motion } from "framer-motion";

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  const [query, SetQuery] = useState("");
  const tools = Object.entries(t.toolsPage?.tools);

  const filteredTools = tools.filter(([name]) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col self-center text-center ">
      <div className="space-y-3 p-4 text-foreground text-sm md:text-lg lg:text-xl xl:text-2xl">
        <h1 className="headline">{t?.toolsPage?.headline}</h1>
        <p>{t.toolsPage?.subHeadline}</p>
        <div className="flex flex-row justify-center p-5 space-x-5">
          <motion.input
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
            whileFocus={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-4 py-2 input"
            placeholder={t?.toolsPage?.search}
            onChange={(e) => SetQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        {filteredTools.map(([name, tool]) => (
          <ProjectCard
            Name={name}
            description={tool.description}
            image={tool.img}
            link={tool.link1.split("*")[0]}
            link2={tool.link2.split("*")[0]}
            linkName={tool.link1.split("*")[1]}
            linkName2={tool.link2.split("*")[1]}
            plattforms={tool?.platforms}
          />
        ))}
      </div>
    </div>
  );
}

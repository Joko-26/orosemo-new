import { createFileRoute } from "@tanstack/react-router";
import { getAssetPath } from "@/lib/assets";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiJavascript,
  SiReact,
  SiGithub,
  SiTypescript,
  SiDiscorddotjs,
  SiPython,
  SiGodotengine,
  SiObsidian,
  SiTailwindcss,
  SiDiscord,
  SiRaycast,
  SiAseprite,
  SiAutodesk
} from "@icons-pack/react-simple-icons";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center m-6">
      <div>
        <img
          className="rounded-full justify-self-center self-center max-w-20 md:justify-self-start md:max-w-30 lg:max-w-40 xl:max-w-50"
          src={getAssetPath("/pfp/pfp-christmas.jpeg")}
          alt=""
        />
      </div>
      <span>{t?.aboutPage?.tools}</span>
      <div className="flex flex-row gap-4 mt-4">
        <SiReact size={32} />
        <SiGithub size={32} />
        <SiAseprite size={32} />
        <SiGodotengine size={32} />
        <SiObsidian size={32} />
        <SiRaycast size={32} />
        <SiAutodesk size={32} />

      </div>
      <span>{t?.aboutPage?.skills}</span>
      <div className="flex flex-row gap-4 mt-4">
        <SiPython size={32} />
        <SiTypescript size={32} />
        <SiJavascript size={32} />
        <SiGithub size={32} />
        <SiTailwindcss size={32} />
        <SiDiscorddotjs size={32} />
        <SiReact size={32} />
      </div>
    </div>
  );
}

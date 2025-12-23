
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/games")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col self-center text-center ">
      <div className="space-y-3 p-4 text-foreground text-sm md:text-lg lg:text-xl xl:text-2xl">
        <h1 className="headline">{t?.gamesPage?.headline}</h1>
        <p>{t.gamesPage?.subHeadline}</p>   
        <div className="flex flex-row">
          <Input type="email" placeholder={t?.gamesPage?.search}/>
          <button className="btn-primary">{t?.gamesPage?.searchButton}</button>   
        </div>
      </div>

    </div>
  );
}

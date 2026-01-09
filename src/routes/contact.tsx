import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { ContactCard } from "../components/Cards";
import { getAssetPath } from "@/lib/assets";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col self-center text-center">
      <div className="site-headline">
        <h1 className="headline">{t?.contactsPage?.headline}</h1>
        <p>{t.contactsPage?.subHeadline}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0"> 
        {Object.entries(t?.contactsPage?.sections ?? {}).map(([headline, items], index) => {
          return (
            <ContactCard
              headline={headline}
              dict={items}
              buttonName={t?.contactsPage?.buttonName}
              direction={index % 2 === 0 ? -200 : 200}
              key={index}
            />
          );
        })}        
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import DefaultCard from "../components/Cards";
import { getAssetPath } from "@/lib/assets";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();
  const text = t?.contactsPage?.cards

  return (
    <div className="flex flex-col self-center text-center">
      <div className="site-headline">
        <h1 className="headline">{t?.contactsPage?.headline}</h1>
        <p>{t.contactsPage?.subHeadline}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0">
        <DefaultCard
          headline={text.itch?.head}
          secondary={text.itch?.text}
          image={text.itch?.img}
          link={text.itch?.link}
          linkName={text.itch?.linkName}
        />
        <div className="flex flex-row">
        <DefaultCard
          headline={text.discord?.head}
          secondary={text.discord?.text}
          image={text.discord?.img}
          link={text.discord?.link}
          linkName={text.discord?.linkName}
        />
        <DefaultCard
          headline={text.slack?.head}
          secondary={text.slack?.text}
          image={text.slack?.img}
          link={text.slack?.link}
          linkName={text.slack?.linkName}
        />
        </div>
        <DefaultCard
          headline={text.bluesky?.head}
          secondary={text.bluesky?.text}
          image={text.bluesky?.img}
          link={text.bluesky?.link}
          linkName={text.bluesky?.linkName}
        />
        <DefaultCard
          headline={text.linktree?.head}
          secondary={text.linktree?.text}
          image={text.linktree?.img}
          link={text.linktree?.link}
          linkName={text.linktree?.linkName}
        />
        
      </div>
    </div>
  );
}

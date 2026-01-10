import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/context/LanguageContext";
import { ContactCard } from "../components/Cards";
import { getAssetPath } from "@/lib/assets";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      <div className="flex flex-col self-center text-center">
        <div className="site-headline">
          <h1 className="headline">{t?.contactsPage?.headline}</h1>
          <p>{t.contactsPage?.subHeadline}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 mx-10 sm:mx-5 md:mx-0">
          <motion.div
            initial={{ scale: 0.8, x:200 }}
            whileInView={{ scale: 1, x: 0 }}
            exit={{ scale: 0.8, transition: { scale: { duration: 0.2 } } }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="card-border flex flex-row w-full gap-6 p-5 text-sm  md:text-lg lg:text-xl xl:text-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl"
          >
            <h1 className="text-sm  md:text-lg lg:text-1xl xl:text-3xl">{t?.contactsPage?.email?.head}</h1>
            <h2 className="">{t?.contactsPage?.email?.text}</h2>
            <h2 className="underline text-sm  md:text-lg lg:text-1xl xl:text-3xl">contact@orosemo.de</h2>
          </motion.div>
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
    </AnimatePresence>   
  );
}

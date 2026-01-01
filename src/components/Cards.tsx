import { AnimatePresence, motion } from "framer-motion";
import { DiWindows, DiLinux, DiApple, DiHtml5} from "react-icons/di";
import { AiFillAndroid } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { getAssetPath } from "@/lib/assets";

export default function DefaultCard({
  headline,
  secondary,
  image,
  link,
  linkName
}: {
  headline: string;
  secondary: string;
  image: string;
  link?: string;
  linkName?: string;
}) {

  const linkElement = link ? (
    <motion.a
      className="btn-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{scale:1}}
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.9, transition: {scale: { type: "spring", duration:0.01}}}}
      transition={{duration:0.3, ease: "easeOut"}}
    >
      {linkName}
    </motion.a>
  ) : null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, y: 100 }}
          whileInView={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, transition: { scale: { duration: 0.2 }}}}
          transition={{ duration: 0.5, ease: "easeInOut"  }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-border flex w-full flex-row gap-6 p-5 text-sm md:text-lg lg:text-xl xl:text-2xl max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-7xl"
        > 
          <div className="flex flex-col">
            <h1 className="headline text-center pb-5">{headline}</h1>
            <div className="flex flex-row items-center gap-6 md:flex-row md:items-start md:justify-between">         
              <img
                className="h-32 w-32 object-contain md:h-48 md:w-48"
                src={getAssetPath(image)}
                alt="image"
              />
              <div className="flex flex-1 flex-col items-center md:items-center justify-center gap-4 text-center md:text-left">
                <p className="leading-relaxed">{secondary}</p>
              </div>
            </div>
            <div className="items-center">
              {linkElement && (
                <div className="flex justify-center">
                  {linkElement}
                </div>
              )}              
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}


export function ProjectCard({
  Name,
  description,
  image,
  link,
  linkName,
  link2,
  linkName2,
  plattforms
}: {
  Name: string;
  description: string;
  image: string;
  link?: string;
  linkName?: string;
  link2?: string;
  linkName2?: string;
  plattforms?: string;
}) {

  const linkElement = link ? (
    <motion.a
      className="btn-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{scale:1}}
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.9, transition: {scale: { type: "spring", duration:0.01}}}}
      transition={{duration:0.3, ease: "easeOut"}}
    >
      {linkName}
    </motion.a>
  ) : null;

    const linkElement2 = link2 ? (
    <motion.a
      className="btn-link"
      href={link2}
      target="_blank"
      rel="noopener noreferrer"
      initial={{scale:1}}
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.9, transition: {scale: { type: "spring", duration:0.01}}}}
      transition={{duration:0.3, ease: "easeOut"}}
    >
      {linkName2}
    </motion.a>
  ) : null;

  const plattformElement = plattforms ? (
    <div className="flex flex-row">
      {plattforms.split(":").map((plattform, id) => {
        if (plattform == "Win"){
          return <DiWindows key={id}/>
        };
        if (plattform == "Web"){
          return <DiHtml5 key={id}/>
        };
        if (plattform == "Mac"){
          return <DiApple key={id}/>
        };
        if (plattform == "Lin"){
          return <DiLinux key={id}/>
        }; 
        if (plattform == "And"){
          return <AiFillAndroid key={id}/>
        };
        if (plattform == "Dis"){
          return <FaDiscord key={id}/>
        };
      })}
    </div>
  ) : null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, y: 100 }}
          whileInView={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, transition: { scale: { duration: 0.2 }}}}
          transition={{ duration: 0.5, ease: "easeInOut"  }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-border flex w-full flex-col gap-6 p-5 text-sm md:text-lg lg:text-xl xl:text-2xl max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-7xl"
        > 
          <h1 className="headline text-center">{Name}</h1>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">         
            <img
              className="h-32 w-32 object-contain md:h-48 md:w-48"
              src={getAssetPath(image)}
              alt="image"
            />
            <div className="flex flex-1 flex-col items-center md:items-start text-center md:text-left gap-4">
              <p className="leading-relaxed">{description}</p>
              <div className="flex flex-row">
                {plattformElement}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {linkElement}
                {linkElement2}
              </div>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </>
  );
}
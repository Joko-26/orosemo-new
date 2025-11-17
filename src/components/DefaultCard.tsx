import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, easeOut, motion, scale } from "framer-motion";

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
          className="card-border flex flex-col text-sm md:text-lg lg:text-xl xl:text-2xl p-5"
        > 
          <h1 className="headline text-center">{headline}</h1>
          <div className="flex items-center justify-between gap-3">         
            <img
              className="justify-start max-h-20 max-w-20 md:max-h-50 max-w-50  lg:max-h-70 max-w-70  xl:max-h-100 max-w-100 "
              src={image}
              alt="image"
            />
            <div className="flex flex-col items-center text-center justify-center gap-2">
              <p>{secondary}</p>
            
            </div>

            <div className="flex flex-col items-center text-center justify-center">
              
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {linkElement}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

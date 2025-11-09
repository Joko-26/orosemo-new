import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";

export default function DefaultCard({
  headline,
  secondary,
  image,
  link,
}: {
  headline: string;
  secondary: string;
  image: string;
  link?: string;
}) {

  const linkElement = link ? (
    <a
      className="btn-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Check it out
    </a>
  ) : null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
    </>
  );
}

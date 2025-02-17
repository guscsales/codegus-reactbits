"use client";

import {motion, LayoutGroup} from "framer-motion";
import RotatingText from "@/ui/animations/RotatingText/RotatingText";
import CircularText from "@/ui/animations/TextAnimations/CircularText/CircularText";

export default function Examples() {
  return (
    <div>
      <LayoutGroup>
        <motion.div
          className="flex items-center gap-1 text-2xl font-bold"
          layout
        >
          <motion.span>Codegus</motion.span>
          <RotatingText
            texts={["React", "Next.js", "Typescript", "TailwindCSS"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{y: "100%"}}
            animate={{y: 0}}
            exit={{y: "-120%"}}
            staggerDuration={0.025}
            transition={{type: "spring", damping: 30, stiffness: 400}}
            rotationInterval={2000}
          />
        </motion.div>
      </LayoutGroup>

      <hr className="my-4" />

      <CircularText text="INSCREVA-SE NO CANAL*CODEGUS*" />
    </div>
  );
}

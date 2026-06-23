"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="section-line"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={
        isInView
          ? { scaleX: 1, opacity: 1 }
          : { scaleX: 0, opacity: 0 }
      }
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformOrigin: "left center" }}
    />
  );
}

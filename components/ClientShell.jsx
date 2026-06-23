"use client";
import { useEffect } from "react";
import useScrollReveal from "./useScrollReveal";
import DevModeAnnotations from "./DevModeAnnotations";
import Cursor from "./Cursor";
import Particles from "./Particles";
import BackToTop from "./BackToTop";

export default function ClientShell() {
  useScrollReveal();
  return (
    <>
      <Cursor />
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <Particles />
      <BackToTop />
      <DevModeAnnotations />
    </>
  );
}

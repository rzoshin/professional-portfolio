"use client";
import { useEffect } from "react";
import useScrollReveal from "./useScrollReveal";
import Cursor from "./Cursor";
import Particles from "./Particles";
import BackToTop from "./BackToTop";

export default function ClientShell() {
  useScrollReveal();
  return (
    <>
      <Cursor />
      <Particles />
      <BackToTop />
    </>
  );
}

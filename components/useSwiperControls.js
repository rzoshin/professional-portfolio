"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wires external prev/next buttons and progress bar after Swiper mounts.
 * Refs live outside the Swiper tree, so binding happens in useEffect.
 */
export default function useSwiperControls() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper || !prevRef.current || !nextRef.current || !paginationRef.current) {
      return;
    }

    if (typeof swiper.params.navigation !== "boolean") {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }

    if (typeof swiper.params.pagination !== "boolean") {
      swiper.params.pagination.el = paginationRef.current;
      swiper.params.pagination.type = "progressbar";
    }

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }

    if (swiper.pagination) {
      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, [swiper]);

  return { prevRef, nextRef, paginationRef, setSwiper, swiper };
}

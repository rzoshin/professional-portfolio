"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { projects } from "@/lib/data";
import SectionLine from "./SectionLine";
import useSwiperControls from "./useSwiperControls";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PROJECT_IMAGES = {
  "ai-interview-prep": "/projects/ai-interview-prep.png",
  arenax: "/projects/arenax.png",
  skillsphere: "/projects/skillsphere.png",
  digitools: "/projects/digitools.png",
  keenkeepers: "/projects/keenkeepers.png",
  "english-janala": "/projects/english-janala.png",
  "github-issue-tracker": "/projects/github-issue-tracker.png",
  "job-application-tracker": "/projects/job-application-tracker.png",
  "payoo-app": "/projects/payoo-app.png",
  techwave: "/projects/techwave.png",
};

export default function Projects() {
  const visibleProjects = projects.filter((p) => p.slug !== "hireloop");
  const sectionRef = useRef(null);
  const { prevRef, nextRef, paginationRef, setSwiper } = useSwiperControls();
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="projects-section" id="projects" ref={sectionRef} data-dev-label="// Projects.jsx">
      <div className="section-header">
        <p className="section-tag">What I&apos;ve Built</p>
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        <SectionLine />
        <p className="section-desc">
          A selection of real-world projects I&apos;ve designed, built, and
          shipped.
        </p>
      </div>

      <div className="projects-swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setSwiper}
          spaceBetween={24}
          slidesPerView={1.2}
          speed={300}
          loop
          navigation
          pagination={{ type: "progressbar" }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
          }}
          className="projects-swiper"
        >
          {visibleProjects.map((project, index) => (
            <SwiperSlide key={project.slug}>
              <motion.article
                className={`project-card project-card--${project.slug}`}
                style={{
                  "--card-accent": project.accentColor,
                  "--card-glow": project.accentGlow,
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="project-image-wrap">
                  <Image
                    src={PROJECT_IMAGES[project.slug] || `/projects/${project.slug}.png`}
                    alt={`${project.title} preview`}
                    width={640}
                    height={336}
                    className="project-image"
                    loading="lazy"
                  />
                  <div
                    className="project-image-overlay"
                    aria-hidden="true"
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-badges">
                    {project.badges.slice(0, 4).map((badge, j) => (
                      <span
                        key={j}
                        className={`project-badge badge-${badge.style}`}
                      >
                        {badge.icon && (
                          <Image
                            src={badge.icon}
                            alt=""
                            width={13}
                            height={13}
                            className={`badge-icon${badge.style === "next" ? " badge-icon--invert" : ""}`}
                          />
                        )}
                        {badge.label}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link code"
                    >
                      GitHub ↗
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        Live ↗
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="project-link details"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-controls">
          <button
            ref={prevRef}
            type="button"
            className="swiper-nav-btn"
            aria-label="Previous project"
          >
            ←
          </button>
          <div ref={paginationRef} className="swiper-progressbar" />
          <button
            ref={nextRef}
            type="button"
            className="swiper-nav-btn"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

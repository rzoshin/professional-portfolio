"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLock,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiAxios,
  SiReactquery,
  SiNpm,
  SiPostman,
  SiOpenai,
  SiGooglegemini,
  SiGithubcopilot,
  SiVercel,
} from "react-icons/si";
import {
  TbApi,
  TbBrain,
  TbCode,
  TbPalette,
  TbServer,
  TbTools,
  TbDatabase,
  TbListNumbers,
  TbAlertTriangle,
  TbMoon,
  TbSparkles,
  TbLink,
} from "react-icons/tb";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { VscCode } from "react-icons/vsc";
import { PiCursorClick } from "react-icons/pi";
import { skills } from "@/lib/data";
import SectionLine from "./SectionLine";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const skillGridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const skillBoxVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const CATEGORY_ICONS = {
  frontend: TbCode,
  ui: TbPalette,
  backend: TbServer,
  data: TbDatabase,
  tools: TbTools,
  ai: TbBrain,
};

const SKILL_ICONS = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  shadcn: TbSparkles,
  framer: SiFramer,
  figma: FaFigma,
  themes: TbMoon,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  jwt: RiShieldKeyholeLine,
  auth: FaLock,
  axios: SiAxios,
  reactquery: SiReactquery,
  api: TbApi,
  pagination: TbListNumbers,
  lock: FaLock,
  error: TbAlertTriangle,
  git: FaGitAlt,
  github: FaGithub,
  vercel: SiVercel,
  npm: SiNpm,
  vscode: VscCode,
  postman: SiPostman,
  openai: SiOpenai,
  gemini: SiGooglegemini,
  copilot: SiGithubcopilot,
  cursor: PiCursorClick,
  langchain: TbLink,
  vercelai: TbSparkles,
};

export default function Skills() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section className="skills" id="skills" data-dev-label="// Skills.jsx">
      <div className="section-header">
        <p className="section-tag">What I Know</p>
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>
        <SectionLine />
        <p className="section-desc">
          Technologies I&apos;ve been honing through real projects.
        </p>
      </div>

      <div className="skills-swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.15}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            type: "progressbar",
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            if (typeof swiper.params.pagination !== "boolean") {
              swiper.params.pagination.el = paginationRef.current;
            }
          }}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
            if (typeof swiper.params.pagination !== "boolean") {
              swiper.params.pagination.el = paginationRef.current;
              swiper.pagination.init();
              swiper.pagination.update();
            }
          }}
          breakpoints={{
            640: { slidesPerView: 1.6, spaceBetween: 20 },
            900: { slidesPerView: 2.2, spaceBetween: 24 },
            1200: { slidesPerView: 2.8, spaceBetween: 28 },
          }}
          className="skills-swiper"
        >
          {skills.map((group) => {
            const CategoryIcon = CATEGORY_ICONS[group.categoryIcon];
            return (
              <SwiperSlide key={group.category}>
                <article className="skill-slide-card glass-card">
                  <div className="skill-slide-header">
                    <div className="skill-slide-icon-wrap">
                      {CategoryIcon && <CategoryIcon className="skill-slide-cat-icon" />}
                    </div>
                    <h3 className="skill-slide-title">{group.category}</h3>
                  </div>
                  <motion.div
                    className="skill-box-grid"
                    variants={skillGridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    {group.items.map((item) => {
                      const SkillIcon = SKILL_ICONS[item.icon];
                      return (
                        <motion.div
                          key={item.name}
                          variants={skillBoxVariants}
                          className={`skill-box skill-box--${item.gradient} skill-box--icon-${item.icon}`}
                        >
                          {SkillIcon && (
                            <span className="skill-box-icon-wrap">
                              <SkillIcon className="skill-box-icon" aria-hidden="true" />
                            </span>
                          )}
                          <span className="skill-box-name">{item.name}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="swiper-controls">
          <button
            ref={prevRef}
            type="button"
            className="swiper-nav-btn"
            aria-label="Previous skill category"
          >
            ←
          </button>
          <div ref={paginationRef} className="swiper-progressbar" />
          <button
            ref={nextRef}
            type="button"
            className="swiper-nav-btn"
            aria-label="Next skill category"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

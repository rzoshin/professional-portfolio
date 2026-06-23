"use client";
import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> Initializing portfolio...",
  "> Loading Raiyan Zannat...",
  "> Role: Full Stack Developer",
  "> Stack: React · Next.js · Node.js · MongoDB",
  "> Status: Open to Work ✓",
  "> Booting UI...",
];

const STORAGE_KEY = "portfolio-booted";
const LINE_DELAY = 350;
const EXIT_DELAY = 400;
const EXIT_DURATION = 500;

export default function TerminalBoot() {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setDone(false);
    setVisible(true);

    let lineIndex = 0;
    const lineTimers = [];

    const showNextLine = () => {
      if (lineIndex < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIndex]]);
        lineIndex += 1;
        lineTimers.push(setTimeout(showNextLine, LINE_DELAY));
      } else {
        lineTimers.push(
          setTimeout(() => {
            setExiting(true);
            lineTimers.push(
              setTimeout(() => {
                sessionStorage.setItem(STORAGE_KEY, "true");
                setVisible(false);
                setDone(true);
              }, EXIT_DURATION)
            );
          }, EXIT_DELAY)
        );
      }
    };

    lineTimers.push(setTimeout(showNextLine, 200));

    return () => lineTimers.forEach(clearTimeout);
  }, []);

  if (done || !visible) return null;

  return (
    <div className={`terminal-boot${exiting ? " terminal-boot--exit" : ""}`}>
      <div className="terminal-boot-inner">
        {lines.map((line, i) => (
          <div key={i} className="terminal-boot-line">
            {line}
            {i === lines.length - 1 && !exiting && (
              <span className="terminal-boot-cursor" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

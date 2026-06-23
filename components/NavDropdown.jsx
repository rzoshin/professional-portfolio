"use client";
import { useEffect, useRef, useState } from "react";
import DevModeToggle from "./DevModeToggle";

export default function NavDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={`nav-dropdown${open ? " open" : ""}`} ref={ref}>
      <button
        type="button"
        className="nav-dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="More options"
      >
        <span className="nav-dropdown-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div className="nav-dropdown-menu" role="menu">
          <div className="nav-dropdown-item" role="none">
            <DevModeToggle />
          </div>
        </div>
      )}
    </div>
  );
}

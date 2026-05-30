"use client";

import Link from "next/link";
import { CartIcon } from "@/utils/tabler-icons";
import { useAppSelector } from "@/utils/redux-toolkit/typed-hooks";
import { LogoImageDisplay } from "./LogoImageDisplay";
import { useState, useEffect, useRef } from "react";
import { gsap, useGSAP } from "@utils/gsap/gsap";
import NavLinks from "./NavLinks";

/**
 * Purely decorative icons should be hidden from screen readers.
 */
const Span = ({ utilClass }: { utilClass?: string }) => (
  <span
    aria-hidden="true"
    className={`hamburger-icon bg-accent-pink h-0.5 w-3 block ${utilClass}`}
  />
);

export default function Header() {
  const theme = useAppSelector((state) => state.theme.theme);
  const [isToggledMenu, setIsToggledMenu] = useState(false);

  const sideBarRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    document.body.style.overflow = isToggledMenu ? "hidden" : "auto";
  }, [isToggledMenu]);

  // Focus Trap Logic
  useEffect(() => {
    if (isToggledMenu && sideBarRef.current) {
      const focusableElements = sideBarRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0] as HTMLElement;
      if (firstElement) firstElement.focus();
    }
  }, [isToggledMenu]);

  // GSAP Animations
  useGSAP(
    () => {
      const slices = gsap.utils.toArray<HTMLElement>(".hamburger-icon");
      gsap.defaults({
        ease: "power2.out",
        duration: 0.3,
        transformOrigin: "center center",
      });

      tl.current = gsap
        .timeline({ paused: true })
        .to(slices[0], { autoAlpha: 0, y: 10 })
        .to(slices[1], { rotate: 45, delay: 0.3 }, "<")
        .to(slices[2], { rotate: -45 }, "<")
        .to(slices[3], { autoAlpha: 0, y: -10 }, "<-=0.3")
        .fromTo(
          sideBarRef.current,
          { x: "100%", autoAlpha: 0 },
          { x: "0%", autoAlpha: 1, duration: 0.5 },
          "<",
        );
    },
    { scope: headerRef },
  );

  useGSAP(() => {
    if (isToggledMenu) tl.current?.play();
    else tl.current?.reverse();
  }, [isToggledMenu]);

  const toggleSideBarHandler = () => setIsToggledMenu((prev) => !prev);

  return (
    <>
      <header
        data-theme={theme}
        ref={headerRef}
        id="#header"
        className="w-full max-h-12.5 relative top-0 left-0 text-white bg-secondary z-51 transition-colors duration-300"
      >
        <div className="flex gap-3 justify-between items-center justify-self-center w-full max-w-180">
          <Link
            href="/"
            className="col-start-1 col-span-3 bg-primary min-w-22 flex items-center"
          >
            <LogoImageDisplay theme={theme} />
          </Link>

          <div className="mr-3 grid grid-cols-[min-content_min-content] gap-1.5 items-center desktop:hidden">
            <button
              className="col-start-1 p-1.5 place-center"
              aria-label="View shopping cart"
            >
              <CartIcon stroke={2} size={24} />
            </button>

            <button
              ref={triggerRef}
              className="col-start-2 flex flex-col gap-0.75 p-1.5 place-center"
              onClick={toggleSideBarHandler}
              aria-label={
                isToggledMenu ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isToggledMenu}
              aria-controls="mobile-navigation"
            >
              <Span />
              <span aria-hidden className="relative h-0.5 w-3">
                <Span utilClass="absolute top-0 left-0" />
                <Span utilClass="absolute top-0 left-0" />
              </span>
              <Span />
            </button>
          </div>
          <NavLinks />
        </div>
      </header>

      {/* Semantic Nav with ARIA visibility */}
      <nav
        id="mobile-navigation"
        ref={sideBarRef}
        data-theme={theme}
        aria-hidden={!isToggledMenu}
        aria-label="Mobile navigation"
        className="bg-secondary text-white h-screen w-screen overflow-hidden fixed top-0 left-0 z-50 pt-15 px-3"
        style={{
          transform: "translateX(100%)",
          visibility: "hidden", // GSAP handles this via autoAlpha
        }}
      >
        <NavLinks updateState={setIsToggledMenu} />
      </nav>
    </>
  );
}

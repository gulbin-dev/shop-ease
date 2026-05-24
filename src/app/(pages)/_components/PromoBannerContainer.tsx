"use client";
import { useGSAP, gsap, mediaQueries } from "@utils/gsap/gsap";
import { useRef } from "react";

const PromoBanner = ({
  children,
  styleProp,
}: Readonly<{
  children: React.ReactNode;
  styleProp: string;
}>) => {
  return (
    <div
      className={`${styleProp} promo-banner absolute inset-0 p-3 text-size-lg rounded-2xl font-bold items-center justify-center tablet:max-w-40 tablet:relative`}
    >
      {children}
    </div>
  );
};

export default function PromoBannerContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // for responsive animation on different screen sizes
      const mm = gsap.matchMedia();

      mm.add(mediaQueries, (context) => {
        const { mobile } = context.conditions ?? {};
        if (!mobile) return;

        const banners = gsap.utils.toArray<HTMLElement>(
          ".promo-banner",
          containerRef.current,
        );

        // uses timeline for better control on animation
        const tl = gsap.timeline();

        let currentIndex = 0;
        let isAnimating = false;

        // set initial positions
        gsap.set(banners, { xPercent: 100 });
        gsap.set(banners[0], { xPercent: 0 });

        const playNext = () => {
          if (isAnimating) return;
          isAnimating = true;

          const currentSlide = banners[currentIndex];

          const nextIndex = (currentIndex + 1) % banners.length;
          const nextSlide = banners[nextIndex];

          // getting next slide positioned properly before the animation starts
          // this is usefull if the banner is already translated
          gsap.set(nextSlide, { xPercent: 100 });

          // the carousel animation
          tl.to(currentSlide, {
            xPercent: -100,
            duration: 0.5,
            ease: "power2.inOut",
          }).to(
            nextSlide,
            {
              xPercent: 0,
              duration: 0.5,
              ease: "power2.inOut",
              onComplete: () => {
                isAnimating = false;
                currentIndex = nextIndex;
              },
            },
            "<",
          );
        };

        const intervalId = setInterval(playNext, 3000); // 3 seconds per slide

        return () => clearInterval(intervalId); //clean up
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="promo-banner-container mt-4 relative min-h-25 overflow-hidden tablet:grid tablet:grid-rows-1 tablet:grid-flow-col tablet:gap-3"
    >
      <PromoBanner styleProp="bg-secondary text-foreground-white">
        ENJOY <span className="text-accent-yellow">BIGGER CASHBACK!</span> GET
        UP TO <span className="text-accent-yellow">8%</span> BACK
      </PromoBanner>
      <PromoBanner styleProp="bg-accent-yellow text-black">
        EXCLUSIVE WELCOME GIFT:{" "}
        <span className="text-secondary">₱100 OFF!</span>
      </PromoBanner>
      <PromoBanner styleProp="bg-secondary text-foreground-white">
        PAYDAY MEGA SALE: UP TO{" "}
        <span className="text-accent-yellow">70% OFF!</span>
      </PromoBanner>
    </div>
  );
}

import { useGSAP, gsap, mediaQueries, Observer } from "@utils/gsap/gsap";
import { RefObject } from "react";

export default function useCarouselAnimation({
  containerRef,
  config,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  config: {
    shouldAnimateOnTablet: boolean; //
    listOfCards: string; // a class name of the cards
    interval: number; // duration per card on view
  };
}) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(mediaQueries, (context) => {
        const { mobile } = context.conditions ?? {};

        const banners = gsap.utils.toArray<HTMLElement>(
          config.listOfCards,
          containerRef.current,
        );
        if (banners.length === 0) return;

        let currentIndex = 0;
        let intervalId: NodeJS.Timeout | null = null;
        let isTweening = false; // Prevents continuous trigger flickers during touch holds

        // Set initial positions
        if (mobile || config.shouldAnimateOnTablet)
          gsap.set(banners, { xPercent: 100 });

        gsap.set(banners[0], { xPercent: 0 });

        const playNext = (direction: number) => {
          if (isTweening) return;

          let nextIndex = currentIndex + direction;
          if (nextIndex < 0) nextIndex = banners.length - 1;
          if (nextIndex >= banners.length) nextIndex = 0;

          // Prevent animating to the exact same slide
          if (nextIndex === currentIndex) return;

          isTweening = true; // Lock interactions during execution

          const currentSlide = banners[currentIndex];
          const nextSlide = banners[nextIndex];

          const currentEndMove = direction === 1 ? -100 : 100;
          const nextStartMove = direction === 1 ? 100 : -100;

          // Immediately update index before the animation fires
          currentIndex = nextIndex;

          // Pre-position the incoming slide cleanly without triggering flash frames
          if (mobile || config.shouldAnimateOnTablet)
            gsap.set(nextSlide, { xPercent: nextStartMove });

          // Use overwrite to kill conflicting animations on these elements cleanly
          gsap.to(currentSlide, {
            xPercent: currentEndMove,
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: "auto",
          });

          gsap.to(nextSlide, {
            xPercent: 0,
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: "auto",
            onComplete: () => {
              isTweening = false; // Release the interaction lock safely on completion
            },
          });
        };

        const startAutoplay = () => {
          intervalId = setInterval(() => {
            playNext(1);
          }, config.interval);
        };

        const resetAutoplay = () => {
          if (intervalId) clearInterval(intervalId);
          startAutoplay();
        };

        const obs = Observer.create({
          target: containerRef.current,
          type: "touch,pointer",
          onLeft: () => {
            if (isTweening) return; // Prevent interval scrubbing during continuous touch hold
            if (mobile || config.shouldAnimateOnTablet) {
              playNext(1);
              resetAutoplay();
            }
          },
          onRight: () => {
            if (isTweening) return;
            if (mobile || config.shouldAnimateOnTablet) {
              playNext(-1);
              resetAutoplay();
            }
          },
          tolerance: 50, // Increased slightly to filter out micro-jitters from fingers
          preventDefault: false,
          lockAxis: true,
        });

        if (mobile || config.shouldAnimateOnTablet) {
          startAutoplay();
        }

        return () => {
          if (intervalId) clearInterval(intervalId);
          obs.kill();
        };
      });
    },
    { scope: containerRef },
  );
}

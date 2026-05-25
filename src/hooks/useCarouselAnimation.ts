import { useGSAP, gsap, mediaQueries } from "@utils/gsap/gsap";
import { RefObject } from "react";

export default function useCarouselAnimation({
  containerRef,
  listOfCards,
  interval,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  listOfCards: string; //a class name of the card
  interval: number;
}) {
  useGSAP(
    () => {
      // for responsive animation on different screen sizes
      const mm = gsap.matchMedia();

      mm.add(mediaQueries, (context) => {
        const { mobile } = context.conditions ?? {};
        if (!mobile) return;

        const banners = gsap.utils.toArray<HTMLElement>(
          listOfCards,
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

        const intervalId = setInterval(playNext, interval); // interval per slide

        return () => clearInterval(intervalId); //clean up
      });
    },
    { scope: containerRef },
  );
}

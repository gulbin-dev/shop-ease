"use client";
import useCarouselAnimation from "@/hooks/useCarouselAnimation";
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
      className={`${styleProp} flex promo-banner absolute inset-0 p-3 text-size-lg min-w-10 rounded-2xl font-bold items-center justify-center tablet:w-full tablet:text-size-md tablet:mx-auto`}
    >
      {children}
    </div>
  );
};

export default function PromoBannerContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation({
    containerRef,
    config: {
      shouldAnimateOnTablet: true,
      listOfCards: ".promo-banner",
      interval: 3000,
    },
  });
  console.log("log per run");
  return (
    <div
      ref={containerRef}
      className="promo-banner-container row-start-4 row-span-3 col-start-1 col-span-3 p-3 mx-3 relative min-h-25 overflow-hidden z-1 mobile-md:mx-auto mobile-md:w-[90vw] tablet:max-w-45 tablet:mx-3 tablet:bg-white tablet:shadow-[0_0_25px_40px] tablet:shadow-white "
    >
      <PromoBanner styleProp="bg-secondary text-foreground-white">
        <p>
          ENJOY <span className="text-accent-yellow">BIGGER CASHBACK!</span> GET
          UP TO <span className="text-accent-yellow">8%</span> BACK
        </p>
      </PromoBanner>
      <PromoBanner styleProp="bg-accent-yellow text-black">
        <p>
          EXCLUSIVE WELCOME GIFT:{" "}
          <span className="text-secondary">₱100 OFF!</span>
        </p>
      </PromoBanner>
      <PromoBanner styleProp="bg-secondary text-foreground-white">
        <p>
          PAYDAY MEGA SALE: UP TO{" "}
          <span className="text-accent-yellow">70% OFF!</span>
        </p>
      </PromoBanner>
    </div>
  );
}

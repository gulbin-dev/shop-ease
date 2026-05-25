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
      className={`${styleProp} promo-banner absolute inset-0 p-3 text-size-lg rounded-2xl font-bold items-center justify-center tablet:max-w-40 tablet:relative`}
    >
      {children}
    </div>
  );
};

export default function PromoBannerContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation({
    containerRef,
    listOfCards: ".promo-banner",
    interval: 3000,
  });

  return (
    <div
      ref={containerRef}
      className="promo-banner-container mt-4 relative min-h-25 overflow-hidden tablet:grid tablet:grid-rows-1 tablet:grid-flow-col tablet:gap-3"
    >
      <PromoBanner styleProp="bg-secondary text-foreground-white">
        <p>
          {" "}
          ENJOY <span className="text-accent-yellow">BIGGER CASHBACK!</span> GET
          UP TO <span className="text-accent-yellow">8%</span> BACK
        </p>
      </PromoBanner>
      <PromoBanner styleProp="bg-accent-yellow text-black">
        <p>
          {" "}
          EXCLUSIVE WELCOME GIFT:{" "}
          <span className="text-secondary">₱100 OFF!</span>
        </p>
      </PromoBanner>
      <PromoBanner styleProp="bg-secondary text-foreground-white">
        <p>
          {" "}
          PAYDAY MEGA SALE: UP TO{" "}
          <span className="text-accent-yellow">70% OFF!</span>
        </p>
      </PromoBanner>
    </div>
  );
}

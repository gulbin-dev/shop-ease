"use client";

import Image from "next/image";
import { useGSAP } from "@utils/gsap/gsap";

const Blocks = ({ size }: { size: number }) => {
  return (
    <div
      style={{
        height: `calc(10px * ${size})`,
        width: `calc(20px * ${size})`,
      }}
      className="relative top-0 left-0 bg-accent-pink rounded-md shadow-lg shadow-pink-700"
    ></div>
  );
};

const RowContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 relative -translate-x-1/2 justify-center">
      {children}
    </div>
  );
};

export default function Hero() {
  useGSAP(() => {});
  return (
    <div className="mt-4 relative grid grid-cols-[33.33%_33.33%_1fr] grid-rows-1 overflow-hidden">
      {/* this is for hero-image background blocks */}
      <div className="absolute flex flex-col gap-2 col-start-1 col-span-full row-start-1 min-h-40">
        <RowContainer>
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
          <Blocks size={7} />
        </RowContainer>
        <RowContainer>
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
          <Blocks size={6} />
        </RowContainer>
        <RowContainer>
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
          <Blocks size={5} />
        </RowContainer>
        <RowContainer>
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
          <Blocks size={4} />
        </RowContainer>
        <RowContainer>
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
          <Blocks size={3} />
        </RowContainer>
        <RowContainer>
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
          <Blocks size={2} />
        </RowContainer>
        <RowContainer>
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />

          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
          <Blocks size={1} />
        </RowContainer>
      </div>
      <Image
        src="/hero-image-woman.png"
        alt="A Woman shopping happily on ShopEase"
        width={200}
        height={484}
        className="object-contain relative col-start-2 col-span-2 row-start-1"
      />
      <div className="bg-primary/40 absolute bottom-0 left-0 backdrop-blur-sm w-full inline-block text-center py-3 rounded-2xl">
        <h2 className="text-size-lg font-bold">
          Shop smart. Save big. Shop with confidence.
        </h2>
        <p className="mt-2">
          Premium quality meets secure shopping. Discover great deals today!
        </p>
      </div>
    </div>
  );
}

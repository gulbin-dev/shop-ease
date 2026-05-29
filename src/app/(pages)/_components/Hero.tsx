"use client";

import Image from "next/image";
import { useGSAP } from "@utils/gsap/gsap";

const Blocks = ({ size }: { size: number }) => {
  return (
    <div
      style={{
        height: `calc(10px * ${size})`,
        width: `calc(24px * ${size})`,
      }}
      className="relative top-0 left-0 bg-accent-pink rounded-md shadow-lg shadow-pink-700 blur-[3px]"
    ></div>
  );
};

const RowContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2 relative justify-center">{children}</div>;
};

export default function Hero() {
  useGSAP(() => {});
  return (
    <div className="mt-5 relative grid-cols-subgrid grid-rows-subgrid col-start-1 col-span-3 row-start-6 row-span-8 grid overflow-hidden tablet:row-start-3 tablet:row-span-9 tablet:mt-0">
      {/* this is for hero-image background blocks */}
      <div className="absolute flex flex-col gap-2 col-start-1 col-span-full row-start-3 min-h-40 tablet:row-start-4 tablet:pb-3 tablet:row-span-full max-w-180">
        <RowContainer>
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
          <Blocks size={7.3} />
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

      {/* image container */}
      <div className="relative min-h-65 w-25 col-start-1 col-span-full mx-auto row-start-1 tablet:col-start-2 tablet:w-45 tablet:min-h-80  tablet:row-span-full tablet:mx-3 tablet:justify-self-end">
        <Image
          src="/hero-image-woman.png"
          alt="A Woman shopping happily on ShopEase"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain inset-0 relative"
        />
      </div>

      {/* glass box container */}
      <div className="bg-primary/60 absolute bottom-0 left-0 backdrop-blur-sm w-full inline-block text-center p-3  rounded-2xl row-start-6 row-span-3 tablet:col-start-1 tablet:col-span-2 tablet:row-start-6 tablet:row-span-3 tablet:p-7 tablet:ml-9">
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

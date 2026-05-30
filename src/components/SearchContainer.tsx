"use client";

import { SearchIcon } from "@utils/tabler-icons";
import { useRef, useState, useEffect, Suspense } from "react";
import { gsap, useGSAP } from "@utils/gsap/gsap";
import useSWR from "swr";
import { fetcher } from "@utils/SWR/fetcher";
import { Product } from "@/utils/types";
import CardProduct from "@components/CardProduct";
import SearchCardLoader from "./UI/Loader/SearchCardLoader";

const SearchResultsList = ({ searchText }: { searchText: string | null }) => {
  const { data } = useSWR(
    searchText ? `/api/search?title=${searchText}` : null,
    (url) => fetcher<Product>(url),
    {
      revalidateOnFocus: false,
      suspense: true,
    },
  );
  if (data?.data?.length === 0)
    return (
      <p className="text-center col-span-2 py-4 text-black dark:text-white ">
        No results found
      </p>
    );
  return (
    <>
      {data?.data?.map((product) => (
        <CardProduct
          key={product.id}
          thumbnail={product.images[0]}
          title={product.title}
          price={product.price}
        />
      ))}
    </>
  );
};

export default function SearchContainer() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const innerContentRef = useRef<HTMLDivElement | null>(null);
  const [searchText, setSearchText] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isButtonClicked ? "hidden" : "auto";
  }, [isButtonClicked]);

  // Open modal using native HTML5 API
  const handleOpen = () => {
    modalRef.current?.showModal();
    setIsButtonClicked(true);
  };

  // Close modal using GSAP animation first, then call native close
  const handleClose = () => {
    gsap.to(innerContentRef.current, {
      y: "102%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        modalRef.current?.close();
        setIsButtonClicked(false);
        setSearchText(null); // Reset search input on close
      },
    });
  };

  useGSAP(() => {
    if (isButtonClicked) {
      /* 
        Using fromTo forces GSAP to instantly snap the element to a 102% offset 
        on the GPU thread, killing the native browser layout-flash completely.
      */
      gsap.fromTo(
        innerContentRef.current,
        { y: "102%" },
        {
          y: 0,
          duration: 0.45,
          ease: "power3.out", // Smooth deceleration curve
          onComplete: () => {
            inputRef.current?.focus();
          },
        },
      );
    }
  }, [isButtonClicked]);

  return (
    <>
      <div className="px-3 row-start-3 col-start-1 col-span-3 z-2 mt-5 tablet:mt-0">
        <button
          className="w-full bg-accent-pink rounded-2xl text-black text-size-sm px-3 py-1 text-start max-w-47 desktop:py-2 desktop:max-w-65"
          onClick={handleOpen}
          aria-haspopup="dialog"
          aria-label="Search items"
        >
          <span className="flex gap-1.5" aria-hidden>
            <SearchIcon size={20} stroke={2} /> Black T-shirt
          </span>
        </button>
        <span className="sr-only" aria-live="polite">
          {!isButtonClicked && "Search dialog is close"}
        </span>
      </div>

      <dialog
        id="dialogSearch"
        ref={modalRef}
        onCancel={(e) => {
          e.preventDefault(); // Stop native instant close so GSAP can animate out
          handleClose();
        }}
        onClick={handleClose}
        className="fixed inset-0 z-1 h-dvh m-0 max-w-none w-screen max-h-dvh bg-transparent text-white backdrop:bg-black/50 overflow-hidden desktop:inset-25"
      >
        <div
          ref={innerContentRef}
          onClick={(e) => e.stopPropagation()}
          className="bg-primary fixed inset-0 h-[102dvh] w-full pt-6 pb-3 px-3 flex flex-col will-change-transform desktop:max-w-140 desktop:mx-auto desktop:h-[85vh] desktop:bottom-0 desktop:top-auto desktop:rounded-2xl desktop:pt-3"
          style={{ transform: "translateY(102%)" }}
        >
          <button
            onClick={handleClose}
            aria-label="Close search"
            className="py-1.25 px-2 bg-transparent border-3 border-secondary rounded-sm block ml-auto text-black dark:text-white"
          >
            X
          </button>

          <input
            ref={inputRef}
            type="search"
            aria-label="Search products"
            className="w-full bg-white text-size-md rounded-2xl mt-3 border-secondary border-2 px-1 focus:outline-none focus:border-secondary text-secondary"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="mt-3 overflow-y-auto flex-1 relative grid grid-cols-2 grid-flow-row gap-1.5 tablet:grid-cols-3 desktop:grid-cols-5">
            <Suspense fallback={<SearchCardLoader />}>
              <SearchResultsList searchText={searchText} />
            </Suspense>
          </div>
        </div>
      </dialog>
    </>
  );
}

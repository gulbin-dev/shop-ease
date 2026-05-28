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
      <button
        className="flex gap-1.5 bg-accent-pink rounded-2xl text-black text-size-sm px-3 py-1 min-w-[80vw] mt-4 text-start mx-3"
        onClick={handleOpen}
        aria-haspopup="dialog"
      >
        <SearchIcon size={20} stroke={2} /> Black T-shirt
      </button>

      <dialog
        ref={modalRef}
        onCancel={(e) => {
          e.preventDefault(); // Stop native instant close so GSAP can animate out
          handleClose();
        }}
        onClick={handleClose}
        className="fixed inset-0 z-1 h-dvh m-0 max-w-none w-screen max-h-dvh bg-transparent text-white backdrop:bg-black/50 overflow-hidden"
      >
        <div
          ref={innerContentRef}
          onClick={(e) => e.stopPropagation()}
          className="bg-primary fixed inset-0 h-[102dvh] w-full pt-6 pb-3 px-3 flex flex-col will-change-transform"
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

          <div className="mt-3 overflow-y-auto flex-1 relative grid grid-cols-2 grid-flow-row gap-1.5">
            <Suspense fallback={<SearchCardLoader />}>
              <SearchResultsList searchText={searchText} />
            </Suspense>
          </div>
        </div>
      </dialog>
    </>
  );
}

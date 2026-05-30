"use client";

import { toggleTheme } from "@utils/redux-toolkit/slices/theme-slice";
import { useAppDispatch } from "@utils/redux-toolkit/typed-hooks";
import { Dispatch, SetStateAction } from "react";

export default function ToggleThemeButton({
  updateState,
  children,
  theme,
}: {
  updateState: Dispatch<SetStateAction<boolean>> | undefined;
  children: React.ReactNode;
  theme: "light" | "dark";
}) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="mt-4 px-4 py-2 bg-accent-pink text-black rounded desktop:mt-0 desktop:py-1 desktop:px-2"
      aria-label={theme === "light" ? "Set dark mode" : "Set light mode"}
      onClick={() => {
        dispatch(toggleTheme());
        updateState?.(false);
      }}
    >
      {children}
    </button>
  );
}

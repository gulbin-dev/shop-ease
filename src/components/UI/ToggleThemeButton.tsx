"use client";

import { toggleTheme } from "@utils/redux-toolkit/slices/theme-slice";
import { useAppDispatch } from "@utils/redux-toolkit/typed-hooks";
import { Dispatch, SetStateAction } from "react";

export default function ToggleThemeButton({
  updateState,
  children,
}: {
  updateState: Dispatch<SetStateAction<boolean>> | undefined;
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="mt-4 px-4 py-2 bg-accent-pink text-black rounded"
      onClick={() => {
        dispatch(toggleTheme());
        updateState?.(false);
      }}
    >
      {children}
    </button>
  );
}

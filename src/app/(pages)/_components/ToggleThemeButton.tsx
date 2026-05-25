"use client";

import { toggleTheme } from "@utils/redux-toolkit/slices/theme-slice";
import { useAppDispatch } from "@utils/redux-toolkit/typed-hooks";

export default function ToggleThemeButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="mt-4 px-4 py-2 bg-accent-pink text-black rounded"
      onClick={() => dispatch(toggleTheme())}
    >
      {children}
    </button>
  );
}

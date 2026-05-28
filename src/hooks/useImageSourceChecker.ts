import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

export default function useImageSourceChecker({
  src,
  setIsSvg,
}: {
  src: string;
  setIsSvg: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    // 1. Instant check: Does the URL explicitly end with .svg?
    if (!src) return;
    if (src.split("?")[0].endsWith(".svg")) {
      setIsSvg(true);
      return;
    }

    // 2. Deep check: For API-based URLs without extensions, fetch headers
    const checkMimeType = async () => {
      try {
        const response = await fetch(src, { method: "HEAD", mode: "no-cors" });
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("image/svg+xml")) {
          setIsSvg(true);
        }
      } catch (error) {
        return;
      }
    };

    if (src.startsWith("http")) {
      checkMimeType();
    }
  }, [src, setIsSvg]);
}

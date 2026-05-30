"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4 space-y-4 h-screen">
      <h2 className="text-xl font-bold">Something went wrong!</h2>

      <p className="text-red-500">
        {error.message.includes("Invalid src prop")
          ? "It seems a new image source was found and it's not yet optimized by Next.js. I'll update the configuration soon. Sorry for the trouble."
          : error.message}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}

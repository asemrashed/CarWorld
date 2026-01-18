"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
      <h2 className="text-3xl font-black text-error">Something went wrong!</h2>
      <p className="text-gray-500">We encountered an error while loading the content.</p>
      <button
        onClick={() => reset()}
        className="btn btn-primary btn-outline"
      >
        Try again
      </button>
    </div>
  );
}

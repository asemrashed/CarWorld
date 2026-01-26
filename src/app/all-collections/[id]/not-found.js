"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
      <h2 className="text-3xl font-black text-error">Not Found!</h2>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <button
        onClick={() => router.push("/")}
        className="btn btn-primary btn-outline"
      >
        Back to home
      </button>
    </div>
  );
}

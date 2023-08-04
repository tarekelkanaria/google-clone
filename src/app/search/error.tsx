"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digset?: string };
  reset: () => void;
}) => {
  const params = useSearchParams();
  const searchTerm = params.get("searchTerm");

  useEffect(() => {
    console.log("Error", error);
  }, [error]);

  return (
    <main className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-4xl mb-4 font-bold text-rose-600">
        Something Went Wrong!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        We couldn&apos;t get your search about {searchTerm}
      </p>
      <button onClick={() => reset()} className="main-btn">
        Try again
      </button>
    </main>
  );
};

export default Error;

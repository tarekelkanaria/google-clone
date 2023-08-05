"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationActions = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const index = +searchParams.get("index")! || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {index >= 10 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&index=${index - 10}`}>
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <BsChevronLeft className="h-5" />
            <button
              type="button"
              className="active:outline-none focus:outline-none"
            >
              Previous
            </button>
          </div>
        </Link>
      )}
      <Link href={`${pathname}?searchTerm=${searchTerm}&index=${index + 10}`}>
        <div className="flex flex-col items-center cursor-pointer hover:underline">
          <BsChevronRight className="h-5" />
          <button
            type="button"
            className="active:outline-none focus:outline-none"
          >
            Next
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PaginationActions;

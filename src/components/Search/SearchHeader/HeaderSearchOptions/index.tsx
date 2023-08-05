"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

const HeaderSearchOptions = () => {
  const pathName = usePathname();
  const params = useSearchParams();
  const searchTerm = params.get("searchTerm");

  return (
    <nav className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <Link
        href={`/search/all?searchTerm=${searchTerm}`}
        className={`tab ${
          pathName === "/search/all" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </Link>
      <Link
        href={`/search/image?searchTerm=${searchTerm}`}
        className={`tab ${
          pathName === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </Link>
    </nav>
  );
};

export default HeaderSearchOptions;

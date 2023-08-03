"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderSearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm: string = searchParams.get("searchTerm") as string;
  const [term, setTerm] = useState<string>(searchTerm || "");

  const updateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/all?searchTerm=${term}`);
  };

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg py-3 px-2 indent-4 mx-1 sm:mx-5 flex-grow max-w-3xl items-center"
      onSubmit={updateSearch}
    >
      <input
        type="search"
        className="w-full focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="text-4xl text-blue-500 border-l-2 border-gray-300 pl-2 mr-1 sm:mr-3 cursor-pointer" />
      <AiOutlineSearch
        className="text-2xl text-blue-500 cursor-pointer"
        onClick={updateSearch}
      />
    </form>
  );
};

export default HeaderSearchForm;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSwr from "swr";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const fetcher = async () => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word"
  ).then((res) => res.json());

  return response;
};

const SearchSection = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [isRandomSearch, setIsRandomSearch] = useState<boolean>(false);
  const router = useRouter();
  const { data, error, isLoading } = useSwr(
    isRandomSearch ? "random-word" : null,
    fetcher
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchWord.trim()) return;
    router.push(`/search/all?searchTerm=${searchWord}`);
  };

  const handleRandomSearch = () => {
    setIsRandomSearch(true);
  };

  useEffect(() => {
    if (error) return;
    if (data) {
      router.push(`/search/all?searchTerm=${data[0]}`);
    }
  }, [data, error]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mx-auto border border-gray-200 px-5 py-3 rounded-full max-w-[90%] hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch
          className="text-xl text-gray-500 mr-3 cursor-pointer"
          onClick={handleSubmit}
        />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <article className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
        <button type="submit" onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          type="submit"
          onClick={handleRandomSearch}
          disabled={isLoading}
          className="btn flex justify-center items-center disabled:opacity-80"
        >
          <ClipLoader color="#93c5fd" loading={isLoading} size={20} />
          {!isLoading && !data && "I'm Feeling Lucky"}
        </button>
      </article>
    </>
  );
};

export default SearchSection;

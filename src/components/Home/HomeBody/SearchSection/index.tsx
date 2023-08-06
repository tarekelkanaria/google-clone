"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useSwr from "swr";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import VoiceSearch from "@/components/Shared/VoiceSearch";

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

  const { data, isLoading } = useSwr(
    isRandomSearch ? "random-word" : null,
    fetcher,
    {
      onSuccess: () => {
        router.push(`/search/all?searchTerm=${data[0]}`);
      },
      onError: () => {
        return;
      },
      revalidateOnMount: true,
    }
  );
  const [loader, setLoader] = useState<boolean>(isLoading);
  const [isRecordStarted, setIsRecordStarted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchWord.trim()) return;
    router.push(`/search/all?searchTerm=${searchWord}`);
  };

  const handleRandomSearch = () => {
    setLoader(true);
    setIsRandomSearch(true);
  };

  const handleRecordingStart = async () => {
    setIsRecordStarted(true);
  };

  const handleUpdateSearch = (voiceWord: string) => {
    if (voiceWord) {
      setSearchWord(voiceWord);
      router.push(`/search/all?searchTerm=${voiceWord}`);
    }
  };

  const handleRecordingEnd = () => {
    setIsRecordStarted(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex relative w-full mx-auto border border-gray-200 px-5 py-3 rounded-full max-w-[90%] hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
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
        <BsFillMicFill
          className="text-lg cursor-pointer"
          onClick={handleRecordingStart}
        />
        {isRecordStarted && (
          <VoiceSearch
            updateSearch={handleUpdateSearch}
            closeRecording={handleRecordingEnd}
          />
        )}
      </form>
      <article className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
        <button type="submit" onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          type="submit"
          onClick={handleRandomSearch}
          disabled={loader}
          className="btn flex justify-center items-center disabled:opacity-80"
        >
          <ClipLoader color="#4285f4" loading={loader} size={20} />
          {!loader && "I'm Feeling Lucky"}
        </button>
      </article>
    </>
  );
};

export default SearchSection;

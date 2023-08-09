"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import VoiceSearch from "@/components/Shared/VoiceSearch";

const HeaderSearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm: string = searchParams.get("searchTerm") as string;
  const [term, setTerm] = useState<string>(searchTerm || "");
  const [isRecordStarted, setIsRecordStarted] = useState<boolean>(false);

  const updateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/all?searchTerm=${term}`);
  };

  const handleRecordingStart = () => {
    setIsRecordStarted(true);
  };

  const handleUpdateSearch = (voiceWord: string) => {
    if (voiceWord) {
      setTerm(voiceWord);
      router.push(`/search/all?searchTerm=${voiceWord}`);
    }
  };

  const handleRecordingEnd = () => {
    setIsRecordStarted(false);
  };

  return (
    <form
      className="flex relative border border-gray-200 rounded-full shadow-lg p-1 sm:py-3 sm:px-2 indent-4 mx-1 sm:mx-5 flex-grow max-w-3xl items-center"
      onSubmit={updateSearch}
    >
      <input
        type="text"
        className="w-full focus:outline-none indent-5"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill
        onClick={handleRecordingStart}
        className="text-4xl text-blue-500 border-l-2 border-gray-300 pl-2 mr-1 sm:mr-3 cursor-pointer"
      />
      <AiOutlineSearch
        className="text-2xl text-blue-500 cursor-pointer"
        onClick={updateSearch}
      />
      {isRecordStarted && (
        <VoiceSearch
          updateSearch={handleUpdateSearch}
          closeRecording={handleRecordingEnd}
        />
      )}
    </form>
  );
};

export default HeaderSearchForm;

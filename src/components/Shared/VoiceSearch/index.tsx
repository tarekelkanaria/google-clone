"use client";

import { useSpeechContext } from "@speechly/react-client";
import { useEffect, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const VoiceSearch = ({
  closeRecording,
  updateSearch,
}: {
  closeRecording: () => void;
  updateSearch: (word: string) => void;
}) => {
  const [transcripts, setTranscripts] = useState<string>("");
  const { segment, listening, attachMicrophone, start, stop } =
    useSpeechContext();

  useEffect(() => {
    const streaming = async () => {
      if (transcripts) {
        await stop();
        updateSearch(transcripts);
        setTranscripts("");
        closeRecording();
      } else {
        await attachMicrophone();
        await start();
        if (listening) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    };
    streaming();
  }, [transcripts]);

  useEffect(() => {
    const extractWords = () => {
      if (segment?.isFinal) {
        const transcript = segment.words.map((word) => word.value).join(" ");
        setTranscripts(transcript);
      }
    };
    extractWords();
  }, [segment]);

  const handleClose = async () => {
    await stop();
    closeRecording();
  };
  return (
    <div className="absolute top-full left-1/3 lg:left-3/4 p-2 bg-rose-200 text-blue-700 text-2xl flex">
      {listening ? "Speak" : "Waiting..."}
      <BsFillMicFill className="text-3xl mx-2" />
      <RxCross2 onClick={handleClose} className="text-3xl cursor-pointer" />
    </div>
  );
};

export default VoiceSearch;

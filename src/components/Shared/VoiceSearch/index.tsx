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
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const [tentative, setTentative] = useState<string>("");
  const { segment, listening, attachMicrophone, start, stop } =
    useSpeechContext();

  useEffect(() => {
    const endStreaming = async () => {
      await stop();
      updateSearch(transcripts.join(" "));
      closeRecording();
    };
    const streaming = async () => {
      if (transcripts.join(" ")) {
        endStreaming();
      } else {
        await attachMicrophone();
        await start();
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    };
    streaming();
  }, [transcripts]);

  useEffect(() => {
    const extractWords = () => {
      if (segment) {
        const transcript = segment.words.map((word) => word.value).join(" ");
        setTentative(transcript);
        if (segment?.isFinal) {
          setTentative("");
          setTranscripts((current) => [...current, tentative]);
        }
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

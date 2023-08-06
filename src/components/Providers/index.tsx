"use client";

import { SpeechProvider } from "@speechly/react-client";

const appId = process.env.NEXT_PUBLIC_SPEECHLY_APP_ID;

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SpeechProvider appId={appId}>{children}</SpeechProvider>;
};

export default Providers;

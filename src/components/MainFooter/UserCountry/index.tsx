"use client";

import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useSWR from "swr";

const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME;

const fetcher = async (url: string) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.countryName);

  return response;
};

const UserCountry = () => {
  const [mounted, setMounted] = useState(false);
  const [lat, setLat] = useState(37.09024);
  const [long, setLong] = useState(-95.712891);
  const { data, error, isLoading } = useSWR(
    mounted ? "user-country" : null,
    () =>
      fetcher(
        `https://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=${USER_NAME}`
      )
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLong(longitude);
      });
    }
    setMounted(true);
  }, []);
  return (
    <>
      <p className="px-8 py-3 border-b border-[#dadce0]">
        <ClipLoader color="#93c5fd" loading={isLoading} size={30} />
        {error && <p>Country Not Found</p>}
        {data}
      </p>
    </>
  );
};

export default UserCountry;

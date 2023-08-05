"use client";

import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useSWR from "swr";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetcher = async () => {
  const response = await fetch(
    `https://extreme-ip-lookup.com/json/?key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data.country);

  return response;
};

const UserCountry = () => {
  const [country, setCountry] = useState("United States");
  const { data, error, isLoading } = useSWR("user-country", fetcher);

  useEffect(() => {
    setCountry(data);
  }, [data]);

  return (
    <p className="px-8 py-4 border-b border-[#dadce0]">
      <ClipLoader color="#93c5fd" loading={isLoading} size={20} />
      {error && "Country Not Found"}
      {data && country}
    </p>
  );
};

export default UserCountry;

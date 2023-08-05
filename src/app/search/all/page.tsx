import Link from "next/link";

import AllSearchItems from "@/components/Search/AllSearchItems";

import { SearchDataType } from "@/app/types/search-data-types";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CONTEXT_KEY = process.env.GOOGLE_CONTEXT_KEY;

export default async function AllSearch({
  searchParams,
}: {
  searchParams: { searchTerm: string; index?: string };
}) {
  const { searchTerm } = searchParams;
  const startIndex = searchParams.index || "1";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
  );

  if (!response.ok) throw new Error("Error has Occurred");

  const data: SearchDataType = await response.json();

  const { items } = data;
  return (
    <main>
      {!items && (
        <section className="flex flex-col justify-center items-center pt-10 ">
          <h1 className="text-4xl mb-4 font-bold text-rose-600 ">
            No Results Found
          </h1>
          <p className="text-lg text-gray-700">
            Try searching something else or go
            <Link
              href="/"
              className="text-sky-400 hover:text-blue-600 font-bold p-2"
            >
              Home
            </Link>
            .
          </p>
        </section>
      )}
      {items && <AllSearchItems results={data} />}
    </main>
  );
}

import {
  SearchDataItemType,
  SearchDataType,
} from "@/app/types/search-data-types";
import AllSearchItem from "./AllSearchItem";

export default function AllSearchItems({
  results,
}: {
  results: SearchDataType;
}) {
  const { items }: { items: SearchDataItemType[] } = results as {
    items: SearchDataItemType[];
  };
  return (
    <section className="w-full mx-auto px-2 pb-24 pt-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-sm mt-3 mb-5">
        About {results?.searchInformation?.formattedTotalResults} Results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {items &&
        items.map((item) => <AllSearchItem key={item.cacheId} {...item} />)}
    </section>
  );
}

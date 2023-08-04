import { SearchDataImageType } from "@/app/types/search-data-types";
import ImageSearchItem from "./ImageSearchItem";

export default function ImageSearchItems({
  results,
}: {
  results: SearchDataImageType[];
}) {
  return (
    <section className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results &&
          results.map((item) => (
            <ImageSearchItem key={item.cacheId} {...item} />
          ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import Parser from "html-react-parser";
import { SearchDataItemType } from "@/app/types/search-data-types";

export default function AllSearchItem({
  link,
  formattedUrl,
  title,
  htmlSnippet,
}: SearchDataItemType) {
  return (
    <article className="mb-8 max-w-xl">
      <div className="group flex flex-col">
        <Link href={link} target="_blank" className="text-sm truncate">
          {formattedUrl}
        </Link>
        <Link
          href={link}
          target="_blank"
          className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
        >
          {title}
        </Link>
      </div>
      <p className="text-gray-600">{Parser(htmlSnippet)}</p>
    </article>
  );
}

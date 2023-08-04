import { SearchDataImageType } from "@/app/types/search-data-types";
import Link from "next/link";

export default function ImageSearchItem({
  link,
  title,
  displayLink,
  image,
}: SearchDataImageType) {
  return (
    <article className="mb-8">
      <div className="group">
        <Link href={image.contextLink} target="_blank">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={link}
              alt={title}
              className="h-60 w-full group-hover:shadow-xl object-contain transition-shadow"
            />
          }
        </Link>
        <Link href={image.contextLink} target="_blank">
          <h2 className="group-hover:underline truncate text-xl">{title}</h2>
        </Link>
        <Link href={image.contextLink} target="_blank">
          <p className="group-hover:underline text-gray-600">{displayLink}</p>
        </Link>
      </div>
    </article>
  );
}

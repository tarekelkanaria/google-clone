export default function LoadingImagePlaceholder({
  hidden,
}: {
  hidden: boolean;
}) {
  return (
    <article className={`${hidden && "hidden sm:block"} pt-10 animate-pulse`}>
      <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md"></div>
      <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-full"></div>
      <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-full"></div>
    </article>
  );
}

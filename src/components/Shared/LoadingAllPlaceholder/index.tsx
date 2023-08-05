export default function LoadingAllPlaceholder({ hidden }: { hidden: boolean }) {
  return (
    <article className={`${hidden && "hidden sm:block"} pt-10 animate-pulse`}>
      <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="max-w-[360px] h-3.5 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="max-w-[560px] h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="max-w-[530px] h-2 bg-gray-200 rounded-full mb-2.5"></div>
    </article>
  );
}

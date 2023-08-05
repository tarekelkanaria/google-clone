import LoadingImagePlaceholder from "@/components/Shared/LoadingImagePlaceholder";

export default function loading() {
  return (
    <section className="flex flex-col sm:flex-row mx-2 lg:pl-52 sm:space-x-4 max-w-6xl">
      <LoadingImagePlaceholder hidden={false} />
      <LoadingImagePlaceholder hidden={true} />
      <LoadingImagePlaceholder hidden={true} />
    </section>
  );
}

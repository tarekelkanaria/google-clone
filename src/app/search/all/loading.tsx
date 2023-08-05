import LoadingAllPlaceholder from "@/components/Shared/LoadingAllPlaceholder";

export default function loading() {
  return (
    <section className="mx-2 max-w-6xl lg:pl-52">
      <LoadingAllPlaceholder hidden={false} />
      <LoadingAllPlaceholder hidden={true} />
      <LoadingAllPlaceholder hidden={true} />
    </section>
  );
}

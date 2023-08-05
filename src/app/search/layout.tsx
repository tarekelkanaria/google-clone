import SearchHeader from "@/components/Search/SearchHeader";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchHeader />
      <main>{children}</main>
    </>
  );
}

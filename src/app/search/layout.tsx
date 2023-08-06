import Providers from "@/components/Providers";
import SearchHeader from "@/components/Search/SearchHeader";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <SearchHeader />
      </Providers>
      <main>{children}</main>
    </>
  );
}

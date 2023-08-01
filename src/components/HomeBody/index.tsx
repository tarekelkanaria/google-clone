import GoogleLogo from "./GoogleLogo";
import SearchSection from "./SearchSection";

export default function HomeBody() {
  return (
    <main className="flex flex-col items-center mt-24 space-y-5">
      <GoogleLogo />
      <SearchSection />
    </main>
  );
}

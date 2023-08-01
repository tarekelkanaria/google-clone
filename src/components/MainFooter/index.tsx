import FooterNavbar from "./FooterNavbar";
import UserCountry from "./UserCountry";

export default function MainFooter() {
  return (
    <footer className="absolute bottom-0 left-0 bg-[#f2f2f2] text-[#70757a] text-sm w-full">
      <UserCountry />
      <FooterNavbar />
    </footer>
  );
}

import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="container flex justify-end">
      <nav className="flex space-x-2 sm:space-x-5 items-center p-4">
        <Link
          href="https://mail.google.com"
          className="text-sm hover:underline transition-all duration-75"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          className="text-sm hover:underline transition-all duration-75"
        >
          Images
        </Link>
        <TbGridDots className="icon" />
        <button className="main-btn">Sign in</button>
      </nav>
    </header>
  );
}

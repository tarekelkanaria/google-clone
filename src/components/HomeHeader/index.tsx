import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="container flex justify-end">
      <nav className="flex space-x-5 items-center p-4">
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
        <TbGridDots className="p-2 text-4xl  bg-transparent text-gray-500 hover:bg-gray-200 cursor-pointer rounded-full transition-colors" />
        <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </nav>
    </header>
  );
}

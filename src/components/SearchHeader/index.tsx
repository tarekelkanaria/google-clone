import Image from "next/image";
import Link from "next/link";

import HeaderSearchForm from "./HeaderSearchForm";
import HeaderSearchOptions from "./HeaderSearchOptions";

import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 left-0 bg-white">
      <nav className="flex w-full p-2 sm:p-6 justify-between items-center">
        <Link href="/" className="hidden sm:inline-block">
          <Image
            width={120}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            alt="Google logo"
            priority={true}
          />
        </Link>
        <div className="flex-1">
          <HeaderSearchForm />
        </div>
        <ul className="flex space-x-2 items-center">
          <li className="hidden md:inline-flex">
            <RiSettings3Line className="icon text-black" />
          </li>
          <li className="hidden md:inline-flex">
            <TbGridDots className="icon text-black" />
          </li>
          <li>
            <button className="main-btn px-2 sm:px-6 whitespace-nowrap">
              Sign in
            </button>
          </li>
        </ul>
      </nav>
      <HeaderSearchOptions />
    </header>
  );
}

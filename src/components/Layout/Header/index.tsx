import search from "images/Layout/Header/search.svg";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="">
      <div className="fixed inset-x-0 top-0 flex justify-between items-center w-screen h-14 px-8 bg-white shadow-sm">
        <p className="text-xl font-semibold text-slate-600">J.hye</p>
        <div className="flex">
          <Image src={search} alt="search" className="ml-6" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

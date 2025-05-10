import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  // const is just a convention, you can use let or var as well
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex-justify-">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav: string) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

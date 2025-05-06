import { appleImg, searchImg, bagImg } from "../utils";

const Navbar = () => {
  // const is just a convention, you can use let or var as well
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex-justify-between items-center">
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
      </nav>
      "
      <div>
        {["Legion", "Think Pad", "Yoga-Series", "Idea-Pad"].map((nav) => (
          <div key={nav}>{nav}</div>
        ))}
      </div>
      <div>
        <img src={searchImg} alt="search" width={18} height={18} />
        <img src={bagImg} alt="" width={18} height={18} />
      </div>
    </header>
  );
};

export default Navbar;

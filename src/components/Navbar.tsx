import { appleImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
      </nav>

      <div>
        {["Legion", "Think Pad", "Yoga-Series", "Idea-Pad"].map((nav) => (
          <div key={nav}>{nav}</div>
        ))}
      </div>

      <div>
        <img src={searchImg} alt="search" width={18} height={18} />
      </div>
    </header>
  );
};

export default Navbar;

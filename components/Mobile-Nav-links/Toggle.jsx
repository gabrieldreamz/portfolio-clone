import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
// import { FaMoon } from "react-icons/fa";

export default function Toggle({ toggleNavigation, setToggleNavigation }) {
  return (
    <div className="relative flex items-center gap-3">
      {/* <FaMoon size={20} className="scale-up-center text-gray-700" /> */}
      {!toggleNavigation && (
        <RiMenu3Line
          size={24}
          onClick={() => setToggleNavigation((prev) => !prev)}
          className="scale-up-center"
        />
      )}
      {toggleNavigation && (
        <RiCloseLine
          onClick={() => setToggleNavigation((prev) => !prev)}
          size={26}
          className="scale-up-center"
        />
      )}
    </div>
  );
}

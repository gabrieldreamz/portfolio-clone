import Link from "next/link";
export default function DropDownMenu({
  toggleNavigation,
  setToggleNavigation,
}) {
  return (
    <>
      {toggleNavigation && (
        <div className="absolute w-full h-screen top-[100%] right-0 bg-black/20 z-50">
          <ul className="flex gap-3 flex-col p-6 bg-white border-t-[1px] border-gray-200 ControlledOpacity w-full">
            <li className="slide-right1">
              <Link
                href="#project-section"
                className="font-Inter font-medium text-sm tracking-wider"
                onClick={() => setToggleNavigation(false)}
              >
                Projects
              </Link>
            </li>
            <li className="slide-right2">
              <Link
                href="#skills-section"
                className="font-Inter font-medium text-sm tracking-wider"
                onClick={() => setToggleNavigation(false)}
              >
                Skills
              </Link>
            </li>
            <li className="slide-right3">
              <Link
                href="#contact-me"
                className="font-Inter font-medium text-sm tracking-wider"
                onClick={() => setToggleNavigation(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

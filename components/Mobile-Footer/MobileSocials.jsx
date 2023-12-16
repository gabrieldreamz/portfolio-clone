import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

import Link from "next/link";

export default function MobileSocials() {
  return (
    <div className="flex items-center gap-6 mt-10">
      <Link target="blank" href="https://x.com/drealmlex">
        <BiLogoTwitter size={24} />
      </Link>

      <Link
        target="blank"
        href="https://www.linkedin.com/in/gabriel-dream-043268247"
      >
        <BiLogoLinkedin size={24} />
      </Link>

      <Link
        target="blank"
        href="https://instagram.com/drealmlex?igshid=MzRlODBiNWFlZA=="
      >
        <BiLogoInstagramAlt size={24} />
      </Link>

      <Link target="blank" href="https://github.com/gabrieldreamz">
        <BiLogoGithub size={24} />
      </Link>
    </div>
  );
}

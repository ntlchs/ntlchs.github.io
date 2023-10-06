import { PiCursorFill, PiEnvelopeFill, PiHouseFill, PiUserFill } from "react-icons/pi";
import Link from "./Link";

function Header() {
  return (
    <header className="text-black w-full bg-hot-pink-200">
      <div className="flex mx-auto p-md tablet:max-w-7xl px-lg justify-between">
        <a href="/" className="flex items-center px-[10px] py-[6px]">
          {/* px and py are the same as PiHouseFill */}
          <img alt="Logo" src="/images/logo.svg" width={30} />
        </a>
        <div className="lg:block hidden">
          <div className="DESKTOP_LINKS flex gap-md">
            <Link href="/">Home</Link>
            <Link href="/about-me">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="MOBILE_LINKS w-full flex gap-sm text-primary-dark">
            <Link href="/">
              <PiHouseFill size={30} />
            </Link>
            <Link href="/about-me">
              <PiUserFill size={30} />
            </Link>
            <Link href="/projects">
              <PiCursorFill size={30} />
            </Link>
            <Link href="#contact">
              <PiEnvelopeFill size={30} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

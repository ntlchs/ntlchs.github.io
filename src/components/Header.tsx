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
              <i className="text-[1.8rem] ph-fill ph-house"
              ></i>
            </Link>
            <Link href="/about-me">
              <i className="text-[1.8rem] ph-fill ph-user"
              ></i>
            </Link>
            <Link href="/projects">
              <i className="text-[1.8rem] ph-fill ph-cursor"
              ></i>
            </Link>
            <Link href="#contact">
              <i className="text-[1.8rem] ph-fill ph-envelope"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

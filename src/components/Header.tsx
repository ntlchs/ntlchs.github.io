import Link from "./Link";

function Header() {
  return (
    <header className="text-black w-full bg-hot-pink-200 sticky z-10 top-0 backdrop-blur-lg">
      <div className="flex items-center mx-auto p-sm tablet:p-md tablet:max-w-7xl px-lg justify-between">
        <a
          href="/"
          aria-label="Home"
          className="flex items-center justify-center w-8 h-auto aspect-square"
        >
          <svg viewBox="0 0 239 260" xmlns="http://www.w3.org/2000/svg">
            <ellipse
              cx="119.019"
              cy="143.293"
              rx="119.019"
              ry="116.293"
              className="animate-colorChange"
            />
            <path
              d="M72.6 106.8L60.8 103.2V87.6L97.2 83.2H97.8L103 87.4V94.8L102.8 99.4C107.467 95 113.4 91.2667 120.6 88.2C127.8 85.1333 135.333 83.6 143.2 83.6C151.2 83.6 157.467 85.0667 162 88C166.667 90.8 170 95.3333 172 101.6C174.133 107.867 175.2 116.4 175.2 127.2V182L186.4 183.6V197H132V183.8L141.8 182V127.4C141.8 121 141.333 116.067 140.4 112.6C139.6 109 138.133 106.4 136 104.8C133.867 103.2 130.8 102.4 126.8 102.4C120.667 102.4 113.733 105.267 106 111V182L117 183.8V197H61.6V183.8L72.6 182V106.8Z"
              fill="white"
            />
          </svg>
        </a>

        <div className="NAV_LINKS w-full flex gap-sm text-primary-dark">
          <Link href="/" aria-label="Home">
            <i className="text-[1.8rem] ph-fill ph-house"></i>
          </Link>
          <Link href="/about-me" aria-aria-label="About Me">
            <i className="text-[1.8rem] ph-fill ph-user"></i>
          </Link>
          <Link href="/projects" aria-label="Projects">
            <i className="text-[1.8rem] ph-fill ph-cursor"></i>
          </Link>
          <Link href="/contact" aria-aria-label="Contact">
            <i className="text-[1.8rem] ph-fill ph-envelope"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

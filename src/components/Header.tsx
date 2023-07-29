import Link from "./Link";

function Header() {
  return (
    <header className="text-black w-full bg-hot-pink-200">
      <div className="flex mx-auto p-md tablet:max-w-7xl px-lg justify-between">
        <a href="/">
          <img alt="Logo" />
        </a>
        <div className="flex gap-md ">
          <Link href="/">Home</Link>
          <Link href="/about-me">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

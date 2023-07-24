function Header() {
  return (
    <header className="w-full bg-hot-pink-200">
      <div className="flex mx-auto p-md max-w-7xl px-lg justify-between">
        <img alt="Logo" />
        <div className="flex gap-md ">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

import Button from "./Button";
import Link from "./Link";
import Title from "./Title";

function Hero() {
  return (
    <div className="w-full grid tablet:grid-cols-2 gap-md tablet:gap-2xl rounded-lg p-lg tablet:p-2xl tablet:max-w-6xl text-black">
      <div className="flex flex-col gap-md tablet:gap-xl">
        <div className="mx-auto flex flex-shrink max-w-[300px]">
          <img
            src="/assets/images/hero.webp"
            className="block tablet:hidden"
            alt="Hero"
          />
        </div>

        <Title className="font-merri stroke-text text-[55px] leading-[65px] tablet:text-[90px] tablet:leading-[110px]">
          I design and build websites.
        </Title>
        <h2 className="text-[20px] font-semibold">
          I am Natália, a full-stack web developer
        </h2>
        <div className="w-full flex gap-md tablet:gap-lg">
          <Link variant="primary" href="/">
            Github
          </Link>
          <Button variant="secondary">Download CV</Button>
        </div>
      </div>
      <img
        src="/assets/images/hero.webp"
        className="hidden tablet:block"
        alt="Hero"
      />
    </div>
  );
}

export default Hero;

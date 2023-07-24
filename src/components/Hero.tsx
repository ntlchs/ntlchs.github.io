import Button from "./Button";
import Link from "./Link";
import Title from "./Title";

function Hero() {
  return (
    <div className="w-full flex flex-col gap-md rounded-lg p-xl tablet:p-2xl shadow-lg tablet:max-w-3xl">
      <Title>I build and design websites</Title>
      <p>I am Natália, a full-stack web developer</p>
      <div className="w-full flex justify-around">
        <Link href="/">Github</Link>
        <Button>Download CV</Button>
      </div>
    </div>
  );
}

export default Hero;

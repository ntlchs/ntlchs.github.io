import Button from "./Button";
import Link from "./Link";
import Title from "./Title";

function Hero() {
  return (
    <div className="w-full grid tablet:grid-cols-2 gap-md tablet:gap-2xl rounded-lg p-lg tablet:p-2xl tablet:max-w-6xl text-black">
      <div className="flex flex-col gap-md tablet:gap-xl">
        <div className="blob-container">
          <div className="blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8870FF" d="M59.1,-17.4C67.6,7.1,59.4,38.8,39.7,52.7C19.9,66.6,-11.4,62.7,-31.8,47.1C-52.1,31.6,-61.5,4.3,-54.4,-18.2C-47.3,-40.7,-23.6,-58.4,0.8,-58.7C25.3,-58.9,50.6,-41.8,59.1,-17.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <Title className="stroke-text text-[55px] leading-[65px] tablet:text-[90px] tablet:leading-[110px]">
          <p>I <span className="underline decoration-primary">design</span></p>
          <p>and <span className="underline decoration-primary">build</span></p>
          <p>websites.</p>
        </Title>
        <h2 className="text-[20px] font-semibold">
          I am Natália, a full-stack web developer
        </h2>
        <div className="w-full flex gap-md tablet:gap-lg">
          <Link variant="primary" href="/">
            Github
          </Link>
          <Button variant="secondary">Linkedin</Button>
        </div>
      </div>

    </div>
  );
}

export default Hero;

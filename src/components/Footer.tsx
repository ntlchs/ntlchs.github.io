import { PiEnvelope, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

function SocialIcon({
  title,
  url,
  Icon,
}: {
  title: string;
  url: string;
  Icon: React.ComponentType<any>;
}) {
  return (
    <a href={url} className="flex flex-col gap-sm items-center justify-center">
      <div className="text-primary-200 justify-center items-center flex flex-col aspect-square">
        <Icon size={30} />
      </div>
      <p className="text-xs">{title}</p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="contact w-full text-primary-200 bg-black p-md">
      <div className="w-2/3 py-md tablet:py-xl tablet:max-w-[30dvw] justify-between mx-auto flex items-center flex-col">
        <div className="flex gap-lg tablet:gap-2xl">
          <SocialIcon title="Github" Icon={PiGithubLogo} url="/" />
          <SocialIcon title="Email" Icon={PiEnvelope} url="/" />
          <SocialIcon title="Linkedin" Icon={PiLinkedinLogo} url="/" />
        </div>
        <p className="text-xs pt-xl">by Natália Chies</p>
      </div>
    </footer>
  );
}

export default Footer;

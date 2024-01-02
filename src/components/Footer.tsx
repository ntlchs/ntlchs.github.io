import { contactInfo } from "src/utils/myInfo";

function SocialIcon({
  title,
  url,
  iconClass,
  blank = true,
}: {
  title: string;
  url: string;
  iconClass: string;
  blank?: boolean;
}) {
  return (
    <a
      href={url}
      className="flex flex-col gap-sm items-center justify-center hover:scale-105"
      target={blank ? "_blank" : "_self"}
    >
      <div className="justify-center items-center flex flex-col aspect-square">
        <i className={`ph-fill ${iconClass} text-lg`}></i>
      </div>
      <p className="text-xs">{title}</p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="contact w-full p-md">
      <div className="w-2/3 py-md tablet:py-xl tablet:max-w-[30dvw] justify-between mx-auto flex items-center flex-col">
        <div className="flex gap-lg tablet:gap-2xl">
          <SocialIcon
            title="Github"
            iconClass="ph-github-logo"
            url={contactInfo.github}
          />
          <SocialIcon
            title="Linkedin"
            iconClass="ph-linkedin-logo"
            url={contactInfo.linkedin}
          />
          <SocialIcon
            title="Email"
            iconClass="ph-envelope"
            url="/contact"
            blank={false}
          />
        </div>
        <div className="text-xs pt-xl flex gap-xs">
          by
          <a href={contactInfo.github} className="font-semibold">
            Natália Chies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

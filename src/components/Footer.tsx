function SocialIcon({
  title,
  url,
  iconClass,
}: {
  title: string;
  url: string;
  iconClass: string;
}) {
  return (
    <a href={url} className="flex flex-col gap-sm items-center justify-center">
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
          <SocialIcon title="Github" iconClass="ph-github-logo" url="/" />
          <SocialIcon title="Linkedin" iconClass="ph-linkedin-logo" url="/" />
          <SocialIcon title="Email" iconClass="ph-envelope" url="/" />
        </div>
        <p className="text-xs pt-xl">by Natália Chies</p>
      </div>
    </footer>
  );
}

export default Footer;

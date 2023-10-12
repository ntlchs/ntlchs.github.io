import { hero } from "src/utils/websiteInfo";
import { ProjectsLink } from "./Link";
import Title from "./Title";

const Science = () => {
  return (
    <div className="max-w-md">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 550 550">
        <path
          id="path1"
          d="M250 350 A250 100 0 1 0 250 150 A250 100 0 1 0 250 350"
          fill="transparent"
          stroke="#000"
          strokeWidth="5"
        ></path>

        <circle r="12" fill="#000">
          <animateMotion repeatCount="indefinite" dur="10s">
            <mpath href="#path1"></mpath>
          </animateMotion>
        </circle>

        <path
          id="path2"
          d="M250 0 A100 250 0 1 0 250 500 A100 250 0 1 0 250 0"
          fill="transparent"
          stroke="#000"
          strokeWidth="5"
        ></path>

        <circle r="12" fill="#000">
          <animateMotion repeatCount="indefinite" dur="10s">
            <mpath href="#path2"></mpath>
          </animateMotion>
        </circle>

        <path
          id="path3"
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          d="M79.491 79.4912C89.0278 69.95441 102.9125 65.34691 120.2192 65.49059C137.5382 65.63436 158.0784 70.54467 180.547 79.8113C225.472 98.3399 277.631 134.088 326.271 182.729C374.912 231.37 410.66 283.528 429.189 328.453C438.455 350.922 443.366 371.462 443.509 388.781C443.653 406.088 439.046 419.972 429.509 429.509C419.972 439.046 406.087 443.653 388.781 443.51C371.462 443.366 350.921 438.456 328.453 429.189C283.528 410.66 231.369 374.912 182.729 326.271C134.088 277.631 98.3401 225.473 79.8113 180.547C70.5447 158.0786 65.6344 137.5383 65.4906 120.2194C65.3468 102.9127 69.9543 89.028 79.491 79.4912Z"
          stroke="black"
          strokeWidth="5"
        ></path>

        <circle r="12" fill="#000">
          <animateMotion
            repeatCount="indefinite"
            dur="10s"
            begin="0s; delay1.begin+2s"
          >
            <mpath href="#path3"></mpath>
          </animateMotion>
        </circle>

        <path
          id="path4"
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          d="M420.509 79.4912C410.972 69.95441 397.087 65.34691 379.78 65.49059C362.461 65.63436 341.921 70.54467 319.453 79.8113C274.528 98.3399 222.369 134.088 173.729 182.729C125.088 231.37 89.3401 283.528 70.8113 328.453C61.5455 350.922 56.6344 371.462 56.4906 388.781C56.3468 406.088 60.9543 419.972 70.491 429.509C80.0278 439.046 93.9125 443.653 111.22 443.51C128.541 443.366 149.081 438.456 171.549 429.189C216.474 410.66 268.631 374.912 317.271 326.271C365.912 277.631 401.66 225.473 420.189 180.547C429.456 158.0786 434.366 137.5383 434.51 120.2194C434.654 102.9127 430.046 89.028 420.509 79.4912Z"
          stroke="black"
          strokeWidth="5"
        ></path>

        <circle r="12" fill="#000">
          <animateMotion repeatCount="indefinite" dur="10s">
            <mpath href="#path4"></mpath>
          </animateMotion>
        </circle>
      </svg>
      <p className="text-xs text-right text-gray">
        SVG made by me. <br />
        Feel free to use it, but please credit!
        <i className="ph-fill ph-heart self-center px-xs animate-color-change" />
      </p>
    </div>
  );
};

function Hero() {
  return (
    <div className="w-full grid tablet:grid-cols-2 gap-md tablet:gap-2xl rounded-lg p-lg tablet:p-2xl tablet:max-w-6xl text-black">
      <div className="relative block tablet:hidden m-2xl animate-border-color-change rounded-lg">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="blur-md absolute -z-10 scale-x-125"
        >
          <path
            id="blob-path"
            d="M59.1,-17.4C67.6,7.1,59.4,38.8,39.7,52.7C19.9,66.6,-11.4,62.7,-31.8,47.1C-52.1,31.6,-61.5,4.3,-54.4,-18.2C-47.3,-40.7,-23.6,-58.4,0.8,-58.7C25.3,-58.9,50.6,-41.8,59.1,-17.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <Science />
      </div>
      <div className="flex flex-col gap-md tablet:gap-xl">
        <Title className="stroke-text text-[55px] leading-[65px] tablet:text-[80px] tablet:leading-[90px]">
          {hero.title}
        </Title>
        <h2 className="text-[20px] font-semibold">{hero.subtitle}</h2>
        <div className="w-full flex gap-md tablet:gap-lg">
          <ProjectsLink />
        </div>
      </div>
      <div>
        <div className="blob-container">
          <div className="blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                id="blob-path"
                d="M59.1,-17.4C67.6,7.1,59.4,38.8,39.7,52.7C19.9,66.6,-11.4,62.7,-31.8,47.1C-52.1,31.6,-61.5,4.3,-54.4,-18.2C-47.3,-40.7,-23.6,-58.4,0.8,-58.7C25.3,-58.9,50.6,-41.8,59.1,-17.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div className="hidden tablet:block">
          <Science />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import {
  DiscordIcon,
  FreelancerIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../../assets/icons/icons";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/jayyx3"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Jay's github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.instagram.com/jayy.03/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Jay's instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://x.com/JayJoshi1952486"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Jay's X account"
      >
        <TwitterIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/jay-joshi-75b75124b/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Jay's linkedin account"
      >
        <LinkedInIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.freelancer.com/u/jayyx03"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Jay's Freelancer profile"
      >
        <FreelancerIcon />
      </a>
      <a
        className="socialIcons"
        href="https://discord.com/users/jayyx03"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Jay's Discord profile"
      >
        <DiscordIcon />
      </a>
      <a
        className="socialIcons"
        href="mailto:joshijayy421@gmail.com"
        aria-label="send Jay an email"
      >
        <MailIcon />
      </a>
    </div>
  );
};

export default Socials;

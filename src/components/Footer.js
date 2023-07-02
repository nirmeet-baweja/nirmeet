import GithubLogo from "./GithubLogo";
import LinkedInLogo from "./LinkedInLogo";
import IconLink from "./IconLink";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-screen z-50 bg-white flex justify-center">
      <IconLink
        url="https://www.linkedin.com/in/nirmeet-baweja"
        icon={LinkedInLogo}
      />
      <IconLink url="https://github.com/nirmeet-baweja" icon={GithubLogo} />
    </div>
  );
}

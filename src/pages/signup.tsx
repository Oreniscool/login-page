import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import LoginLayout from "@/layouts/login";
import signUpImage from "@/images/signup.jpg";

export default function SignUpPage() {
  return (
    <LoginLayout>
      <div className="side-image w-1/2 h-screen overflow-hidden">
        <img src={signUpImage} alt="Sign Up" className="h-screen object-cover" />
      </div>
    </LoginLayout>
  );
}

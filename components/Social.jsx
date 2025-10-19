import Link from "next/link";

import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/chung-cuteo" },
  { icon: <FaTwitter />, path: "https://x.com/chung20082024?s=21" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100014241256140" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

import { Link } from "gatsby";
import React from "react";
const Links = [
  { url: "/", name: "HOME" },
  { url: "/about", name: "ABOUT" },
  { url: "/blog", name: "BLOG" },
];
const Header = () => {
  return (
    <header>
      {Links.map((link, index) => (
        <Link style={{ marginRight: "12px" }} to={link.url} key={index}>
          {link.name}
        </Link>
      ))}
    </header>
  );
};
export default Header;

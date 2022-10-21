import { Link, navigate } from "gatsby";
import { HeaderWrapper, NavLinks } from "../../styles/header";
import Toggle from "../../assets/images/icons/toggle.svg";
import Close from "../../assets/images/icons/close.svg";
import { useEffect, useState } from "react";
import USER from "../../constants/user";
import { StaticImage } from "gatsby-plugin-image";
const Links = [
  { url: "/", name: "HOME" },
  { url: "/my_coupon", name: "my coupon" },
  { url: "/create", name: "create coupon" },
  { url: "/reviews", name: "REVIEWs" },
];
const Header = ({ onChangeLogin }: { onChangeLogin: any }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [username, _] = useState(sessionStorage.getItem(USER.NAME) ?? "");
  const selectUser = async () => {
    setIsToggle(!isToggle);
    onChangeLogin();
    sessionStorage.setItem(USER.LOGIN, JSON.stringify(false));
  };

  return (
    <HeaderWrapper>
      <h1 className={"title"}>
        {username === "prince" ? (
          <StaticImage
            alt={"이미지"}
            src={"../../assets/images/main/shin.jpg"}
            width={38}
            height={38}
            quality={100}
            className={"header_profile"}
          />
        ) : (
          <StaticImage
            alt={"이미지"}
            src={"../../assets/images/main/joo.jpg"}
            width={38}
            height={38}
            quality={100}
            className={"header_profile"}
          />
        )}

        <span> HELLO, {username.toUpperCase()}</span>
      </h1>
      <button className={"toggle"} onClick={() => setIsToggle(!isToggle)}>
        <i>{isToggle ? <Close /> : <Toggle />}</i>
      </button>
      <NavLinks className={isToggle ? "show" : ""}>
        {Links.map((link, index) => (
          <Link className="link" to={link.url} key={index}>
            {link.name}
          </Link>
        ))}
        <button className="link" onClick={selectUser}>
          select user
        </button>
      </NavLinks>
    </HeaderWrapper>
  );
};
export default Header;

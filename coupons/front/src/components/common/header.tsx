import { Link, navigate } from "gatsby";
import { HeaderWrapper, NavLinks } from "../../styles/header";
import Toggle from "../../assets/images/icons/toggle.svg";
import Close from "../../assets/images/icons/close.svg";
import Prince from "../../assets/images/icons/prince.svg";
import Princess from "../../assets/images/icons/princess.svg";
import { useEffect, useState } from "react";
import USER from "../../constants/user";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
const Links = [
  { url: "/", name: "HOME" },
  { url: "/create", name: "create coupon" },
  { url: "/reviews", name: "REVIEWs" },
];
const Header = ({
  onDeleteUser,
}: {
  onDeleteUser?: (name: string) => void;
}) => {
  const [isToggle, setIsToggle] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(sessionStorage.getItem(USER.NAME) ?? "");
  }, []);
  const selectUser = async () => {
    if (onDeleteUser) onDeleteUser(sessionStorage.getItem(USER.NAME) ?? "");
    await navigate("/");
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

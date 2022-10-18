import Header from "../../common/header";
import { SelectUserWrapper } from "../../../styles/main";
import UserCircle from "../../../assets/images/main/user.svg";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../common/Button";
import { useState, MouseEvent } from "react";
import USER from "../../../constants/user";
interface ISelectUser {
  onChange: () => void;
}
const SelectUser = ({ onChange }: ISelectUser) => {
  const [user, setUser] = useState("prince");
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setUser(e.currentTarget.value);
    sessionStorage.setItem(USER.NAME, e.currentTarget.value);
  };
  const handleFetch = async () => {
    onChange();
  };
  return (
    <div>
      <SelectUserWrapper>
        <div className={"user"}>
          <UserCircle />
          <div className={"userProfile"}>
            {user === "prince" ? (
              <StaticImage
                src={"../../../assets/images/main/shin.jpg"}
                alt={"사진"}
                className={"userImage"}
              />
            ) : (
              <StaticImage
                src={"../../../assets/images/main/joo.jpg"}
                alt={"사진"}
                className={"userImage"}
              />
            )}
          </div>
        </div>
        <h3 className={"title"}>
          HELLO , <span>{user.toUpperCase()}</span>
        </h3>
        <Button
          size={"lg"}
          variant={"white"}
          execute={handleClick}
          value={"prince"}
        >
          Min❤
        </Button>
        <Button
          size={"lg"}
          variant={"point"}
          execute={handleClick}
          value={"princess"}
        >
          JOO 💕
        </Button>
        &nbsp;
        <Button size={"lg"} execute={handleFetch} variant={"primary"}>
          Check User!
        </Button>
      </SelectUserWrapper>
    </div>
  );
};
export default SelectUser;

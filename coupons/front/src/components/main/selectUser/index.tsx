import Header from "../../common/header";
import { SelectUserWrapper } from "../../../styles/main";
import UserCircle from "../../../assets/images/main/user.svg";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../common/Button";
import { useState, MouseEvent, useEffect } from "react";
import USER from "../../../constants/user";
import httpInstance from "../../../httpModules/httpInstance";
import axios from "axios";
import STATUS from "../../../constants/status";
interface ISelectUser {
  onChangeLogin: () => void;
}
const SelectUser = ({ onChangeLogin }: ISelectUser) => {
  const [user, setUser] = useState(
    sessionStorage.getItem(USER.NAME) ?? "prince"
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setUser(e.currentTarget.value);
  };

  const handleFetch = async ({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) => {
    const {
      data: { data, status },
    } = await httpInstance().post(`/auth/local`, {
      identifier,
      password,
    });

    if (status !== STATUS.OK) {
    }
    sessionStorage.setItem(USER.NAME, user);
    sessionStorage.setItem(USER.JWT, data.jwt);
    sessionStorage.setItem(USER.LOGIN, JSON.stringify(true));
    await onChangeLogin();
  };
  const princeFetcher = () =>
    handleFetch({
      identifier: process.env.PRINCE_ID as string,
      password: process.env.PRINCE_PW as string,
    });
  const princessFetcher = () =>
    handleFetch({
      identifier: process.env.PRINCESS_ID as string,
      password: process.env.PRINCESS_PW as string,
    });
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
        {user === "prince" ? (
          <Button size={"lg"} execute={princeFetcher} variant={"primary"}>
            Check User!
          </Button>
        ) : (
          <Button size={"lg"} execute={princessFetcher} variant={"primary"}>
            Check User!
          </Button>
        )}
      </SelectUserWrapper>
    </div>
  );
};
export default SelectUser;

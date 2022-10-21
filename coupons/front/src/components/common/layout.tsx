import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Seo from "../seo";
import { Global } from "@emotion/react";
import global_css from "../../styles/global";
import LayoutContainer from "../../styles/layout";
import USER from "../../constants/user";
import SelectUser from "../main/selectUser";
interface ILayout {
  pageTitle: string;
  children: ReactNode | JSX.Element;
}
const Layout = ({ pageTitle, children }: ILayout) => {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem(USER.LOGIN)
      ? JSON.parse(sessionStorage.getItem(USER.LOGIN) as string)
      : false
  );
  const onChangeLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <Seo title={pageTitle} />
      <Global styles={global_css} />
      <LayoutContainer style={{ paddingTop: isLogin ? "80px" : "0px" }}>
        <>
          {isLogin ? (
            <div>
              <Header onChangeLogin={onChangeLogin} />
              <main>{children}</main>
            </div>
          ) : (
            <SelectUser onChangeLogin={onChangeLogin} />
          )}
        </>
      </LayoutContainer>
    </>
  );
};
export default Layout;

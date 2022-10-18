import React, { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Seo from "../seo";
import { Global } from "@emotion/react";
import global_css from "../../styles/global";
import LayoutContainer from "../../styles/layout";
import USER from "../../constants/user";
interface ILayout {
  pageTitle: string;
  children: ReactNode | JSX.Element;
  isLogin?: boolean;
  onDeleteUser?: (name: string) => void;
}
const Layout = ({
  pageTitle,
  children,
  isLogin = true,
  onDeleteUser,
}: ILayout) => {
  return (
    <>
      <Seo title={pageTitle} />
      <Global styles={global_css} />
      <LayoutContainer>
        {isLogin && <Header onDeleteUser={onDeleteUser} />}
        <main>{children}</main>
      </LayoutContainer>
    </>
  );
};
export default Layout;

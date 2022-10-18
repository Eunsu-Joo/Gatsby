import * as React from "react";
import { HeadFC, useStaticQuery, graphql, withPrefix } from "gatsby";
import Layout from "../components/common/layout";
import Seo from "../components/seo";
import Main from "../components/main";
import SelectUser from "../components/main/selectUser";
import { useEffect, useState } from "react";
import USER from "../constants/user";
const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setIsLogin(!!sessionStorage.getItem(USER.NAME));
    setUsername(sessionStorage.getItem(USER.NAME) ?? "");
  }, []);
  const onDeleteUser = (name: string) => {
    setIsLogin(false);
    setUsername(name);
  };
  return (
    <Layout
      pageTitle={"메인페이지"}
      isLogin={isLogin}
      onDeleteUser={onDeleteUser}
    >
      {isLogin ? <Main /> : <SelectUser onChange={() => setIsLogin(true)} />}
    </Layout>
  );
};

export default MainPage;

export const Head: HeadFC = () => <Seo title="메인페이지" />;

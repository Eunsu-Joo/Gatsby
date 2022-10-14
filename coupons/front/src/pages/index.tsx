import * as React from "react";
import { HeadFC, useStaticQuery, graphql } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";
const IMAGE_URL = `https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80`;
const MainPage = () => {
  return (
    <Layout pageTitle={"메인페이지"}>
      {/*  외부 이미지 import => 별도 설정 필요없음.*/}
      {/*  plugin 설정 후 터미널 껐다가 다시 켜야함.*/}
      <h2>외부 이미지</h2>
      <StaticImage src={IMAGE_URL} alt={"이미지"} />
      <h2>로컬이미지</h2>
      <StaticImage
        src={"../images/img2.jpg"}
        alt={"이미지"}
      />
    </Layout>
  );
};

export default MainPage;

export const Head: HeadFC = () => <Seo title="메인페이지" />;

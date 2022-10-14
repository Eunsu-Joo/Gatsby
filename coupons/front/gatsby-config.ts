import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `민철💕해`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx"
    // gatsby-source-filesystem
    // 사이트가 구축되면 옵션으로 gatsby-source-filesystem 지정된 폴더의 모든파일을 데이터 영역에 추가한다.
    // path (__dirname)은 현재 실행중인 파일이 포함된 디렉토리의 절대 경로를 저장하는 변수이다.
    //name 구성 개체의 옵션은 sourceInstanceName 각 파일의 필드로 설정된다.
    //이것은 여러 폴더에서 파일을 소싱하려는 경우에 유용하다.
  ],

};

export default config;

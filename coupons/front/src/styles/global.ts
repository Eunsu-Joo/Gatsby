import { css } from "@emotion/react";

const global_css = css`
  :root {
    --bg: #0e164d;
    --red: #ff2e63;
    --green: #1dc7ac;
    --yellow: #faad39;
    --yellow-l: #fdd590;
    --blue: #17288e;
    --blue-l: #464e8a;
    --s1: 8px;
    --s2: 16px;
    --s3: 24px;
    --kr: "Noto Sans KR", sans-serif;
    --en: "Work Sans", sans-serif;
    --min-h: 812px;
    --min-w: 428px;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Noto Sans KR, Works Sans", sans-serif;
    color: #fafafa;
  }
  ul,
  li,
  ol {
    list-style: none;
  }
  a {
    text-decoration: initial;
    color: inherit;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
export default global_css;

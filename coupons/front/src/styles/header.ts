import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  padding: var(--s2) var(--s3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.1);
  .toggle {
    border: 0;
    display: inline-block;
    width: 38px;
    height: 38px;
    background-color: #212a6b;
    border-radius: 50%;
    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  .header_profile {
    display: inline-block;
    border-radius: 50%;
    margin-right: var(--s1);
    position: relative;
    z-index: 10;
    overflow: hidden;
    border: 2px solid var(--yellow);
  }
  .default {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const NavLinks = styled.nav`
  position: absolute;
  width: 100%;
  top: 70px;
  right: -100%;
  z-index: 100;
  background-color: var(--bg);
  min-height: calc(var(--min-h));
  transition: right 0.4s;
  .link {
    display: block;
    font-family: var(--en);
    font-size: 32px;
    margin: var(--s3) 0;
    text-transform: uppercase;
    font-weight: 700;
    background-color: inherit;
    color: inherit;
    border: 0;
    width: inherit;
    text-align: left;
    padding: 0 36px;
  }
  &.show {
    right: 0%;
  }
`;

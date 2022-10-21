import { css } from "@emotion/react";
import styled from "@emotion/styled";
export const MainWrapper = styled.div`
  min-height: 812px;
  height: auto;
  position: relative;
  .line {
    margin-top: -15px;
  }
  .topItem {
    height: 358px;
    width: 100%;
  }
  .couponCount {
    width: 186px;
    height: 186px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: rgba(14, 22, 77, 1);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: var(--en);
    filter: drop-shadow(5px 0px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px -4px 12px rgba(255, 255, 255, 0.6));
    .desc {
      font-size: 18px;
      margin-bottom: 12px;
    }
    .count {
      font-size: 36px;
      display: flex;
      align-items: center;
      svg {
        width: 36px;
        height: 36px;
        margin-right: 12px;
      }
      span {
        font-weight: 700;
        color: var(--red);
      }
    }
  }
`;

export const MainContentBox = styled.div`
  width: 75%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 0 20px 32px;
  background: #17288e;
  border-radius: 0px 70px 0px 0px;
  .dots {
    display: inline-block;
    width: 32px;
    height: 8px;
    background-color: var(--yellow);
    margin-left: 20px;
    border-radius: 4px;
    position: relative;
    margin-bottom: 16px;
    &:before,
    &:after {
      content: "";
      display: inline-block;
      width: 16px;
      height: 8px;
      background-color: var(--yellow-l);
      position: absolute;
      border-radius: 4px;
    }
    &:before {
      left: -20px;
    }
    &:after {
      right: -20px;
    }
  }
  .title {
    font-family: var(--en);
    font-size: 32px;
    margin-bottom: var(--s2);
  }
  .desc {
    font-size: 14px;
    margin-bottom: var(--s2);
  }
  .subTitle {
    font-size: 18px;
    margin-bottom: var(--s3);
  }
`;
export const SelectUserWrapper = styled.div`
  background-color: #010a43;
  min-height: var(--min-h);
  padding: 0 var(--s3);
  display: flex;
  flex-direction: column;
  align-items: center;
  .user {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 60px;
    position: relative;
  }
  .userProfile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .title {
    font-family: var(--en);
    font-size: 24px;
    margin: 48px 0 64px 0;
  }
`;
export const CouponListWrapper = styled.div`
  .total {
    font-family: var(--en);
    font-weight: 600;
    margin-bottom: 36px;
    span {
      color: var(--red);
    }
  }
`;
export const CouponItemWrapper = styled.div`
  background: #fbfbfb;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 80px;
  margin-top: 24px;
  position: relative;
  display: flex;
  padding: 12px;
  &:before,
  &:after {
    content: "";
    width: 32px;
    height: 32px;
    background-color: var(--bg);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  &:before {
    left: -16px;
  }
  &:after {
    right: -16px;
  }
  .icon {
    width: 30%;
    height: inherit;
    border-right: 2px dashed rgba(102, 102, 102, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .itemContents {
    width: 70%;
    padding-left: 12px;
    color: #333;

    h3 {
      font-weight: 700;
      font-size: 20px;
    }
    p {
    }
  }
`;

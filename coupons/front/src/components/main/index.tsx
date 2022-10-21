import { MainContentBox, MainWrapper } from "../../styles/main";
import Bg1 from "../../assets/images/main/bg2.svg";
import CouponImage from "../../assets/images/icons/coupon.svg";
import Line from "../../assets/images/main/line.svg";
import Button from "../common/Button";
import * as React from "react";

const Main = ({ count }: { count: number }) => {
  return (
    <MainWrapper>
      <Bg1 className={"topItem"} />
      <div className={"couponCount"}>
        <p className={"desc"}>현재 보유 쿠폰 수</p>
        <p className={"count"}>
          <CouponImage /> <span>{count}</span>
        </p>
      </div>
      <Line className={"line"} />
      <MainContentBox>
        <span className={`dots`} />
        <h2 className={"title"}>WELCOME!</h2>
        <p className={"desc"}>
          민철이와 은수의 귀여운 <br /> <strong>coupon storage</strong>
          입니다.
        </p>
        <h3 className={"subTitle"}>지금 바로 쿠폰을 등록해보세요!</h3>
        <Button
          variant={"default"}
          size={"md"}
          execute={() => console.log("click")}
        >
          쿠폰 등록
        </Button>
      </MainContentBox>
    </MainWrapper>
  );
};
export default Main;

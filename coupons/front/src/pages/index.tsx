import React, { MouseEvent } from "react";
import { HeadFC, navigate } from "gatsby";
import Layout from "../components/common/layout";
import Seo from "../components/seo";
import Main from "../components/main";
import CouponList from "../components/main/coupons/CouponList";
import { useEffect, useState } from "react";
import httpInstance from "../httpModules/httpInstance";
import STATUS from "../constants/status";
import Button from "../components/common/Button";
import USER from "../constants/user";
const MainPage = () => {
  const [data, setData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [current, setCurrent] = useState("all");
  const onChange = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrent(e.currentTarget.value);
  };
  useEffect(() => {
    (async () => {
      const {
        data: { data, status },
      } = await httpInstance().get("/coupons", {
        params: {
          populate: "*",
        },
      });
      if (status !== STATUS.OK) {
        setIsError(true);
      }
      setData(data.data);
      const newData = data.data.filter((item: any) => {
        return (
          item.attributes.users_permissions_user.data.attributes.username ===
          sessionStorage.getItem(USER.NAME)
        );
      });
      setMyData(newData);
      setCurrent("all");
    })();
  }, []);
  if (isError) return navigate("/404");
  return (
    <Layout pageTitle={"유저를 선택해주세요!"}>
      <Main count={myData.length} />
      <section style={{ padding: "24px 32px 0 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size={"md"}
            execute={onChange}
            style={{ width: "45%", fontFamily: "var(--en)" }}
            variant={"white"}
            value={"all"}
          >
            ALL
          </Button>
          <Button
            size={"md"}
            execute={onChange}
            style={{ width: "45%", fontFamily: "var(--en)" }}
            variant={"point"}
            value={"my_coupon"}
          >
            MY COUPON
          </Button>
        </div>
        {current === "all" ? (
          <CouponList data={data} />
        ) : (
          <CouponList data={myData} />
        )}
      </section>
    </Layout>
  );
};

export default MainPage;

export const Head: HeadFC = () => <Seo title="유저를 선택해주세요!" />;

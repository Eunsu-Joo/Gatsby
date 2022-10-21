import Button from "../../common/Button";
import { CouponListWrapper } from "../../../styles/main";
import CouponItem from "./Coupon";

const CouponList = ({ data }: { data: any }) => {
  return (
    <CouponListWrapper>
      <p className={"total"}>
        TOTAL COUNT : <span>{data.length}</span>
      </p>
      {data.map((item: any) => (
        <CouponItem key={item.id} data={item} />
      ))}
    </CouponListWrapper>
  );
};
export default CouponList;

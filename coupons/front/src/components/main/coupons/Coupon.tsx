import { CouponItemWrapper } from "../../../styles/main";
import { StaticImage } from "gatsby-plugin-image";
const CouponItem = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <CouponItemWrapper>
      <div className={"icon"}>
        <StaticImage
          src={"../../../assets/images/icons/starbucks.svg"}
          alt={"이미지"}
          quality={100}
        />
      </div>
      <div className={"itemContents"}>
        <h3>{data.attributes.title}</h3>
        <p>Created by: </p>
      </div>
    </CouponItemWrapper>
  );
};
export default CouponItem;

import {
  StaticImage,
  getImage,
  GatsbyImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { ReviewItemWrapper } from "../../styles/reviews";
import Coupon from "../../assets/images/icons/coupon.svg";
import { Link } from "gatsby";
const ReviewItem = ({ data }: { data: any }) => {
  const image = getImage(data.frontmatter.image_url);
  return (
    <ReviewItemWrapper>
      <Link to={`/reviews/${data.frontmatter.slug}`}>
        <GatsbyImage
          image={image as IGatsbyImageData}
          alt={"이미지"}
          className={"image"}
        />
      </Link>
      <h4 className={"subTitle"}>
        <Coupon className={"icon"} />
        <span> {data.frontmatter.title}</span>
      </h4>
      <p
        className={"desc"}
        dangerouslySetInnerHTML={{ __html: data.excerpt }}
      ></p>
    </ReviewItemWrapper>
  );
};
export default ReviewItem;

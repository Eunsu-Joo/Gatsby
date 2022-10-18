import Layout from "../../components/common/layout";
import Seo from "../../components/seo";
import { graphql, navigate } from "gatsby";
import React, { ReactNode } from "react";
import { ReviewDetailWrapper } from "../../styles/reviews";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Write from "../../assets/images/icons/write.svg";
import Back from "../../assets/images/icons/back.svg";
import { Link } from "gatsby";
const ReviewDetailPage = ({
  data,
  children,
}: {
  data: any;
  children: ReactNode;
}) => {
  const image = getImage(data.mdx.frontmatter.image_url);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <ReviewDetailWrapper>
        <h4 className={"title"}>{data.mdx.frontmatter.title}</h4>
        <p className={"date"}> {data.mdx.frontmatter.date}</p>
        <GatsbyImage
          image={image as IGatsbyImageData}
          alt={data.mdx.frontmatter.image_name}
        />
        <div
          className={"contents"}
          dangerouslySetInnerHTML={{ __html: data.mdx.excerpt }}
        ></div>
        <div className={"toolbar"}>
          <button className={"back icon"} onClick={() => navigate(-1)}>
            <Back style={{ width: "16px" }} />
            Back
          </button>
          <Link to={"/"} className={"write icon"}>
            <Write style={{ width: "16px" }} />
            Write
          </Link>
        </div>
      </ReviewDetailWrapper>
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D,YYYY")
        image_name
        slug
        image_url {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
`;

export default ReviewDetailPage;

import Layout from "../../components/common/layout";
import { ReviewsWrapper } from "../../styles/reviews";
import ReviewItem from "../../components/reviews/reviewItem";
import { graphql } from "gatsby";
const ReviewsPage = ({ data }: { data: any }) => {
  return (
    <Layout pageTitle={"쿠폰 리뷰 보기"}>
      <ReviewsWrapper>
        <h2 className={"title"}>REVIEWS</h2>
        {data.allMdx.nodes.map((item: any) => (
          <ReviewItem data={item} key={item.id} />
        ))}
      </ReviewsWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
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
        id
        excerpt
      }
    }
  }
`;
export default ReviewsPage;

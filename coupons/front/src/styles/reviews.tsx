import styled from "@emotion/styled";

export const ReviewsWrapper = styled.div`
  padding: 0 32px;
  .title {
    font-size: 42px;
    text-align: center;
    font-family: var(--en);
    margin: var(--s2) 0;
  }
`;
export const ReviewDetailWrapper = styled.div`
  padding: 40px 32px 0 32px;
  .toolbar {
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    .icon {
      display: flex;
      align-items: center;
      font-size: 16px;
      text-transform: uppercase;
      font-family: var(--en);
      padding-right: 16px;
      background-color: inherit;
      border: 0;
      color: inherit;
      font-weight: 600;
      svg {
        margin-right: 8px;
      }
    }
    .write {
      color: var(--red);
    }
  }
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 22px;
  }
  .date {
    text-align: right;
    font-size: 14px;
    margin-bottom: 8px;
    font-family: var(--en);
  }
  .contents {
    margin-bottom: 40px;
    margin-top: 16px;
  }
`;
export const ReviewItemWrapper = styled.div`
  margin-bottom: 40px;
  .image {
    width: 100%;
    height: 250px;
    border-radius: 16px;
    object-fit: cover;
  }
  .subTitle {
    display: flex;
    align-items: center;
    margin: 16px 0;
    font-size: 20px;
    .icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
  .desc {
    width: 100%;
    /* 특정 단위로 텍스트를 자르기 위한 구문 */
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* 텍스트를 자를 때 원하는 단위 ex) 3줄 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: keep-all;
  }
`;

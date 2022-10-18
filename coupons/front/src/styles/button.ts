import styled from "@emotion/styled";

const ButtonWrapper = styled.button`
  font-family: var(--kr);
  border: 0;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.5;
  }
  &.lg {
    width: 100%;
    height: 40px;
  }
  &.md {
    width: 50%;
    height: 40px;
  }
  &.sm {
    width: auto;
    padding: 6px 8px;
    border-radius: 20px;
    font-family: var(--en) !important;
  }
  &.default {
    background-color: #fff;
    color: var(--blue);
  }
  &.point {
    background-color: var(--red);
    color: #fff;
  }
  &.primary {
    border: 1px solid var(--blue-l);
    background-color: inherit;
    color: var(--blue-l);
  }
  &.white {
    border: 1px solid #fff;
    background-color: inherit;
    color: #fff;
  }
  &.spacing {
    &-1 {
      margin-bottom: var(--s1);
    }
    &-2 {
      margin-bottom: var(--s2);
    }
    &-3 {
      margin-bottom: var(--s3);
    }
  }
`;
export default ButtonWrapper;

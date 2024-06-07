import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPage = () => {
  return (
    <>
      <h1>お探しのページは見つかりませんでした！！</h1>
      <br />
      <SReturnTop>
        <Link to="/">Topページへ戻る</Link>
      </SReturnTop>
    </>
  );
};

const SReturnTop = styled.h3`
  font-size: 25px;
  text-decoration: none;
  display: inline-block;

  a {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

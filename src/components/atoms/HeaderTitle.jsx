// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderTitle = () => {

  return (
    <div>
      <SHeaderTitle><Link to="/">Github Viewer</Link> </SHeaderTitle>
    </div>
  );
};
const SHeaderTitle = styled.h1`
color:white;
  cursor: pointer;
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
  white-space: nowrap;
  a{
    color: inherit;
    text-decoration: none;
  }
`;

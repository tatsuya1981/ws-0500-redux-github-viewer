import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderTitles = () => {
  return (
    <SHeaderTitles>
      <SHeaderLists>
        <Link to="/issue">Issue</Link>
      </SHeaderLists>
      <SHeaderLists>
        <Link to="/pullRequest">Pull Request</Link>
      </SHeaderLists>
    </SHeaderTitles>
  );
};

const SHeaderTitles = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px
  margin: 0px;
`;

const SHeaderLists = styled.li`
  margin-right: 16px;
  list-style-type: none;
  color: white;
  font-size: 1.1rem;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

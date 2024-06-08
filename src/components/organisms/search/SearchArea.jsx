import styled from 'styled-components';
import { IssueTitle } from '../../atoms/IssueTitle';
import { SearchIssues } from '../../atoms/SearchIssue';
import { IssueButtons } from '../../molecules/IssueButtons';
import { useState } from 'react';

export const SearchArea = ({ onFilter }) => {
  const [filteredIssues, setFilteredIssues] = useState([]);
  const handleFilter = (issues) => {
    setFilteredIssues(issues);
    onFilter(issues);
  };

  return (
    <SSearchArea>
      <IssueTitle />
      <SearchIssues onFilter={handleFilter} />
      <IssueButtons />
    </SSearchArea>
  );
};

const SSearchArea = styled.div`
  display: flex;
  align-items: center;
`;

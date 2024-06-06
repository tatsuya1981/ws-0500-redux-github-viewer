import styled from 'styled-components';
import { SearchArea } from '../organisms/search/SearchArea';
import { IssueTable } from '../organisms/IssueTable';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Issue = () => {
  const issueList = useSelector((state) => state.issues.issueList)
  const [filteredIssues, setFilteredIssues] = useState(issueList);

  const handleFilter = (issues) => {
    setFilteredIssues(issues);
  };

  useEffect(() => {
    setFilteredIssues(issueList);
  }, [issueList]);

  return (
    <div>
      <SIssueContainer>
        <SIssueWrapper>
          <SIssueGroup>
            <SearchArea onFilter={handleFilter} />
            <IssueTable issues={filteredIssues} />
          </SIssueGroup>
        </SIssueWrapper>
      </SIssueContainer>
    </div>
  );
};
const SIssueContainer = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const SIssueWrapper = styled.div`
  padding: 16px;
`;

const SIssueGroup = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

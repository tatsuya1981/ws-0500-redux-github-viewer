import styled from 'styled-components';
import { SearchArea } from '../organisms/search/SearchArea';
import { IssueTable } from '../organisms/IssueTable';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Issue = () => {
  const issueList = useSelector((state) => state.issues.issueList);
  const [search, setSearch] = useState(issueList);

  const handleSearch = (keyword) => {
    const filteredIssues = issueList.filter((issue) => issue.title.toLowerCase().includes(keyword.toLowerCase()));
    setSearch(filteredIssues);
  };

  return (
    <div>
      <SIssueContainer>
        <SIssueWrapper>
          <SIssueGroup>
            <SearchArea onSearch={handleSearch} />
            <IssueTable issues={search} />
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

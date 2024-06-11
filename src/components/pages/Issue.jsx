import styled from 'styled-components';
import { SearchArea } from '../organisms/search/SearchArea';
import { IssueTable } from '../organisms/IssueTable';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

export const Issue = () => {
  const issueList = useSelector((state) => state.issues.issueList);
  const [keyword, setKeyword] = useState('');

  const filteredIssues = useMemo(() => {
    return issueList.filter((issue) => issue.title.toLowerCase().includes(keyword.toLowerCase()));
  }, [issueList, keyword]);

  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div>
      <SIssueContainer>
        <SIssueWrapper>
          <SIssueGroup>
            <SearchArea onChange={handleSearch} />
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

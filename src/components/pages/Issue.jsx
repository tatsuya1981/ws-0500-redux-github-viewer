import styled from 'styled-components';
import { SearchArea } from '../organisms/search/SearchArea';
import { IssueTable } from '../organisms/IssueTable';

export const Issue = () => {
  return (
    <div>
      <SIssueContainer>
        <SIssueWrapper>
          <SIssueGroup>
          <SearchArea />
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

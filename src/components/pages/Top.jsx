import styled from 'styled-components';
import { HeaderTag } from '../molecules/HeaderTag';
import { Issue } from './Issue';

export const Top = () => {
  return (
        <STopIssue>
          <STopIssueContainer>
            <STopIssueWrapper>
              <HeaderTag />
              <Issue />
            </STopIssueWrapper>
          </STopIssueContainer>
        </STopIssue>
  );
};

const STopIssue = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const STopIssueContainer = styled.div`
  padding: 16px;
`;

const STopIssueWrapper = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

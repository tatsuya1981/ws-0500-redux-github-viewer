import styled from 'styled-components';
import { HeaderTag } from '../molecules/HeaderTag';
import { Issue } from './Issue';
import { PullRequest } from './PullRequest';
import { useState } from 'react';

export const Top = () => {
  const [activeTab, setActiveTab] = useState('issue');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <STopIssue>
      <STopIssueContainer>
        <STopIssueWrapper>
          <HeaderTag activeTab={activeTab} onTabClick={handleTabClick} />
        </STopIssueWrapper>
        <SContentWrapper>{activeTab === 'issue' ? <Issue /> : <PullRequest />}</SContentWrapper>
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

const SContentWrapper = styled.div`
  padding: 16px;
`;

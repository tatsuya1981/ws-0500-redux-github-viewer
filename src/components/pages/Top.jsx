import styled from 'styled-components';
import { HeaderTag } from '../molecules/HeaderTag';
import { Issue } from './Issue';

export const Top = () => {
  return (
    <div>
      <div>
        <SIssue>
          <SIssue2>
            <SIssue3>
              <HeaderTag />
              <Issue />
            </SIssue3>
          </SIssue2>
        </SIssue>
      </div>
    </div>
  );
};

const SIssue = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const SIssue2 = styled.div`
  // padding: 16px;
`;

const SIssue3 = styled.div`
  // padding: 16px;
  margin-top: 16px;
`;

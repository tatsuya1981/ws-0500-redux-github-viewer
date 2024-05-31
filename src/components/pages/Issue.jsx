import styled from "styled-components";
import { SearchArea } from "../organisms/search/SearchArea";
import { IssueTable } from "../organisms/IssueTable";
import { Header } from "../organisms/layout/Header";

export const Issue = () => {
  return(
    <div>
      <Header />
      <SIssue>
        <SIssue2>
          <SIssue3>
          <SearchArea />
          <IssueTable />
          </SIssue3>
        </SIssue2>
      </SIssue>
    </div>
  );
};

const SIssue = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const SIssue2 = styled.div`
  padding: 16px;
`;

const SIssue3 = styled.div`
  padding: 16px;
  margin-top: 16px;
`;
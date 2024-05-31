import styled from "styled-components";
import { IssueTable } from "../organisms/IssueTable";
import { Header } from "../organisms/layout/Header";
import { SearchArea } from "../organisms/search/SearchArea";
import { HeaderTag } from "../molecules/HeaderTag";
import { Issue } from "./Issue";

export const Top = () => {
  return (
    <div>
      <div>
        <Header />
        <SIssue>
        <SIssue2>
          <SIssue3>
            <HeaderTag />
            <SearchArea />
            <IssueTable />
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
  padding: 16px;
`;

const SIssue3 = styled.div`
  padding: 16px;
  margin-top: 16px;
`;
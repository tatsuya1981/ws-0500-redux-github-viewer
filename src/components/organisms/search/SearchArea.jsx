import styled from "styled-components";
import { IssueTitle } from "../../atoms/IssueTitle";
import { SearchIssues } from "../../atoms/SearchIssue";
import { IssueButtons } from "../../molecules/IssueButtons";
import { IssueTable } from "../IssueTable";

export const SearchArea = () => {
  return (
    <>
    <SSearchArea>
      <IssueTitle />
      <SearchIssues>
      { (issues) => (
        <>
      <IssueButtons />
      <IssueTable issues={issues} />
        </>
      )}
      </SearchIssues>
    </SSearchArea>
    </>
  );
};

const SSearchArea = styled.div`
display: flex;
align-items: center;
`;
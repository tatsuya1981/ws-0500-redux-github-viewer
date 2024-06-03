import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const IssueTable = () => {
  const issue = useSelector((state) => state.issues.issueList);
  return (
    <SIssueTableWrapper>
      <SIssueTable>
        <thead>
          <tr>
            <SIssueCheckBox>
              <input type="checkbox"></input>
            </SIssueCheckBox>
            <SIssueTableTitle></SIssueTableTitle>
            <SIssueTableTitle>ステータス</SIssueTableTitle>
            <SIssueTableTitle>作成者</SIssueTableTitle>
            <SIssueTableTitle>作成日付</SIssueTableTitle>
            <SIssueTableTitle>更新日付</SIssueTableTitle>
          </tr>
        </thead>
        <tbody>
          {issue.map((issue) => (
            <SIssueTableRow key={issue.id}>
              <SIssueBodyCheckBox>
                <input type="checkbox"></input>
              </SIssueBodyCheckBox>
              <SIssueBodyTableTitle>{issue.title}</SIssueBodyTableTitle>
              <SIssueBodyTableLists>{issue.status}</SIssueBodyTableLists>
              <SIssueBodyTableLists>{issue.user}</SIssueBodyTableLists>
              <SIssueBodyTableLists>{issue.creationDate}</SIssueBodyTableLists>
              <SIssueBodyTableLists>{issue.updateDate}</SIssueBodyTableLists>
            </SIssueTableRow>
          ))}
        </tbody>
      </SIssueTable>
    </SIssueTableWrapper>
  );
};

const SIssueTableWrapper = styled.div`
  overflow: scroll;
`;

const SIssueTable = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
`;

const SIssueCheckBox = styled.th`
  min-width: auto;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

const SIssueTableTitle = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

const SIssueTableRow = styled.tr`
  cursor: pointer;
`;

const SIssueBodyCheckBox = styled.td`
  min-width: auto;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

const SIssueBodyTableTitle = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
  outline {
    width: 140rem;
  }
`;

const SIssueBodyTableLists = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

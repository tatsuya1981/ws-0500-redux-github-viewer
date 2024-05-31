import styled from "styled-components";

export const IssueTable = () => {
  return (
    <>
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
            <SIssueTableRow>
              <SIssueBodyCheckBox>
                <input type="checkbox"></input>
              </SIssueBodyCheckBox>
              <SIssueBodyTableTitle>A bug in Top Page</SIssueBodyTableTitle>
              <SIssueBodyTableLists>Open</SIssueBodyTableLists>
              <SIssueBodyTableLists></SIssueBodyTableLists>
              <SIssueBodyTableLists>05-31-2024</SIssueBodyTableLists>
              <SIssueBodyTableLists>05-31-2024</SIssueBodyTableLists>
            </SIssueTableRow>
            <SIssueTableRow>
              <SIssueBodyCheckBox>
                <input type="checkbox"></input>
              </SIssueBodyCheckBox>
              <SIssueBodyTableTitle>A bug in Top Page</SIssueBodyTableTitle>
              <SIssueBodyTableLists>Open</SIssueBodyTableLists>
              <SIssueBodyTableLists></SIssueBodyTableLists>
              <SIssueBodyTableLists>05-31-2024</SIssueBodyTableLists>
              <SIssueBodyTableLists>05-31-2024</SIssueBodyTableLists>
            </SIssueTableRow>
            <SIssueTableRow>
              <SIssueBodyCheckBox>
                <input type="checkbox"></input>
              </SIssueBodyCheckBox>
              <SIssueBodyTableTitle>A bug in Top Page</SIssueBodyTableTitle>
              <SIssueBodyTableLists>Open</SIssueBodyTableLists>
              <SIssueBodyTableLists></SIssueBodyTableLists>
              <SIssueBodyTableLists>05-31-2024</SIssueBodyTableLists>
              <SIssueBodyTableLists>05-31-2024</SIssueBodyTableLists>
            </SIssueTableRow>
          </tbody>
        </SIssueTable>
      </SIssueTableWrapper>
    </>
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

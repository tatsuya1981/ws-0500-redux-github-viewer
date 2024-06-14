import styled from 'styled-components';
import { useState } from 'react';
import IssueDetail from './IssueDetail';

export const IssueTable = ({ issues = [] }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState('');
  const allSelected = issues.length > 0 && selectedItems.length === issues.length;

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
  };

  return (
    <SIssueTableWrapper>
      <SIssueTable>
        <thead>
          <tr>
            <SIssueCheckBox>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => {
                  if (allSelected) {
                    setSelectedItems([]);
                  } else {
                    setSelectedItems(issues.map((issue) => issue.id));
                  }
                }}
              ></input>
            </SIssueCheckBox>
            <SIssueTableTitle></SIssueTableTitle>
            <SIssueTableTitle>ステータス</SIssueTableTitle>
            <SIssueTableTitle>作成者</SIssueTableTitle>
            <SIssueTableTitle>作成日付</SIssueTableTitle>
            <SIssueTableTitle>更新日付</SIssueTableTitle>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <SIssueTableRow key={issue.id}>
              <SIssueBodyCheckBox>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(issue.id)}
                  onChange={(e) => {
                    const selectedId = Number(e.target.value);
                    if (selectedItems.includes(selectedId)) {
                      setSelectedItems(selectedItems.filter((id) => id !== selectedId));
                    } else {
                      setSelectedItems([...selectedItems, selectedId]);
                    }
                  }}
                  value={issue.id}
                ></input>
              </SIssueBodyCheckBox>
              <SIssueBodyTableTitle onClick={() => handleIssueClick(issue)}>{issue.title}</SIssueBodyTableTitle>
              <SIssueBodyTableTitle onClick={() => handleIssueClick(issue)}>{issue.status}</SIssueBodyTableTitle>
              <SIssueBodyTableTitle onClick={() => handleIssueClick(issue)}>{issue.user}</SIssueBodyTableTitle>
              <SIssueBodyTableTitle onClick={() => handleIssueClick(issue)}>{issue.creationDate}</SIssueBodyTableTitle>
              <SIssueBodyTableTitle onClick={() => handleIssueClick(issue)}>{issue.updateDate}</SIssueBodyTableTitle>
            </SIssueTableRow>
          ))}
        </tbody>
      </SIssueTable>
      {selectedIssue && <IssueDetail issue={selectedIssue} onClose={() => setSelectedIssue("")} />}
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
  min-width: 10em;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

const SIssueTableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: rgb(235, 246, 255);
  }
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
`;

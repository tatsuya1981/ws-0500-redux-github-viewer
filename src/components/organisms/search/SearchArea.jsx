import styled from 'styled-components';
import { IssueTitle } from '../../atoms/IssueTitle';
import { SearchIssues } from '../../atoms/SearchIssue';
import { IssueButtons } from '../../molecules/IssueButtons';

export const SearchArea = ({ onChange }) => {
  const handleSearch = (keyword) => {
    onChange(keyword);
  };

  return (
    <SSearchArea>
      <IssueTitle />
      <SearchIssues onSearch={handleSearch} />
      <IssueButtons />
    </SSearchArea>
  );
};

const SSearchArea = styled.div`
  display: flex;
  align-items: center;
`;

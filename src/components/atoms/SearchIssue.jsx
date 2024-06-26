import styled from 'styled-components';
import { Input } from './input/Index';

export const SearchIssues = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <SContainer>
      <Input placeholder="issue名で検索" onChange={handleSearch} />
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 8px 16px;
  width: 100%;
`;

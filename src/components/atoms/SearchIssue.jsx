import styled from 'styled-components';
import { Input } from './input/Input';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const SearchIssues = ({children}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const issues = useSelector((state) => state.issues.issueList.filter((issue) => 
  issue.title.toLowerCase().includes(searchKeyword.toLowerCase()) ));
  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };
  return (
    <>
    <SContainer>
      <Input placeholder="issue名で検索" value={searchKeyword} onChange={handleSearch} />
    </SContainer>
    {children(issues)}
    </>
  );
};

const SContainer = styled.div`
  padding: 8px 16px;
  width: 100%;
`;

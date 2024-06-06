import styled from "styled-components";
import { Input } from "./input/Input";
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const SearchIssues = ({ onFilter }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const issues = useSelector((state) => state.issues.issueList);

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    const filteredIssues = issues.filter((issue) => 
      issue.title.toLowerCase().includes(keyword.toLowerCase())
    );
    onFilter(filteredIssues);
  };

  return (
    <SContainer>
      <Input placeholder="issue名で検索" value={searchKeyword} onChange={handleSearch} />
    </SContainer>
  );
};

const SContainer = styled.div`
padding: 8px 16px;
width: 100%;
`;
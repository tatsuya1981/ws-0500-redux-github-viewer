import styled from "styled-components";
import { Input } from "./input/Input";

export const SearchIssues = () => 
(<SContainer>
<Input placeholder="issue名で検索" />
</SContainer>
);

const SContainer = styled.div`
padding: 8px 16px;
width: 100%;
`;
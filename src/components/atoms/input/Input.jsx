import styled from "styled-components";

export const Input = ({ placeholder = "", value, onChange }) => {
  return (
  <SInputContainer>
  <SInput type="text" placeholder={placeholder} value={value} onChange={onChange} />
  </SInputContainer>
  );
};

const SInput = styled.input`
padding: 8px;
  width: 100%;
  border-radius: 6px;
  font-size: 1rem;
  border: 1px solid rgb(225, 228, 232);
  outline: none;
`;

const SInputContainer = styled.div`
  width: 100%;
`
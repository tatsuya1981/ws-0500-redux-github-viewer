import styled from "styled-components"
import { BaseButton } from "./BaseButton";

export const PrimaryButton = ({ children }) => {
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover{
    background-color: rgb(66, 160, 96);
  }
`;
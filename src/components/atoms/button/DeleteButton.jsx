import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const DeleteButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background-color: rgb(160, 28, 4);
  }
`;

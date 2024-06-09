import styled from 'styled-components';
import Button from '../atoms/button/Button';

export const IssueButtons = () => {
  return (
    <SContainer>
      <Button variant={'primary'}>New</Button>
      <Button variant={'danger'}>Delete</Button>
    </SContainer>
  );
};

const SContainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
`;

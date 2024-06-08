import styled from 'styled-components';
import Button from '../atoms/button/Button';

export const IssueButtons = () => {
  return (
    <Scontainer>
      <Button variant={'primary'}>New</Button>
      <Button variant={'danger'}>Delete</Button>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
`;

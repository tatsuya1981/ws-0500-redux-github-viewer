import styled from 'styled-components';
import Button from '../atoms/button/Button';
import { useState } from 'react';
import IssueModal from './IssueModal';


export const IssueButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  return (
    <SContainer>
      <Button variant={'primary'} onClick={openModal}>New</Button>
      <Button variant={'danger'} onClick={() => console.log('Delete button clicked')} >Delete</Button>
      <IssueModal isOpen={isModalOpen} onClose={closeModal} />
    </SContainer>
  );
};

const SContainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
`;

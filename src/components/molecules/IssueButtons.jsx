import styled from 'styled-components';
import Button from '../atoms/button/Button';
import IssueModal from '../organisms/IssueModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/issueSlice';

export const IssueButtons = () => {
  const isModalOpen = useSelector((state) => state.issues.isModalOpen);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <SContainer>
      <Button variant={'primary'} onClick={handleOpenModal}>
        New
      </Button>
      <Button variant={'danger'} onClick={() => console.log('Delete button clicked')}>
        Delete
      </Button>
      <IssueModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </SContainer>
  );
};

const SContainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
`;

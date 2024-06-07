import styled from 'styled-components';
import { HeaderTitle } from '../../atoms/HeaderTitle';
import { HeaderTitles } from '../../molecules/HeaderTitles';
import { MenuDrawer } from '../MenuDrawer';

export const Header = () => {
  return (
    <SHeader>
      <HeaderTitle />
      <HeaderTitles />
      <MenuDrawer />
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(51, 51, 51);
  color: white;
`;

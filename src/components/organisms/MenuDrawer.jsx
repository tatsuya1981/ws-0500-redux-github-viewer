import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const onClickDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <SMenuOverlay open={open} onClick={onClickDrawer} />
      <Nav>
        <HeaderMenu>
          <SBurgerIcon onClick={onClickDrawer}>
            <SBurgerLine open={open} transform="translateY(9px) rotate(45deg)" />
            <SBurgerLine open={open} opacity={0} />
            <SBurgerLine open={open} transform="translateY(-9px) rotate(-45deg)" />
          </SBurgerIcon>
        </HeaderMenu>
        <SBurgerWrapper open={open}>
          <SBurgerMenu open={open}>
            <SBurgerList>
              <Link to="/">Top</Link>
            </SBurgerList>
            <SBurgerList>
              <Link to="/profile">Your Profile</Link>
            </SBurgerList>
            <SBurgerList>
              <Link to="/issue">Issue</Link>
            </SBurgerList>
            <SBurgerList>
              <Link to="/pullRequest">Pull Request</Link>
            </SBurgerList>
          </SBurgerMenu>
        </SBurgerWrapper>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: relative;
`;

const HeaderMenu = styled.header`
  background-color: #333;
  padding: 16px
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const SBurgerIcon = styled.div`
padding: 8px
font-size: 1.2rem;
position: relative;
cursor: pointer;
width: 30px;
height: 25px;
`;

const SBurgerLine = styled.div`
  background-color: #fff;
  height: 3px;
  width: 100%;
  display: block;
  margin: 6px auto;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.open ? props.transform : 'none')}
  opacity: ${(props) => (props.open && props.opacity === 0 ? 0 : 1)}
`;

const SBurgerWrapper = styled.div`
  position: absolute;
  top: 64px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background-color: #fff;
  display: ${(props) => (props.open ? 'block' : 'none')};
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
`;

const SBurgerMenu = styled.ul`
  background-color: white;
  display: ${(props) => (props.open ? 'block' : 'none')};
  list-style-type: none;
  padding: 0;
  margin: 0px;
  position: relative;
  z-index: 11;
`;

const SBurgerList = styled.li`
  padding: 8px 12px;
  color: black;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
    display: block;
  }
  &:hover {
    background-color: rgb(3, 102, 214);
    color: white;
  }
`;

const SMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  display: ${(props) => (props.open ? 'block' : 'none')};
  z-index: 10;
`;

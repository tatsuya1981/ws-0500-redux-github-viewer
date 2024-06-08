import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/layout/Header';

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

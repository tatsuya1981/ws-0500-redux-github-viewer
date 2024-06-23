import { Outlet } from 'react-router-dom';
import { Layout } from '../organisms/layout/Index';

export const DefaultLayout = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
};

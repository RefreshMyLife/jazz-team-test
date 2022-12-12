import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const HeaderTemplate = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderTemplate;

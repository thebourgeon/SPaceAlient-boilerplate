// Depends
import React from 'react';

// Styles
import style from './layout.sass';

// Dumb component
const Layout = ({ children }) => (
  <div className={style.container}>
    {
      children
    }
  </div>
);

export default Layout;

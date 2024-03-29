import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      {/* overall layout with navbar and footer */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

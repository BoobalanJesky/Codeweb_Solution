// components/Layout.js
import Navbar from './Navbar';

const Layout = ({ children }:any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

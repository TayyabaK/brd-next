// import React from "react";
import HeaderOne from "../common/BrdHeader";
// import FooterTwo from "./footer/FooterTwo";
import Copyright from "../common/footer/Brd__Footer";
// import ScrollTop from "./footer/ScrollTop";

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children}
        <footer className="rn-footer footer-style-default variation-two">
          <Copyright />
        </footer>
        {/* <ScrollTop /> */}
      </main>
    </>
  );
};
export default Layout;

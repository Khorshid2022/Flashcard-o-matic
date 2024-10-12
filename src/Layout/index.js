import React from "react";
import Header from "./Header";

function Layout({ children }) { // Accept children as props
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {children}
      </div>
    </React.Fragment>
  );
}

export default Layout;

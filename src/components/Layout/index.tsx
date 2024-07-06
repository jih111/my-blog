import React, { Children } from "react";

import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="py-12 mt-14">{props.children}</div>
    </div>
  );
};

export default Layout;

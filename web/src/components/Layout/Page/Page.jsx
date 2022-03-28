import React from "react";
import "./page.scss";

const Page = ({ children }) => {
  return <main className="page">{children}</main>;
};

export default Page;

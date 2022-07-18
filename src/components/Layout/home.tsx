import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Index2 from "../Header/index2";

type Props = {};

const LayoutHome = (props: Props) => {
  return (
    <div>
      <Index2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutHome;

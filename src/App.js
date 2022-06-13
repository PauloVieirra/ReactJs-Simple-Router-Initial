import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Footers from "./Components/Basic/Footer";
import Topp from "./Components/Basic/Header";


import Routers from "./Routers";

import './App.css';

const Page = (props) => {
  return(
    <BrowserRouter>
        <Topp/>
      <Routers/>
        <Footers/>
    </BrowserRouter>
  );
}


const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}
const mapDispatchToProps = (dispatch) => {
return(
  <div></div>
);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

import React, { Component } from 'react';
import '../App.sass';
import {connect} from "react-redux";
import Nav from "./nav";
import Footer from "./footer"

import HomeContent1 from "./homeContent/homeContent1";
import HomeContent2 from "./homeContent/homeContent2";
import HomeContent3 from "./homeContent/homeContent3";



class App extends Component {
  componentDidMount() {
    window.onload = this.props.getCore
  }
  render() {
    return (
    <div className="index">
      <Nav />
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
      <Footer />
    </div>
    );
  }
}

export default connect(
  (storeContent)=>{
return {
  base: storeContent.content,
}
  },
) (App);
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Banner from './banner.js'
import Tabdiv from './tabdiv.js'
import Wcu from './Wcu.js'
import Testi from './testi.js'
import Footer from './footer.js'

 class Hcontainer extends Component {
  render() {
    return (
      <div className="Hcontainer">
         <Header />
         <Banner />
         <Tabdiv />
         <Wcu />
         <Testi />
         <Footer />
      </div>
    );
  }
}
export default Hcontainer;

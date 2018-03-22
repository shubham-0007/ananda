import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './header.js';
import Footer from './footer.js'
import Hcontainer from './hcontainer.js'
import Aboutus from './aboutus.js'
// import Services from './services.js'
import Admission from './admission.js'
import Appeal from './appeal.js'
import Contact from './contact.js'
import RoomPage from './roompage';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
           <Switch>
          <Route exact path='/' component={Hcontainer}/>
          <Route path='/about-us' component={Aboutus}/>
       {/* <Route path='/Services' component={Services}/> */}
          <Route path='/admission' component={Admission}/>
          <Route path='/appeal' component={Appeal}/>
          <Route path='/rooms' component={RoomPage}/>
          <Route path='/contact-us' component={Contact}/>
         </Switch>
         <Footer />
         
           </div>
    );
  }
}

export default App;

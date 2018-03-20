import React, { Component } from 'react';
import {Link} from 'react-router-dom';
let a=0;
 class Header extends Component {
  constructor() {
    super();

};

render() {
   
	return(
		<div>
		<div className = "navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
              <div className="container">
 <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
      <a className="brand" href="">Aananda</a>
     
              <div className="nav-collapse collapse"  id="cl">
               <ul className="nav">
                	<li><Link to='/'>Home</Link></li>
                   
					<li className="active"><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/rooms' refresh="true">Rooms</Link></li>
					{/* <li><a href="#">Media Coverage</a></li> */}
					{/* <li><Link to='/Services'>Services</Link> </li>   */}
					<li><Link to='/admission'>Admission</Link> </li>
                                        
					{/* <li><Link to='/Appeal'>Appeal</Link></li> */}
					<li><Link to='/contact-us'>Contact Us</Link></li>
                     
        </ul>
      </div>

                </div>
                </div>
                </div>


               <div className="header">
			<div className="logo">
            	<img src="image/ananda-logo.png"/>
            </div>
            <table className="social">
            <tbody>
            	<tr>  	
                    <td className="social_icon"><a href="#"><img src="image/ph_icon.png" /></a></td>
                    <td className="ph_no">9729061000</td>
                    <td className="social_icon"><a href="#"><img src="image/fb_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/twitter_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/google_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/youtube_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/instagram_icon.png" /></a></td> 
                </tr>
            </tbody>
            </table>
            <div className="menu">
            	<ul>
                	<li><Link to='/'>Home</Link></li>
                    
					<li><Link to='/about-us'>About Us</Link></li>
					<li><Link to='/rooms'>Rooms</Link></li>
                       {/* <li><Link to='/Services'>Services</Link></li> */}
					{/* <li><a href="#">Media Coverage</a></li> */}
					 <li><Link to='/admission'>Admission</Link> </li>
                     
					 {/* <li><Link to='/Appeal'>Appeal</Link></li> */}
					<li><Link to='/contact-us'>Contact Us</Link></li>
                </ul>
            </div>
           <div style={{"clear" :"both"}}></div>
	</div>
</div>
		);
}
}

export default Header;

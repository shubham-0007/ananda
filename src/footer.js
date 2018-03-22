import React, { Component } from 'react';
import {Link} from 'react-router-dom';



 class Footer extends Component {
  constructor() {
    super();

};

render() {
    return(

<div className="footer">
    	<div className="contact">
        	<div className="contact_l">
            <p className="l_t">Kamiri Road,Near Radha <br/>
Swami (Dinod),Hisar</p>
            </div>
            <div className="contact_e">
            <p className="e_t">vijay.bhrigu@gmail.com</p>
            </div>
            <div className="contact_c">
            <p className="l_t">+91-9466611224<br />
+91-9729061000</p>
            </div>
        </div>
         <div style={{"clear":"both"}}></div>
        {/* <div className="footer_m">
        	<div className="u_l">
            	<h5>Useful Links</h5>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li className="active"><Link to='/About'>About Us</Link></li>
                     <li><Link to='/Services'>Services</Link></li> 
                    <li><a href="#">Media Coverage</a></li>
                    <li><Link to='/Admission'>Admission</Link> </li>
                    <li><Link to='/Appeal'>Appeal</Link></li>
                    <li><Link to='/Contact'>Contact Us</Link></li>	
                </ul>
            
            </div>
             <div className="s_l">
            	<h5>Site Links</h5>
                <ul>
                	<li><Link to='/Admission'>Help & support</Link></li>
                    <li><Link to='/Admission'>Terms of service</Link></li>
                    <li><Link to='/Admission'>Privacy policy </Link></li>
                   <li><Link to='/Admission'>Return and Refund policy</Link></li>
            
                </ul>
            </div> 
            
             <div className="gall">
            <h5>Gallery</h5>
            	<div className="g_img">
                <img src="image/gallery_img.png" />
                <img src="image/gallery_img.png" />
                <img src="image/gallery_img.png" />
                <img src="image/gallery_img.png" />
                <img src="image/gallery_img.png" />
                <img src="image/gallery_img.png" />
              
                
                </div>
            </div> 
        </div>
         <div style={{"clear":"both"}}></div> */}
        <div className="f_2">
        	<p>© 2017 Moksha. All Rights Reserved</p>
        </div>

    </div>
);
}
}
export default Footer;

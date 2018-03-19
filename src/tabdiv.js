 import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Tabdiv extends Component {
  constructor() {
    super();

};
render() {
    return(
  
    <div className="blog">

              <div className="blog_1">
         
           <div className="blog_img"><img src="image/facility_icon.png"/></div>
                     <div className="card_heading">FACILITIES</div>
                <p className="f_text">Lodging, boarding, Laundry, <br />
electricity,  and complete medical facility except(cancer, heart surgery)</p>
                <div className="button_1"><Link to ="/rooms" className="btn-8" >Know More</Link></div>
                
            </div>
            
            <div className="blog_1">
         
                <div className="blog_img"><img src="image/home_icon.png" /></div>
                <div className="card_heading">HOME CHOICE <br/><span style={{fontSize:20,lineHeight:1.5}}> for Single Occupants</span></div>
                <p className="f_text">Rs 4 lakh Deposit and Rs 20,000 per/month </p>
                <div className="button_1">    <Link to ="/rooms" className="btn-8" >Know More</Link></div>
                
            </div>
            
            <div className="blog_1">
         
                <div className="blog_img"><img src="image/star_icon.png" /></div>
                <div className="card_heading">HOME CHOICE<br/><span style={{fontSize:20,lineHeight:1.5}}>for Couples</span></div>
                <p className="f_text">Rs 4 lakh Deposit and Rs 35,000 per/month OR
one time deposit 20 lakh no monthly charges.

    </p>
                <div className="button_1"><Link to ="/rooms" className="btn-8" >Know More</Link></div>
                
            </div>
        
        
        </div>

    

    );
}
}
   export default Tabdiv;
 
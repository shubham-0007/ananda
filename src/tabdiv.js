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
                <div className="button_1"><Link to ="/Services" className="btn-8" >Read More</Link></div>
                
            </div>
            
            <div className="blog_1">
         
                <div className="blog_img"><img src="image/home_icon.png" /></div>
                <div className="card_heading">HOME CHOICES</div>
                <p className="f_text">4 lakh Deposit and twenty thousand per/month. (single occupancy) </p>
                <div className="button_1">    <Link to ="/Admission" className="btn-8" >Read More</Link></div>
                
            </div>
            
            <div className="blog_1">
         
                <div className="blog_img"><img src="image/star_icon.png" /></div>
                <div className="card_heading">HOME CHOICES</div>
                <p className="f_text">4 lakh deposit and 40,000 p/m <br />(for couples)
one time deposit 20 lakh no monthly charges)

    </p>
                <div className="button_1"><Link to ="/Admission" className="btn-8" >Read More</Link></div>
                
            </div>
        
        
        </div>

    

    );
}
}
   export default Tabdiv;
 
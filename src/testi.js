import React, { Component } from 'react';


 class Testi extends Component {
  constructor() {
    super();

};

render() {
    return(

<div className="stesti">
    	<div className="frame">
        	<div className="testi_title">Testimonial</div>
            	<div className="left_testi">
                <p className="testi_t" style={{ "line-height": "30px" }}> लम्बी उम्र हर कोई जीना चाहता है 
परन्तु बूढ़ा कोई नहीं होना चाहता 
क्योकि वृदावस्था एक अक्षम अशक्त एवं लाचार शरीर एवं पूर्ण समाधान  
<p className="testi_ana" style={{"color":"black"}}>
-आनन्दा

</p>

 </p>
                </div>
                <div className="right_testi">
                	<img src="image/testi_img.jpg" style={{"border-radius":"50%","height": "52%"}}/>
                    <h4 style={{"marginTop":"2%","font-family": "serif",
    "color": "#656565",
    "font-size": "15px"}}>Founder,Aananda</h4>
                    <p className="right_testi_t" style={{"marginTop":"2%","font-family": "serif",
    "font-weight": "bold","line-height":"100%"}}>Mr. Vijay Bhrigu</p>
                	
                </div>
   </div>
   <div style={{"clear":"both"}}></div>
    
    </div>
    )
}
}
export default Testi;

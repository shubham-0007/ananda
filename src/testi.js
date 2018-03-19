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
                <p className="testi_t" style={{ "lineHeight": "30px" }}> लम्बी उम्र हर कोई जीना चाहता है 
परन्तु बूढ़ा कोई नहीं होना चाहता 
क्योकि वृदावस्था एक अक्षम अशक्त एवं लाचार शरीर एवं पूर्ण समाधान  
<div className="testi_ana" style={{"color":"black",marginTop:"2%"}}>
-आनन्दा

</div>

 </p>
                </div>
                <div className="right_testi">
                	<img src="image/testi_img.jpg" style={{"borderRadius":"50%","height": "52%"}}/>
                    <h4 style={{"marginTop":"2%","fontFamily": "serif",
    "color": "#656565",
    "fontSize": "15px"}}>Founder,Aananda</h4>
                    <p className="right_testi_t" style={{"marginTop":"2%","fontFamily": "serif",
    "fontWeight": "bold","lineHeight":"100%"}}>Mr. Vijay Bhrigu</p>
                	
                </div>
   </div>
   <div style={{"clear":"both"}}></div>
    
    </div>
    )
}
}
export default Testi;

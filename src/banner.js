import React, { Component } from 'react';
import {Link} from 'react-router-dom';



 class Banner extends Component {
  constructor() {
    super();

};

render() {
    return(
<div>
<div className="banner" >
        <div className="frame">
        
            <div className="b_left">
                <p className="b_title"><span style={{"color":"#e9702b"}}>Aananda</span> A Privileged Home</p>
                <p className="b_s_title" >Smile Is natural phenomena and we maintain it.</p>
            </div>
                <div className="b_right ">
                    
                    <p className="a_title"><span style={{"color":"#e9702b"}}>Aa</span>nanda<br />(A Privileged Home)</p>
                    <p className="t_text">Smile Is natural phenomena and we maintain it.</p><br />
                    <marquee> <p className="w_text">Welcome to Aananda. Have A Nice Day</p> </marquee><br />
                    <p className="p_text">Aananda is a Home for house Senior Citizens who are 
economically well-off and resourceful but due to certain prevailing circumstance they are aloof, fearful and worried about their future.</p>
                    <div className="button"><Link to ="/About" className="btn-bnr" >Read More</Link></div>
                
                </div>
          </div>
            
    </div>
    <div style={{"clear":"both"}}></div>
 
    </div>
);
}
}

export default Banner;

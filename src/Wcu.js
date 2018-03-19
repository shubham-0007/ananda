import React, { Component } from 'react';
import {Link} from 'react-router-dom';


 class Wcu extends Component {
  constructor() {
    super();

};

render() {
	return(
   	 <div className="wcu">
    	<div className="frame">
    		<div className="wcu_title">Why Choose Us</div>
            <div className="left_wcu">
            	<h2 style={{"backgroundColor":"wheat",color:"black"}}>A Home Away from Home</h2>
                    {/* <p className="left_wcu_t">
                        Aananda is a Home for house Senior Citizens who are economically well-off and resourceful but due to certain prevailing circumstance they are aloof,
                        fearful and worried about their future.<br /><br />
                        Hence, Aananda is a "one step promise ahead" 
                        to ensure loving and worthy life. It is one to the meaningful effort for blissful and indigenous. Home with all requisite facilities including medical etc. (e.g. cancer, Bypass Surgeries)
                    </p> */}
                    <div className="left_wcu_t">
                        <ul>
                            <li>500 square yard of personal lawn</li>
                            <li>Gated premises with cc tv camera in common areas.</li>
                            <li>Collaboration with best hospitals to provide medical facilities.</li>
                            <li>Modular Kitchen with expert cooks.</li>
                            <li>Yoga and Vipassana meditation teachers.</li>
                            <li>Small library with daily papers, monthly magazines and books.</li>
                        </ul>
                    </div >
			{/* <div className="button_2"><Link to="Admission" className="btn-new">Read More</Link></div> */}
            </div>
            <div className="right_wcu">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PMoIjXG5nZs" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    </div>
   

          )
}

}   
export default Wcu;

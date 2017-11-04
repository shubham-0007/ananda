import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js'

  class Appeal extends Component {
  constructor() {
    super();

    };

render() {
    return(
          <div>
        <div>

<Header /> 

        </div>
    
     <div className="appeal">

      <div  className = "row">

<div className= "col-md-12" style={{"background": "rgba(255,255,255,.5)", "marginTop": "200px","font-size":"4px"}}>
<h2>Appeal by Ananda </h2>

  <div className="appeal_contnt">

  <p style={{"text-align":"left"}}>Unlike  most old age homes in the country, “Moksha Meditation Welfare Society” is a  100% free old age home. Being a new born organization, we severely lack of  infrastructure. 

As all the needs of our residents depend upon your generous donations, we  request  you to donate with an open heart and lend a helping hand to the deprived senior  citizens. </p>

<table border="10" align="center">
<tr>

<td style={{
    "font-size": "27px"}}>
Name

</td>
<td>
Moksha Meditation Welfare Society

</td>


</tr>
<tr>


<td style={{
    "font-size": "27px"}}>
Bank Name


</td>
<td>
Axis Bank


</td>


</tr>
<tr>


<td style={{
    "font-size": "27px"}}>
IFSC/SWIFT code


</td>
<td>
UTIB0000260     /    AXISINBB240

</td>


</tr>
<tr>


<td style={{
    "font-size": "27px"}}>
Account No.


</td>
<td>
910010047460011

</td>


</tr>
<tr>


<td style={{
    "font-size": "27px"}}>
Branch


</td>
<td>
Red Square Market, Hisar

</td>


</tr>


</table>


 
<p style={{"text-align":"left"}}>
Contributors may transfer their  contribution to Moksha Bank Account directly or they can issue a Cheque /DD drawn in favor of Moksha Meditation  Welfare Society and mail/courier it at:-
 <p style={{"text-align":"center","font-size":"17px","color": "aliceblue"}}>
Moksha Vridh Ashram <br/>
8th Km Milestone Kaimiri Road <br/>
Hisar-125001 <br/>
Haryana <br/>
Ph. 09729061000 <br/> 
</p>
</p> 
<p style={{"text-align":"left"}}>Contributions to Moksha Meditation Welfare Society are exempted U/S 80G of Income Tax Act. </p>

</div>


      </div>
</div>
      


     
  <div style={{"clear":"both"}}></div>
       
    </div>
<Footer />

</div>

    	)
}
}

export default Appeal;
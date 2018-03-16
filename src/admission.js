import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js'


  class Admission extends Component {
  constructor() {
    super();

    };

    
render() {
    return(
    	<div style={{backgroundImage: 'url(../image/banner.jpg)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"}}>
      

<Header /> 


     <div className="admission">

      <div  className = "row">

<div className= "col-md-12" style={{"background": "rgba(255,255,255,.5)", "marginTop": "200px","font-size":"4px","padding-bottom":"5%"}}>
<h2>Rules for living in Aananda </h2>

<h4>
  <ol>
  {/* <li className='admission_li'>
  <span>  
    <img className="img-responsive" src="../image/para.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/>
     </span>In the Moksha  Meditiation Welfare Society, the aim of Aananda is to serve the elderly people with honor in such a manner  that their experience of life could be spread in the young generation and the  society as a whole. For fulfillment of the above goal, the Society has to  search the field of interest of each and every inmate and the knowledge and experience  will be utilized in education like teaching of students, writing of articles   etc. Those inmates who are having interest in different designs such as fine  art, costumes and other items, shall be utilized for the developments of those  fields. For the above activities no any fee will be given to inmates by theSociety.
 </li> */}

 <li className='admission_li' id="process">
  Process of Admission
</li>  
  <li className='admission_li' id="process1">
    <ul style={{marginTop: "-15px"}}>
        <li className='admission_li' style={{marginTop: "10px"}}>
          <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/>
          We would like you to visit the place and check the amenities yourself.
        </li>
        <li className='admission_li' style={{marginTop: "10px"}}>
          <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/>
          Provide affidavit as per Admission Rules and transfer rent to the society account.
        </li>
        <li className='admission_li' style={{marginTop: "10px"}}>
          <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/>
          Enjoy Life ☺
        </li>
    </ul>
</li>
<li className='admission_li' id="process">
 Admission Rules
</li> 
 <li className='admission_li' style={{marginTop: "10px"}}>
  <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/> At the time of  admission, an affidavit duly signed by the notary to the following affect shall  have to be submitted: -
</li>


 <li className='admission_li'>
      <ul>
          <li>Declaration of Age.</li>
          <li>Declaration of permanent address.</li>
          <li>Non - use of drugs,liquor, intoxicants.</li>
          <li>Free from any contagious & serious diseases such as Cancer, Tuberclosis, Mental illness, and HIV Positive etc.</li>
        </ul>
 </li>
 
 <li className='admission_li'><span> 
    <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/> </span>  Each resident needs to keep minimum luggage with them (preferably up to two suitcases).
    </li>
 <li className='admission_li'>
 <span>  
   <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/> </span> Residents must not keep firearms or weapons with him / her inside the Old age home.
    </li>
 <li className='admission_li'><span> 
    <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}}/> </span>Food will be served at fixed hours only in the dining room. Room service will be allowed only for sick residents and to those who cannot walk.
 </li>
 <li className='admission_li'><span>  <img className="img-responsive" src="../image/list_logo.png" width="47px" height="43px" style ={{"marginLeft":"-6%"}} /> </span>It is to be understood that neither resident nor payee enjoys any proprietary or other right(s), title or interest in respect of any room or over any part / portion of the properties of Aananda and the society running the same.
 </li>
 <li className='admission_li'><span>  <img  src="../image/list_logo.png" className="img-responsive" width="47px" height="43px" style ={{"marginLeft":"-6%"}} /> </span>It will be the responsibility of every resident to take care of his / her personal articles and belongings and the Management will not be responsible for the loss of any such article or belonging.
 </li>
 <li className='admission_li'><span>  <img  src="../image/list_logo.png" className="img-responsive" width="47px" height="43px" style ={{"marginLeft":"-6%"}} /> </span>Monthly payment should be paid by 10th of every month. Late fee of Rs 50 per day will be levied in case of delays.
 </li>
 <li className='admission_li'><span>  <img  src="../image/list_logo.png" className="img-responsive" width="47px" height="43px" style ={{"marginLeft":"-6%"}} /> </span>While residents can invite their guests to the facility, we do not have any lodging facility for the guests.
 </li>
 <li className='admission_li' id="note">Note</li>
 <li className='admission_li'><span>  <img  src="../image/list_logo.png" className="img-responsive" width="47px" height="43px" style ={{"marginLeft":"-6%"}} /> </span>We do not take any cash, please pay rent through bank only.
 </li>
 <li className='admission_li' style={{marginTop: "1px"}}><span>  <img  src="../image/list_logo.png" className="img-responsive" width="47px" height="43px" style ={{"marginLeft":"-6%"}} /> </span>Always take a receipt of payments made by you.
 </li>
     </ol>

</h4>


<h3 style={{marginTop:"2%"}}> For any querry regarding Admission in Aananda   </h3>
<div className="Footr_admis">
<div className="call_admis" style={{"marginRight": "27%","marginTop":"3%"}}>
<span ><img src="../image/phone.png" className="img-responsive" width="7%" />  </span>
<span style={{"font-size": "x-large"}}> +91-9466611224,
  </span>
<span style={{"font-size": "x-large"}}>  +91-9729061000 </span>
</div>
<div className="loc_admis" style={{"marginLeft": "4%","marginTop":"3%"}}>
<span > <img src="../image/address.png" className="img-responsive"  width="7%"/>  </span>
<span style={{"font-size": "x-large"}}>  Aananda,	  
8th Km Milestone Kaimiri Road,
Hisar-125001
Haryana
  </span>
</div>
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

export default Admission;
import React, { Component } from 'react';


  class Aboutus extends Component {
  constructor() {
    super();

};

render() {
    return(
      <div className= "aboutpage" >
      <div  className = "row">

<div className= "col-md-12" style={{"background": "rgba(255,255,255,.5)", "marginTop": "200px","font-size":"4px"}}>
<h2> About Us </h2>

       <h4> 
  Ananda is a Home for house Senior Citizens who are economically well-off and resourceful but due to certain prevailing circumstance they are aloof, fearful and worried about their future.
The Working Efforts of The Ananda Could Make Possible Because of the Active Members of the Ananda  which make efforts to Maintain this type of Organisation and this are :-   



       </h4>
</div>

      </div>
         <div className="second_div">
<h2>Our Team </h2>

    <div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
      <img src="../image/client01.jpg" className="img-responsive" style = {{"float":"left", "width": "30%"}} />
  <div className="content_about"> <h2>Vijay Bhrigu</h2>
   <p>   
     He is founder of Moksha Old Age Home and Shaishav Kunj. Both institutions is the need of hour
and society.He is nominated member of District Child Protection Unit, Hisar from 2015 to till date. 
</p>    </div>   </div>
    <div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
     <img src="../image/client002.jpg" className="img-responsive" style = {{"float":"left", "width": "30%"}} />
      <div className="content_about">       <h2>Pankaj Sandhir</h2>
   <p>   
     Mrs. Pankaj
Sandhir is silent worker. She believes in deeds and not in words. She is source of the inspiration of
similar-minded people who want to do something for the welfare and betterment of the society.
</p>
  
    </div>
    </div>
    <div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
      <img src="../image/client03.jpg"className="img-responsive" style = {{"float":"left","width": "30%"}} />
      <div className="content_about">
       <h2>Mukesh Jain  </h2>
   <p>   
     He is associate member of Moksha Old Age Home and Shaishav Kunj. Mukesh Ji  is always busy in doing Social Welfare Works. He  is also a member of other organisation such as associate member In Haryana Goshala ,President of Punyadyo Atishya Shasta, Hansi. </p>
    </div>    </div>
    <div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
      <img src="../image/client4.jpg" className="img-responsive" style = {{"float":"left","width": "30%"}} />
      
      <div className="content_about">
     <h2>Nitin Goel  </h2>
   <p>   
     He is associate member of Moksha Old Age Home and Shaishav Kunj. Mukesh Ji  is always busy in doing Social Welfare Works. He  is also a member of other organisation such as associate member In Haryana Goshala ,President of Punyadyo Atishya Shasta, Hansi. </p>   
    </div>
    </div>
  </div>
</div>
          
     )
      }
        }

        export default Aboutus;
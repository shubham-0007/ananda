import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';
import Roompage from './roompage';
import $ from 'jquery';

  class Aboutus extends Component {
  constructor() {
    super();

};
componentDidMount() {
  window.scrollTo(0, 0);
}
render() {
    return(
        <div className="backg" >
   
   
      <div className= "aboutpage">
      <div  className = "row">

<div className= "col-md-12" style={{"background": "rgba(255,255,255,.5)", "marginTop": "200px","fontSize":"4px"}}>
<h2> About Us </h2>

       <h4 style={{"marginTop":"2%",textAlign:"justify" ,padding:"0px"}}> 
       The aim of Aananda is to maintain the dignity of
        Senior citizens and to help them live their life with honor. 
        We help them work on their interests like teaching, writing, cooking, social service, gardening, etc.
<div style={{padding:"10px 0px"}}>Residents who have interests in arts such as drawing, 
  painting, acting, etc. are aligned with local groups who organize workshops or performances.</div>



       </h4>
</div>

      </div>
         <div className="second_div">
{/* <h2 style={{"width": "100%"}}>Our Motivation </h2>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
  
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src="../image/slide1.jpg" alt="Los Angeles" style={{"width":"100%;"}} />
      </div>

      <div className="item">
        <img src="../image/slide2.jpg" alt="Chicago" style={{"width":"100%;"}} />
      </div>
    
      <div className="item">
        <img src="../image/slide3.jpg" alt="New york" style={{"width":"100%;"}} />
      </div>
            <div className="item">
        <img src="../image/slide4.jpg" alt="Chicago" style={{"width":"100%;"}} />
      </div>
      <div className="item">
        <img src="../image/slide5.jpg" alt="Chicago" style={{"width":"100%;"}} />
      </div>

    </div>

   
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>

     
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
        
    </a>
  </div> */}
<h2 style={{"width": "100%"}}>Our Team </h2>
<div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
     <img src="../image/client0001.JPG" className="img-responsive r"  id="r" />
      <div className="content_about">       <h2>Pankaj Sandhir</h2>
   <p>   
     Mrs. Pankaj
Sandhir is silent worker. She believes in deeds and not in words. She is source of the inspiration of
similar-minded people who want to do something for the welfare and betterment of the society.
</p>
  
    </div>
    </div>
    <div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
      <img src="../image/client01.jpg" className="img-responsive " id="r" />
  <div className="content_about"> <h2>Vijay Bhrigu</h2>
   <p>   
     He is founder of Moksha Old Age Home and Shaishav Kunj. Both institutions is the need of hour
and society. He is nominated member of District Child Protection Unit, Hisar from 2015 to till date. 
</p>    </div>   </div>
    
    <div className="second_div_1" style={{"background": "rgba(255,255,255,.5)", "border": "5px Solid black"}}>
      <img src="../image/client03.jpg"className="img-responsive r"   id="r" />
      <div className="content_about">
       <h2>Mukesh Jain  </h2>
   <p>   
     He is associate member of Moksha Old Age Home and Shaishav Kunj. Mukesh Ji  is always busy in doing Social Welfare Works. He  is also a member of other organisation such as associate member In Haryana Goshala , President of Punyadyo Atishya Shasta, Hansi. </p>
    </div>    </div>
    </div>
  <div style={{"clear":"both"}}></div>
  <div className="bottomBtn">
       <div className="button_1 btn1" ><Link to ="/rooms" className="btn-8" >ROOM FACILITY</Link></div>
       <div className="button_1 btn2" ><Link to ="/admission" className="btn-8" >ADMISSION PROCESS</Link></div>
   </div> 
    </div>
  

    </div>
          
     )
      }
        }

        export default Aboutus;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import $ from 'jquery';
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      contact:'',
      message: '',

    }
this.forgfun = this.forgfun.bind(this);
this.statehdl = this.statehdl.bind(this);

};


 forgfun(e) {
              e.preventDefault();
              
              var opt = {
                 method: "POST",
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(this.state)
             }
                 console.log("OPT >>",opt);
             fetch("http://localhost:8081/sendmail", opt)
                    .then((response) => response.json().then((responseJson) => {//this.props.history.push('/Login'); 
                     console.log("Response from server",responseJson);
                 })
                    )
                    .catch((error)=>console.log("Error in fetch",error))
                    
               };
  statehdl(e) {
             let key = [e.target.name] ;
           this.setState({[key]: e.target.value});
           console.log("Current state-->>",this.state);

   };

componentDidMount() {
   
 
   $('.thanks,.send_me').hide();

  $(' .contact_me').on('click',function(){
    $('.contact').animate({marginTop:'80px'},300);
    $('.top_flap').removeClass('close_sesame');
    $('.contact_form').delay(500).queue(function(){$('.contact_form').addClass('open_form').dequeue();});
    $(this).fadeOut(300);
    $('.send_me').fadeIn(300);
  
  });

  $('.reset,.send_me').on('click',function(){
        $('.contact').delay(800).animate({marginTop:'0px'},300);
    $('.top_flap').delay(800).queue(function(){$(this).addClass('close_sesame').dequeue();});
    $('.contact_form').removeClass('open_form');
    $('.send_me').fadeOut(300);
    $('.contact_me').fadeIn(300);
  });    
  window.scrollTo(0, 0);
    }

render() {
    return(
        
    	<div className="cont_main" > 

        
    			{/* <div>
		<div className = "navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
              <div className="container">
 <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
      <a className="brand" href="">Aananda</a>
     
              <div className="nav-collapse collapse">
        <ul className="nav">
          	<li><Link to='/'>Home</Link></li>
					<li className="active"><Link to='/About'>About Us</Link></li>
					   <li><Link to='/Services'>Services</Link></li>
					<li><a href="#">Media Coverage</a></li>
					<li><Link to='/Admission'>Admission</Link> </li>
					<li><Link to='/Appeal'>Appeal</Link></li>
					<li><Link to='/Contact'>Contact Us</Link></li>
              
        </ul>
      </div>

                </div>
                </div>
                </div>


               <div className="header">
			<div className="logo">
            	<img src="image/ananda-logo.png"/>
            </div>
            <table className="social">
            	<tr>
                	
                    <td className="social_icon"><a href="#"><img src="image/ph_icon.png" /></a></td>
                    <td className="ph_no">9729061000</td>
                    <td className="social_icon"><a href="#"><img src="image/fb_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/twitter_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/google_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/youtube_icon.png" /></a></td>
                    <td className="social_icon"><a href="#"><img src="image/instagram_icon.png" /></a></td>
                    
                </tr>
            </table>
            <div className="menu">
            	<ul>
                	<li><li><Link to='/'>Home</Link></li></li>

					<li><Link to='/About'>About Us</Link></li>
					   <li><Link to='/Services'>Services</Link></li>
					<li><a href="#">Media Coverage</a></li>
					 <li><Link to='/Admission'>Admission</Link> </li>
					 <li><Link to='/Appeal'>Appeal</Link></li>
<li><Link to='/Contact'>Contact Us</Link></li>                </ul>
            </div>
           <div style={{"clear" :"both"}}></div>
	</div>
</div> */}

   
    <div className="formCont">
    <h2>Contact Us</h2>
<div className="form_lft">

<div className="adrs_rt">
<p>Aananda<br/>8th Km Milestone Kaimiri Road<br/> Hisar-125001 <br/>Haryana <br/> Contact No:- +91-9466611224, +91-9729061000</p>
    </div>
</div>
<div className="form_rt">
<form onSubmit={this.forgfun}>

            <section>
             <input type="text" name="name" onChange = {this.statehdl} placeholder="Name"/>
            </section>
            <section>
                <input type="email" name="email" onChange = {this.statehdl} placeholder="Email"/>
            </section>
            <section>
                <input type="text" name="contact" onChange = {this.statehdl} placeholder="Contact Number"/>
            </section>
            <section>
                <textarea style={{height: "61px"}} name="message" onChange = {this.statehdl} placeholder="Please describe your requirement"/>
            </section>
            <section className="sndBtn">
                <input  type="Submit" style={{width:"72%"}} defaultValue="Send"/>
            </section>
</form>
</div>
</div>
       {/* <div className="envelope">
	<div className="contact_form">
		<span className="reset">X</span>
		<form onSubmit= {this.forgfun} name="contact" action="POST" id="say_hi">
                <fieldset>

                  <section className="form_part">
                  <label for="name" id="name_label">Name</label>
                  <input type="text" name="name" id="name" size="30" className="text-input" onChange = {this.statehdl} required/>
                  
                  </section>

				  <section className="form_part">	
                  <label for="email" id="email_label">Email</label>
                  <input type="email" name="email" id="email" size="30" className="text-input" onChange = {this.statehdl} required/>
                  
				  </section>

				  <section className="form_part">	
                  <label for="message" id="message_label">Message</label>
                  <textarea className="message" name="message" id="message" onChange = {this.statehdl} required></textarea>
                 
                  </section>
          <section className="form_part"> 
          
                  <input type="Submit" className="send_me" id="Submit_label" name="Send" Value="Send"  />
                 
                  </section>
                 
              </fieldset>

          </form>
	</div>
	<p className="contact_me">CONTACT</p>
	
	<p className="thanks">THANKS</p>
	<span className="top_flap close_sesame"></span>
	<span className="side_flaps"></span>
	<span className="bottom_flap"></span>

</div> */}
<div style={{backgroundColor: '#d5d0cd'}}>
</div>
</div>
         )

}
}

export default Contact;
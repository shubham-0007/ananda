import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import './App.css';

class RoomPage extends Component{
  render() {
    return (
      <div >

        <Header />
       <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
      
        <div className="carousel-inner">
            <div className="active item"><img src='image/1.jpg' className="fadeshow"/></div>
            <div className="item"><img src='image/2.jpg' className="fadeshow"/></div>
            <div className="item"><img src='image/3.jpg' className="fadeshow"/></div>
            <div className="item"><img src='image/4.jpg' className="fadeshow"/></div>
           
            <a  className="carousel-control left" href="#carousel" data-slide="prev">&lsaquo;</a>
            <a className="carousel-control right" href="#carousel" data-slide="next">&rsaquo;</a>
        </div>
    
        
  </div>
        
        {/*Amenities section */}
        <div className="container">
          <div className="amenities row">
            <h2 className="roomHead">AMENITIES</h2>
            <div className="aMcontainer">
                
                <div className="amenities2 col-md-3">
                  <p><b>Room</b></p>
                  <ul type="disc">
                    <li>Air-conditioned rooms</li>
                    <li>Pillow-topped mattress</li>
                    <li>Almira for luggage (safe for valuables)</li>
                    <li>Laundry service including ironing and washing</li>
                  </ul>
                </div>
                <div className="amenities4   col-md-3">
                <p>   <b>Kitchenette</b></p>
                  <ul type="disc">
                    <li>Personal Microwave</li>
                    <li>Personal Refrigerator</li>
                  </ul>
                </div>
                <div className="amenities1  ">
                  <p><b>Technology</b></p>
                  <ul type="disc">
                    <li>Emergency bells in bathroom and bedroom to call for help.</li>
                    <li>32" LED television.</li>
                    <li>Wide range of national and international news, sports and film channels</li>
                    <li>High speed internet for up to two devices</li>
                    <li>In-house movie selection</li>
                  </ul>
                </div>
                <div className="amenities3 col-md-3">
                  <p><b>Bathroom</b></p>
                  <ul type="disc">
                    <li>English Toilet Seat.</li>
                    <li>Electric Geyser.</li>
                    <li>Shower with hot and <br/>cold water.</li>
                    <li>Wash basin</li>
                    <li>Toiletries</li>
                    <li>Hair dryer</li>
                  </ul>
                </div>       
                
              </div>
          </div>
          <div className="row facilities">
            <h2 className="roomHead">FACILITIES</h2>
            <div className="col-md-12" />
            <ul>
              <li><b>Security –</b> CC TV in common areas</li>
              <li><b>Dining Hall &amp; Kitchen -</b> Modular Clean Kitchen with standard equipments</li>
              <li><b>Green Lawn –</b> 500 yards lawn</li>
              <li><b>Medical Facilities -</b> We have a collaboration with several hospitals to provide best medical facilities:
                <ul> 
                  <li>CMC Hospital</li> 
                  <li>Gobind Nursing Home</li>
                  <li>Eye-Q Hisar</li>
                  <li>Kansal Nursing Home</li>
                  <li>Kaya clinic</li>
                </ul>
              </li><li>Medicines for diseases will be provided by Aananda.</li> 
            </ul>
          </div>
          <div className="row  activities">
            <h2 className="roomHead">ACTIVITIES</h2>
            <div className="col-md-12">
              <ul>
                <li>Yoga classes are given by professional Yoga Teacher.</li>
                <li>Vipassana Meditation by certified acharaya.</li>
                <li>One Religious tour is done every year.</li>
                <li>A small Library for reading is there to read daily newspaper, magazines and books.</li>                                    
              </ul>
            </div>
          </div>
        </div>{/*closed container*/}
        <Footer />
      </div>
    );
  }
}

export default RoomPage;

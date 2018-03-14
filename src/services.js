import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";
import $ from "jquery";
class Services extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    $(window).bind("load", function() {
      $(".work-in-progress").fadeOut(100);
    });
  }

  render() {
    return (
      <div className="meservice">
        <div className="work-in-progress">
          <div className="work-spinner" />
        </div>
        <div>
          <Header />
        </div>

        <div className="services">
          <div className="row">
            <div
              className="col-md-12"
              style={{
                background: "rgba(255,255,255,.5)",
                marginTop: "200px",
                "font-size": "4px"
              }}
            >
              <h2> Our Services </h2>

              <h4>
                Aananda is a Home for house Senior Citizens who are economically
                well-off and resourceful but due to certain prevailing
                circumstance they are aloof, fearful and worried about their
                future. Aananda provides diffrent types of services from
                Hospatility to the Food all in the very low Cost which never
                feels the Senior Citizens that they away from their home Our
                Fiffrent Services are as Follows:-
              </h4>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-12"
              style={{
                background: "rgba(255,255,255,.5)",
                marginTop: "30px",
                "font-size": "4px"
              }}
            >
              <h3>LODGING</h3>

              <h4>
                Aananda provides the Facility of LODGING to the Senior Citizen.
              </h4>
              <div className="Lodg">
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_3.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_6.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_5.jpg"
                    width="80%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{
                background: "rgba(255,255,255,.5)",
                marginTop: "30px",
                "font-size": "4px"
              }}
            >
              <h3> BOARDING</h3>

              <h4>
                Aananda provides the Facility of BOARDING to the Senior Citizen.
              </h4>
              <div className="Lodg">
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_7.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_10.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_4.jpg"
                    width="70%"
                    height="10%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{
                background: "rgba(255,255,255,.5)",
                marginTop: "30px",
                "font-size": "4px"
              }}
            >
              <h3>ELECTRICITY</h3>

              <h4>
                Aananda provides the Facility of ELECTRICITY to the Senior
                Citizen.
              </h4>
              <div className="Lodg">
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_elect_1.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_elect_2.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_elect_3.jpg"
                    width="70%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{
                background: "rgba(255,255,255,.5)",
                marginTop: "30px",
                "font-size": "4px"
              }}
            >
              <h3>LAUNDARY</h3>

              <h4>
                Aananda provides the Facility of LAUNDARY to the Senior Citizen.
              </h4>
              <div className="Lodg">
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserve_laundary_3.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserve_laundry_1.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_laundary_2.jpg"
                    width="70%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{
                background: "rgba(255,255,255,.5)",
                marginTop: "30px",
                "font-size": "4px"
              }}
            >
              <h3>COMPLETE MEDICAL FACILITY EXCEPT(CANCER, HEART SURGERY)</h3>

              <h4>
                Aananda provides the COMPLETE MEDICAL FACILITY EXCEPT(CANCER,
                HEART SURGERY) to the Senior Citizen and also Aananda is the
                FIRST REHABILATION HOUSE FOR SENIOR CITIZEN IN INDIA who
                provides this type of Service. Its the Proud Movement for the
                Aananda.
              </h4>
              <div className="Lodg">
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/picserv_11.jpg"
                    width="70%"
                  />
                </div>
                <div className="Lodg_1">
                  <img
                    className="img-responsive"
                    src="../image/pichealth.jpg"
                    width="70%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ clear: "both" }} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;

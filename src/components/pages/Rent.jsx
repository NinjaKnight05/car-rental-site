import React from "react";
import { Link } from "react-router-dom";

export function Rent() {
   return (
      <div className="main">
         <div className="main-picr">
            <h1 className="about_taitalr">Cost of Car<span style={{ color: "red" }}> Rentals🚥</span></h1>
         </div>
         <>
            <div className="container">
               <div className="Rent-page">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="part2">
                              <div className="container site-section mb-5">
                                 <div className="row justify-content-center text-center">
                                    <div className="col-7 text-center mb-5">
                                       <span> <h1 className="form-headline">How it works</h1> </span>
                                       <p className="textul">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                                          assumenda, dolorum necessitatibus eius earum voluptates sed!
                                       </p>
                                    </div>
                                 </div>
                                 <div className="how-it-works d-flex">
                                    <div className="step">
                                       <span className="number">
                                          <span>01</span>
                                       </span>
                                       <span className="caption">Time &amp; Place</span>
                                    </div>
                                    <div className="step">
                                       <span className="number">
                                          <span>02</span>
                                       </span>
                                       <span className="caption">Car</span>
                                    </div>
                                    <div className="step">
                                       <span className="number">
                                          <span>03</span>
                                       </span>
                                       <span className="caption">Details</span>
                                    </div>
                                    <div className="step">
                                       <span className="number">
                                          <span>04</span>
                                       </span>
                                       <span className="caption">Checkout</span>
                                    </div>
                                    <div className="step">
                                       <span className="number">
                                          <span>05</span>
                                       </span>
                                       <span className="caption">Done</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>


                  <div className="header-part3">
                     <div className="row">
                        <div className="col-md-12">
                           <span> <h1 className="form-headline1">Fill Form</h1></span>
                        </div>
                     </div>
                     <div className="form-start">
                        <div className="container">
                           <div className="row">
                              {/* <div className="col-md-3">
                              </div> */}
                              <div className="col-md-12">
                                 <div className="rent-header1">
                                    <form>
                                       <label className="form-label">First name</label>
                                       <input type="text" placeholder="Fname" className="details-area" />

                                       <label className="form-label">Last name</label>
                                       <input type="text" placeholder="Lname" className="details-area" />

                                       <label className="form-label">email</label>
                                       <input type="email" placeholder="..@gmail.com" className="details-area" />

                                       <label className="form-label">Contact</label>
                                       <input type="number" placeholder="+91" className="details-area" />
                                       <label className="form-label">Address</label>
                                       <textarea
                                          className="massage-bt"
                                          placeholder="Address"
                                          rows={2}
                                          id="comment"
                                          name="message"
                                       />

                                       <div className="read_bt2">
                                          <a href="#">Rent Now</a>
                                       </div>

                                    </form>
                                 </div>
                              </div>
                              {/* <div className="col-md-4"></div> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      </div>
   )
}
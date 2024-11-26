import { Link } from "react-router-dom";

import React from "react";
export default function About() {
   return (
      <div className="main">
         { /* about section start */}
         <div className="about_section layout_padding">
            <div className="container">
               <div className="about_section_2">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="about_taital_box">
                           <h1 className="about_taital">About <span style={{ color: "grey" }}>Us🧑‍🏭</span></h1>
                           <p className="about_text">Welcome to LuxRyRides! We offer an exceptional luxury car rental experience with a premium fleet of high-end vehicles.
                              Whether for special events, business trips, or a taste of luxury, we have the perfect car for you.
                              Our commitment to excellence ensures seamless service, comfort, and style. Explore our personalized rentals, chauffeur services, and more.

                              Thank you for choosing LuxRyRides – where luxury meets convenience. Enjoy your journey with us!</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="image_iman"><img src="/assets/images/R.png" className="about_img" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         { /* about section end */}
         <div className="about_section layout_padding">
            <div className="container">
               <div className="about_section_3">
                  <div className="row">
                     <div className="col-md-5">
                        <div className="image_iman"><img src="/assets/images/bbrrom.jpg" className="about_img" /></div>
                     </div>
                     <div className="col-md-7">
                        <div className="about_taital_box">
                           <h1 className="about_taital1">
                              <span style={{ color: "grey" }}>Our </span> <span style={{ color: "black" }}>Mission</span></h1>
                           <p className="about_text1">
                           Our mission is to provide the best luxury car rentals and services solutions. We combine our own knowledge and experience with a large array of custom made luxury cars. We aim to deliver a matchless service that meets and exceeds the customer’s expectations, and we are not satisfied unless the customer is satisfied. We offer to all our clients a free delivery/pick-up service, meaning that we will meet you and bring the car to your home or hotel, or any other scheduled place of your choice..</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="about_section layout_padding">
            <div className="container">
               <div className="about_section_3">
                  <div className="row">
                     <div className="col-md-7">
                        <div className="about_taital_box">
                           <h1 className="about_taital2">
                              <span style={{ color: "grey" }}>How </span> <span style={{ color: "black" }}>IT Works🧑‍🔧</span>
                          </h1>
                           <p className="about_text1">
                           Now you can pick and schedule your rental right here on the website. We will contact you right after we receive your reservation request to square out the details. No online payment is needed when you reserve online, and you have the option to create your online account to speed up your reservation process in the future.</p>
                        </div>
                     </div>
                     <div className="col-md-5">
                        <div className="image_iman"><img src="/assets/images/oldbaby.png" className="about_img" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="about_section layout_padding">
            <div className="container">
               <div className="about_section_3">
                  <div className="row">
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-8">
                  <h1 className="about_taital3">
                  <span style={{ color: "black" }}>Map </span> <span style={{ color: "#416E96" }} >Location</span></h1>
                  </div>
                     <div className="col-md-12">
                        <div className="map">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.42906014452!2d75.49084559446622!3d31.322371325976523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1732023402073!5m2!1sen!2sin" width="100%" height="500"  allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

import React from 'react';
import { Link } from "react-router-dom";

const testimonialsData = [
  {
    id: 1,
    text: "This was the most friendly, quick, and efficient experience that I have ever experienced! I will definitely be using your services again.",
    rating: "5.0",
    name: "Adam Jordan",
    date: "September 05, 2024",
  },
  {
    id: 2,
    text: "My rental was upgraded with no extra charge, they had a shuttle running around the clock with helpful staff and checking out was quick and painless. The car was clean, fully fueled, stocked with water bottles, and a guide to LA, so no extra stops were needed.",
    rating: "4.5",
    name: "Jerome Bell",
    date: "July 16, 2023",
  },
  {
    id: 3,
    text: "Cras elit purus, aliquet ac auctor in, semper at odio. Ut semper justo ultricies, pulvinar dolor eu.",
    rating: "5.0",
    name: "Courtney Johnson",
    date: "December 12, 2024",
  },
  {
    id: 4,
    text: "Cras tristique semper convallis. Cras efficitur sagittis erat. Faucibus pellentesque ligula vitae luctus facilisis fringilla.",
    rating: "5.0",
    name: "Emma Wilson",
    date: "June 15, 2023",
  },
  {
    id: 5,
    text: "I am with the LuxRyRides Services",
    rating: "4.9",
    name: "Robert",
    date: "August 28, 2024"
  }
];

export default function Client() {
  return (
    < div className="main">
            <div className="main-pic">
              <h1 className="about_taitalc">🕸️What Customers<span style={{ color: "grey" }}> Say🕸️</span></h1>
            </div>
            <div className="about_section layout_padding">
              <div className="container">
                <div className="about_section_2">
                  <div className="row">
                    <div className="about_taital_box">
                      <div className="col-md-12">
                      </div>

                      <div className="testimonials-list">
                        {testimonialsData.map((testimonial) => (
                          <div key={testimonial.id} className="testimonial-card">
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-info">
                              <h4>{testimonial.name}</h4>
                              <p>{testimonial.date}</p>
                            </div>
                            <div className="testimonial-rating">
                              <div className="image-boxes">
                                <img src="/assets/images/customer12.png" className="about_img1" />
                              </div>
                              <p>⭐⭐⭐{testimonial.rating}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <div className="row">
                  <div className="col-md-6">
                    <p className="about_text2">Welcome to LuxRyRides! We offer an exceptional luxury car rental experience with a premium fleet of high-end vehicles.
                    ence. Enjoy your journey with us!</p>
                    <div className="small-box">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="profile-box">
                            <div className="profile-box-pic">
                           <span> <img src="/assets/images/client-img2.png" className="about-img1" />gfdhgdhdfhd</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p className="about_text2">Welcome to LuxRyRides! We offer an exceptional luxury car rental experience with a premium fleet of high-end vehicles.
                      Whether for special events, business trips, or a taste of luxury, we have the perfect car for you.
                      Thank you for choosing LuxRyRides – where luxury meets convenience. Enjoy your journey with us!</p>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

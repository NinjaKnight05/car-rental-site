import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    date: "August 28, 2024",
  },
];

export default function Client() {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    text: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (!newFeedback.name || !newFeedback.text || !newFeedback.rating) {
      toast.error("Please fill out all fields!");
      return;
    }

    const newTestimonial = {
      id: testimonials.length + 1,
      text: newFeedback.text,
      rating: newFeedback.rating,
      name: newFeedback.name,
      date: new Date().toLocaleDateString(),
    };

    setTestimonials([...testimonials, newTestimonial]);
    setNewFeedback({ name: "", text: "", rating: "" });

    toast.success("Feedback submitted successfully!");
  };

  return (
    <div className="main">
      <ToastContainer />
      <div className="main-pic">
        <h1 className="about_taitalc">
          🕸️What Customers<span style={{ color: "grey" }}> Say🕸️</span>
        </h1>
      </div>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_2">
            <div className="row">
              <div className="about_taital_box">
                <div className="col-md-12"></div>

                <div className="testimonials-list">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <div className="testimonial-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.date}</p>
                      </div>
                      <div className="testimonial-rating">
                        <div className="image-boxes">
                          <img
                            src="/assets/images/customer12.png"
                            className="about_img1"
                          />
                        </div>
                        <p>⭐⭐⭐{testimonial.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feedback Form */}
                <div className="feedback-form">
                  <h2 className="feedback-heading">Submit Your Feedback</h2>
                  <form onSubmit={handleFeedbackSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={newFeedback.name}
                      onChange={handleInputChange}
                      className="feedback-input"
                    />
                    <textarea
                      name="text"
                      placeholder="Your Feedback"
                      value={newFeedback.text}
                      onChange={handleInputChange}
                      className="feedback-input"
                    />
                    <input
                      type="number"
                      name="rating"
                      placeholder="Rating (1-5)"
                      value={newFeedback.rating}
                      onChange={handleInputChange}
                      className="feedback-input"
                      min="1"
                      max="5"
                    />
                    <button type="submit" className="feedback-submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

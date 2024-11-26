import React from "react";
import { Link } from "react-router-dom";

const faqData = [
    {
      question: "Can I rent a car at 18?",
      answer:
        "Cras tristique semper convallis. Cras efficitur sagittis erat. Fusce pellentesque ligula vitae tellus facilisis fringilla. Pellentesque sit amet massa at diam tempus faucibus. Nunc eleifend, ipsum nec maximus vehicula.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept all major credit cards, including Visa, MasterCard, and American Express. Unfortunately, we do not accept cash payments for online bookings.",
    },
    {
      question: "How do I cancel my reservation?",
      answer:
        "To cancel your reservation, please visit your account dashboard or contact our support team. Cancellations made within 24 hours of the booking will incur no charge.",
    },
  ];
  

export function Price() {
    return (
        <div className="main">
            <div className="main-picp">
                <h1 className="about_taitalp">Cost of Car<span style={{ color: "grey" }}> Rentals🚥</span></h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headline">
                            <h2 className="gallery_taital"> Cost by Hourly</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cost-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="cost-box-slot">
                                <div className="price-header">
                                    <h2 className="car-time">4 Hours</h2>
                                    <div className="cost-car-price">
                                        <h1 className="size-word"><span>12k</span></h1>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="price-body">
                                    <ul className="all-list">
                                        <li>● Sedans & hatchbacks</li>
                                        <li>● Unlimited mileage</li>
                                        <li>● Basic insurance</li>
                                        <li>● Free cancellation</li>
                                    </ul>
                                </div>
                                <div className="read_bt1">
                                    <a href="#">Rent a Car</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="cost-box-slot">
                                <div className="price-header">
                                    <h2 className="car-time">1 Day</h2>
                                    <div className="cost-car-price">
                                        <h1 className="size-word"><span>20k</span></h1>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="price-body">
                                    <ul className="all-list">
                                        <li>● Coupes and universals </li>
                                        <li>● Protection against injuriese</li>
                                        <li>● GPS</li>
                                        <li>● Additional driver</li>
                                    </ul>
                                </div>
                                <div className="read_bt1">
                                    <a href="#">Rent a Car</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="cost-box-slot">
                                <div className="price-header">
                                    <h2 className="car-time">1 Weak</h2>
                                    <div className="cost-car-price">
                                        <h1 className="size-word"><span>78k</span></h1>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="price-body">
                                    <ul className="all-list">
                                        <li>● Minivans & pickups </li>
                                        <li>● Child seat</li>
                                        <li>● Snow chains</li>
                                        <li>● Smart cover protection</li>
                                    </ul>
                                </div>
                                <div className="read_bt1">
                                    <a href="#">Rent a Car</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="cost-box-slot">
                                <div className="price-header">
                                    <h2 className="car-time">1 Month</h2>
                                    <div className="cost-car-price">
                                        <h1 className="size-word"><span>220k</span></h1>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="price-body">
                                    <ul className="all-list">
                                        <li>● oadsters & sport cars </li>
                                        <li>● Total protection</li>
                                        <li>● Car pooling up to 5 drivers</li>
                                        <li>● Animal care</li>
                                    </ul>
                                </div>
                                <div className="read_bt1">
                                    <a href="#">Rent a Car</a>
                                </div>
                            </div>
                        </div>

                        <div className="faq-container">
                            <h1 className="faq-title">Frequently Asked Questions</h1>
                            <div className="faq-list">
                                {faqData.map((item, index) => (
                                    <div key={index} className="faq-item">
                                        <h2 className="faq-question">{item.question}</h2>
                                        <p className="faq-answer">{item.answer}</p>
                                        <hr className="faq-divider" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
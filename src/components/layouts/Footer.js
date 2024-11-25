import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_logo">
                                <img src="/assets/images/lrlogo.png" alt="LuxRyRides Logo" width="150px" />
                            </div>
                            <p className="footer_text">
                                Discover luxury car rentals for every occasion with LuxRyRides. Stay updated with our latest offers.
                            </p>
                            {/* <div className="form-group">
                                <input
                                    type="email"
                                    className="update_mail"
                                    placeholder="Enter Your Email"
                                />
                                <div className="subscribe_bt">
                                    <Link to="#">Subscribe</Link>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer_title">About Us</h4>
                            <p className="footer_info">
                                LuxRyRides is your premier destination for luxury car rentals, offering top-notch service and a fleet of elite vehicles.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer_title">Our Services</h4>
                            <ul className="footer_links">
                                <li><Link to="#">Exotic Car Rentals</Link></li>
                                <li><Link to="#">Safety and Security</Link></li>
                                <li><Link to="#">Online Booking</Link></li>
                                <li><Link to="#">Best Drivers</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer_title">Contact Us</h4>
                            <div className="footer_contact">
                                <div className="contact_item">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    <span className="contact_text"> Luxury Drive,Jalandhar</span>
                                </div>
                                <div className="contact_item">
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <span className="contact_text">+91 9876543210</span>
                                </div>
                                <div className="contact_item">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span className="contact_text">info@luxryrides.com</span>
                                </div>
                            </div>
                            {/* <div className="social_icons">
                                <ul>
                                    <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="copyright_text">
                                &copy; 2024 All Rights Reserved. Design by <Link to="#">Anurag Thakur</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

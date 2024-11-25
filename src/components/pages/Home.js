import { Link } from "react-router-dom";
import video2 from "../../Movie/video2.mp4";
import Swal from "sweetalert2";
// import { namedQuery } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "56656b51-a4c2-4af2-a630-58129fb0edf6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // toast.success('messsagesent')
      Swal.fire({
        title: "Sucess",
        text: "Message Sent ScuessFully 😁!",
        icon: "success"
      })
    } 
  };

  return (
    <div className="main">
      <>
        <video src={video2} autoPlay loop muted className="video" />
        <div className="banner_taital_main">
          {/* <h1 className="banner_taital">LuxRyRides</h1> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                id="banner_slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active"></div>
                </div>
              </div>
              <Link
                className="carousel-control-prev"
                to="#banner_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </Link>
              <Link
                className="carousel-control-next"
                to="#banner_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* banner section end */}
        {/* about section start */}
        <div className="about_section layout_padding" data-aos="zoom-in">
          <div className="container">
            <div className="about_section_2">
              <div className="row">
                <div className="col-md-6">
                  <div className="image_iman" data-aos="slide-right">
                    <img src="/assets/images/BMW.png" className="about_img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_taital_box">
                    <h1 className="about_taital">
                      About <span style={{ color: "#416E96" }}>Us</span>
                    </h1>
                    <p className="about_text">
                      Welcome to LuxRyRides! We offer an exceptional luxury car
                      rental experience with a premium fleet of high-end
                      vehicles. Whether for special events, business trips, or a
                      taste of luxury, we have the perfect car for you. Our
                      commitment to excellence ensures seamless service,
                      comfort, and style. Explore our personalized rentals,
                      chauffeur services, and more. Thank you for choosing
                      LuxRyRides – where luxury meets convenience. Enjoy your
                      journey with us!
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about section end */}

        {/* gallery section start */}
        <div className="gallery_section layout_padding" >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="gallery_taital">Our best offers☠️</h1>
              </div>
            </div>
            <div className="gallery_section_2">
              <div className="row">
                <div className="col-md-4" data-aos="zoom-in">
                  <div className="gallery_box">
                    <div className="gallery_img" >
                      <img src="/assets/images/bugatti.png" />
                    </div >
                    <h3 className="types_text">Bugatti</h3>
                    <p className="looking_text">Start per day &#8377;30,000</p>
                    <div className="read_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                  <div className="gallery_box">
                    <div className="gallery_img">
                      <img src="/assets/images/mercedes.png" />
                    </div>
                    <h3 className="types_text">Mercedes</h3>
                    <p className="looking_text">Start per day &#8377;28,000</p>
                    <div className="read_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                  <div className="gallery_box">
                    <div className="gallery_img">
                      <img src="/assets/images/rollsroyce.png" />
                    </div>
                    <h3 className="types_text">Rolls-Royce</h3>
                    <p className="looking_text">Start per day &#8377;45,000</p>
                    <div className="read_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery_section_2" >
              <div className="row">
                <div className="col-md-4" data-aos="zoom-in">
                  <div className="gallery_box">
                    <div className="gallery_img">
                      <img src="/assets/images/audi.png" />
                    </div>
                    <h3 className="types_text">Audi</h3>
                    <p className="looking_text">Start per day &#8377;35,000</p>
                    <div className="read_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                  <div className="gallery_box">
                    <div className="gallery_img">
                      <img src="/assets/images/beamer.png" />
                    </div>
                    <h3 className="types_text">Bmw</h3>
                    <p className="looking_text">Start per day &#8377;25,000</p>
                    <div className="read_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                  <div className="gallery_box">
                    <div className="gallery_img">
                      <img src="/assets/images/rangerover.png" />
                    </div>
                    <h3 className="types_text">Range rover</h3>
                    <p className="looking_text">Start per day &#8377;35,000</p>
                    <div className="read_bt">
                      <a href="#">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* gallery section end */}
        {/* choose section start */}
        <div className="choose_section layout_padding" >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="choose_taital">WHY CHOOSE US</h1>
              </div>
            </div>
            <div className="choose_section_2">
              <div className="row">
                <div className="col-sm-4">
                  <div className="icon_1">
                    <img src="/assets/images/icon-1.png" />
                  </div>
                  <h4 className="safety_text">SAFETY &amp; SECURITY</h4>
                  <p className="ipsum_text" data-aos="slide-left">
                    At LuxRyRides, your safety and security are our top
                    priorities. We ensure that all our luxury vehicles are
                    regularly inspected and maintained to the highest standards.
                    Our cars are equipped with the latest safety features,
                    providing you with peace of mind on the road. Additionally,
                    our secure booking system protects your personal
                    information, ensuring a safe and seamless rental experience.
                  </p>
                </div>
                <div className="col-sm-4">
                  <div className="icon_1">
                    <img src="/assets/images/icon-2.png" />
                  </div>
                  <h4 className="safety_text">Online Booking</h4>
                  <p className="ipsum_text" data-aos="zoom-in">
                    Experience the convenience of renting a luxury car with just
                    a few clicks. Our user-friendly online booking system allows
                    you to browse our premium fleet, select your preferred
                    vehicle, and complete your reservation in minutes. Whether
                    you're planning ahead or need a last-minute rental, our 24/7
                    online service makes it easy to find the perfect car
                    whenever you need it.
                  </p>
                </div>
                <div className="col-sm-4">
                  <div className="icon_1">
                    <img src="/assets/images/icon-3.png" />
                  </div>
                  <h4 className="safety_text">Best Drivers</h4>
                  <p className="ipsum_text" data-aos="slide-right">
                    Our professional drivers are committed to delivering a
                    first-class service. Carefully selected for their
                    experience, expertise, and dedication to customer
                    satisfaction, our drivers ensure a smooth and comfortable
                    ride. Whether you need a chauffeur for a special event or a
                    business trip, you can trust our drivers to provide a safe
                    and luxurious journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* choose section end */}
        {/* client section start */}
        <div className="client_section layout_padding">
          <div className="container">
            <div
              id="custom_slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="client_taital">Brands Availaible</h1>
                    </div>
                  </div>
                  <div className="client_section_2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img">
                          <img src="/assets/images/logorr.png" />
                          </div>
                          {/* <h3 className="moark_text">John D.</h3>
                          <p className="client_text">
                            ⭐⭐⭐⭐⭐
                            <br />A seamless booking process and top-notch
                            customer service. The car was pristine and made my
                            trip memorable. Highly recommended!"
                          </p> */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img">
                            <img src="/assets/images/logol.png" />
                          </div>
                          {/* <h3 className="moark_text">Sarah</h3>
                          <p className="client_text">
                            ⭐⭐⭐⭐
                            <br />
                            Outstanding experience! Easy online booking and
                            prompt responses. The car was comfortable and
                            stylish. Will use again!"
                          </p> */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img">
                            <img src="/assets/images/logok.png" />
                          </div>
                          {/* <h3 className="moark_text">Sarah</h3>
                          <p className="client_text">
                            ⭐⭐⭐⭐
                            <br />
                            Outstanding experience! Easy online booking and
                            prompt responses. The car was comfortable and
                            stylish. Will use again!"
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12">
                    <h1 className="client_taital">Brands Availaible</h1>
                    </div>
                  </div>
                  <div className="client_section_2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img1">
                            <img src="/assets/images/logom.png" />
                          </div>
                          {/* <h3 className="moark_text">Priya K.</h3>
                          <p className="client_text">
                            
                            <br />
                            Exceeded expectations with friendly service and a
                            luxurious car. Delivery to my doorstep was
                            incredibly convenient. Felt like a VIP!
                          </p> */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img1">
                            <img src="/assets/images/logof.png" />
                          </div>
                          {/* <h3 className="moark_text">Vikram</h3>
                          <p className="client_text">
                            ⭐⭐⭐⭐⭐
                            <br />
                            The entire process was seamless and the car was in
                            perfect condition. Truly a luxurious experience.
                            Will rent again!
                          </p> */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img1">
                            <img src="/assets/images/dodge_PNG53.png" />
                          </div>
                          {/* <h3 className="moark_text">Vikram</h3>
                          <p className="client_text">
                            ⭐⭐⭐⭐⭐
                            <br />
                            The entire process was seamless and the car was in
                            perfect condition. Truly a luxurious experience.
                            Will rent again!
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12">
                       <h1 className="client_taital">Brands Availaible</h1>
                    </div>
                  </div>
                  <div className="client_section_2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img">
                          <img src="/assets/images/bugati.png" />
                          </div>
                          {/* <h3 className="moark_text">Riya-</h3>
                          <p className="client_text">
                            ⭐⭐⭐⭐⭐
                            <br />
                            Fantastic service and immaculate car. The team was
                            very accommodating. Highly recommend for premium car
                            rentals!
                          </p> */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img">
                          <img src="/assets/images/logop.png" />
                          </div>
                          {/* <h3 className="moark_text">Rohan</h3> */}
                          {/* <p className="client_text">
                            ⭐⭐⭐⭐⭐
                            <br />
                            Luxury Rides provided exceptional service and a
                            fantastic vehicle. Definitely my go-to for car
                            rentals now
                          </p> */}
                        </div>
                      </div>
                       
                      <div className="col-md-4">
                        <div className="client_taital_box">
                          <div className="client_img">
                          <img src="/assets/images/mercilogo.png" />
                          </div>
                          {/* <h3 className="moark_text">Rohan</h3> */}
                          {/* <p className="client_text">
                            ⭐⭐⭐⭐⭐
                            <br />
                            Luxury Rides provided exceptional service and a
                            fantastic vehicle. Definitely my go-to for car
                            rentals now
                          </p> */}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#custom_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#custom_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* client section end */}
        {/* contact section start */}
        <div className="contact_section layout_padding" >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="contact_taital">Get In Touch</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-12">
                  <div className="mail_section_1">
                    <form onSubmit={onSubmit}>
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Name"
                      name="name"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Email"
                      name="email"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Phone Number"
                      name="Phone Number"
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Massage"
                      rows={5}
                      id="comment"
                      name="message"
                    />
                    <div className="send_bt">
                      <button type="submit">Send</button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

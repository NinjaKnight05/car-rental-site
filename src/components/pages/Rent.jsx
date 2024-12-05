import React, { useState } from "react";
// import Swal from "sweetalert2";  // Make sure to import Swal
import { useNavigate } from "react-router-dom";

const Rent = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address: "",
      rent_start_date: "",
      rent_end_date: "",
      carname: "",
   });

   const navigate = useNavigate();

   // Handle form input change
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const onSubmit = async (event) => {
      event.preventDefault();

      const { firstName, lastName, email, contact, address, rent_start_date, rent_end_date, carname } = formData;

      // You can add more validations here if needed
      // if (!firstName || !lastName || !email || !contact || !address || !rent_start_date || !rent_end_date || !carname) {
      //    Swal.fire({
      //       title: "Error",
      //       text: "All fields are required!",
      //       icon: "error",
      //    });
      //    return;
      // }

      // Store the booking in localStorage
      const newBooking = {
         firstName,
         lastName,
         email,
         contact,
         address,
         rent_start_date,
         rent_end_date,
         carname,
      };

      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      storedBookings.push(newBooking);
      localStorage.setItem("bookings", JSON.stringify(storedBookings));

      // Reset form data after successful submission
      setFormData({
         firstName: "",
         lastName: "",
         email: "",
         contact: "",
         address: "",
         rent_start_date: "",
         rent_end_date: "",
         carname: "",
      });

      // Display success message
      // Swal.fire({
      //    title: "Success",
      //    text: "Your Car Has Been Booked 😁!",
      //    icon: "success",
      // });

      // Redirect to ViewBooking page
      navigate("/admin/viewbooking");
   };

   return (
      <div className="main">
         <div className="main-picr">
            <h1 className="about_taitalr">
               Cost of Car <span style={{ color: "red" }}>Rentals🚥</span>
            </h1>
         </div>
         <div className="container">
            <div className="Rent-page">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="part2">
                           <div className="container site-section mb-5">
                              <div className="row justify-content-center text-center">
                                 <div className="col-7 text-center mb-5">
                                    <span>
                                       <h1 className="form-headline">How it works</h1>
                                    </span>
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
                        <span>
                           <h1 className="form-headline1">Fill Form</h1>
                        </span>
                     </div>
                  </div>
                  <div className="form-start">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="rent-header1">
                                 <form onSubmit={onSubmit}>
                                    <label className="form-label">First name</label>
                                    <input
                                       type="text"
                                       placeholder="Fname"
                                       className="details-area"
                                       name="firstName"
                                       value={formData.firstName}
                                       onChange={handleInputChange}
                                    />

                                    <label className="form-label">Last name</label>
                                    <input
                                       type="text"
                                       placeholder="Lname"
                                       className="details-area"
                                       name="lastName"
                                       value={formData.lastName}
                                       onChange={handleInputChange}
                                    />

                                    <label className="form-label">Email</label>
                                    <input
                                       type="email"
                                       placeholder="..@gmail.com"
                                       className="details-area"
                                       name="email"
                                       value={formData.email}
                                       onChange={handleInputChange}
                                    />

                                    <label className="form-label">Contact</label>
                                    <input
                                       type="number"
                                       placeholder="+91"
                                       className="details-area"
                                       name="contact"
                                       value={formData.contact}
                                       onChange={handleInputChange}
                                    />

                                    <label className="form-label">Start Date</label>
                                    <input
                                       type="date"
                                       className="mail_text"
                                       placeholder="Rent Start Date"
                                       name="rent_start_date"
                                       value={formData.rent_start_date}
                                       onChange={handleInputChange}
                                    />

                                    <label className="form-label">End Date</label>
                                    <input
                                       type="date"
                                       className="mail_text"
                                       placeholder="Rent End Date"
                                       name="rent_end_date"
                                       value={formData.rent_end_date}
                                       onChange={handleInputChange}
                                    />

                                    <label className="form-label">Select Brand</label>
                                    <select
                                       className="mail_text"
                                       name="carname"
                                       value={formData.carname}
                                       onChange={handleInputChange}
                                    >
                                       <option value="bugatti">Bugatti</option>
                                       <option value="mercedes">Mercedes</option>
                                       <option value="rollsroyce">Rolls-Royce</option>
                                       <option value="audi">Audi</option>
                                       <option value="bmw">BMW</option>
                                       <option value="rangerover">Range Rover</option>
                                       <option value="ford">Ford</option>
                                       <option value="koenigseggg">Koenigsegg</option>
                                       <option value="lexus">Lexus</option>
                                       <option value="porsche">Porsche</option>
                                       <option value="dodge">Dodge</option>
                                       <option value="Lamborghini">Lamborghini</option>
                                       <option value="tesla">Tesla</option>
                                       <option value="ferrari">Ferrari</option>
                                    </select>

                                    <label className="form-label">Address</label>
                                    <textarea
                                       className="massage-bt"
                                       placeholder="Address"
                                       rows={2}
                                       name="address"
                                       value={formData.address}
                                       onChange={handleInputChange}
                                    />

                                    <button type="submit" className="site-btn">
                                       Rent Now
                                    </button>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Rent;

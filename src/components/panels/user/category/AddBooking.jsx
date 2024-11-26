import React, { useState } from 'react';
// import { db } from '../../../../Firebase';
// import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddBooking = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [carName, setCarName] = useState('');
  const [price, setPrice] = useState('');
  const [brandName, setBrandName] = useState('');
  const [dateOfBooking, setDateOfBooking] = useState('');

  const handleAddBooking = async (e) => {
    e.preventDefault();
    // try {
    //   await addDoc(collection(db, 'bookings'), {
    //     userName,
    //     userEmail,
    //     carName,
    //     price,
    //     brandName,
    //     dateOfBooking,
    //     status: 'booked',
    //     createdAt: new Date(),
    //   });
    //   setUserName('');
    //   setUserEmail('');
    //   setCarName('');
    //   setPrice('');
    //   setBrandName('');
    //   setDateOfBooking('');
    //   toast.success('Booking added successfully');
    // } catch (error) {
    //   console.error('Error adding booking:', error);
    //   toast.error('Error adding booking');
    // }
  };

  return (
    <div className="add-booking-container">
      <h2>Add New Booking</h2>
      <form onSubmit={handleAddBooking}>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            placeholder="Add User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">User Email</label>
          <input
            type="email"
            id="userEmail"
            placeholder="Add User Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="carName">Car Name</label>
          <input
            type="text"
            id="carName"
            placeholder="Add Car Name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Add Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brandName">Brand Name</label>
          <input
            type="text"
            id="brandName"
            placeholder="Add Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBooking">Date of Booking</label>
          <input
            type="date"
            id="dateOfBooking"
            placeholder="Add Date of Booking"
            value={dateOfBooking}
            onChange={(e) => setDateOfBooking(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Add Booking</button>
      </form>
    </div>
  );
};

export default AddBooking;

import React, { useEffect, useState } from "react";

const ViewBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Retrieve bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleDelete = (index) => {
    // Delete booking and update localStorage
    const updatedBookings = bookings.filter((_, i) => i !== index);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };

  return (
    <div className="container">
      <h2>View Bookings</h2>
      {bookings.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Car Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.firstName}</td>
                <td>{booking.lastName}</td>
                <td>{booking.email}</td>
                <td>{booking.contact}</td>
                <td>{booking.address}</td>
                <td>{booking.rent_start_date}</td>
                <td>{booking.rent_end_date}</td>
                <td>{booking.car_type}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings available. Please book a car first.</p>
      )}
    </div>
  );
};

export default ViewBooking;

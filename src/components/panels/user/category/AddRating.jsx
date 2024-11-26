import React, { useState } from 'react';
// import { db } from '../../../../Firebase';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddRating = () => {
  const [carName, setCarName] = useState('');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [status, setStatus] = useState('pending');
  const [createdAt, setCreatedAt] = useState('');

  const handleAddRating = async (e) => {
    e.preventDefault();
    // try {
    //   await addDoc(collection(db, 'ratings'), {
    //     carName,
    //     userName,
    //     rating,
    //     review,
    //     status,
    //     createdAt: Timestamp.now(), 
    //   });
    //   setCarName('');
    //   setUserName('');
    //   setRating('');
    //   setReview('');
    //   setStatus('pending');
    //   setCreatedAt('');
    //   toast.success('Rating added successfully');
    // } catch (error) {
    //   console.error('Error adding rating:', error);
    //   toast.error('Error adding rating');
    // }
  };

  return (
    <div className="add-rating-container">
      <h2>Add New Rating</h2>
      <form onSubmit={handleAddRating}>
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
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            placeholder="Add Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            placeholder="Add Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Date</label>
          <input
            type="date"
            id="createdAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Add Rating</button>
      </form>
    </div>
  );
};

export default AddRating;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCar = () => {
  const [brandName, setBrandName] = useState('');
  const [carName, setCarName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!brandName || !carName || !price || !description) {
      toast.error('All fields are required!');
      return;
    }

    const newCar = {
      brandName,
      carName,
      price,
      description,
    };

    // Get existing cars from localStorage
    const savedCars = JSON.parse(localStorage.getItem('cars')) || [];
    const updatedCars = [...savedCars, newCar];

    // Save updated cars list in localStorage
    localStorage.setItem('cars', JSON.stringify(updatedCars));

    // Reset form fields
    setBrandName('');
    setCarName('');
    setPrice('');
    setDescription('');

    toast.success('Car added successfully!');
  };

  return (
    <div className="form_main">
      <div className="add-brand-container">
        <ToastContainer />
        <h2 className="brand_h">Add New Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="brandName">Brand Name</label>
            <input
              type="text"
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required
              className="form-control"
              placeholder="Enter brand name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="carName">Car Name</label>
            <input
              type="text"
              id="carName"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              required
              className="form-control"
              placeholder="Enter car name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="form-control"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control"
              placeholder="Enter description"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;

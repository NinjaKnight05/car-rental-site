import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBrand = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !logo || !status) {
      toast.error("All fields are required!");
      return;
    }

    // Create the message body object
    const messageBody = {
      name,
      logo,
      status,
      
    };

    // Log the message body to the console
    console.log("Message Body: ", messageBody);

    try {
      // Clear form fields after submission
      setName('');
      setLogo('');
      setStatus('');

      toast.success('Brand added successfully!');
    } catch (error) {
      console.error('Error adding brand: ', error);
      toast.error('Error adding brand. Please try again.');
    }
  };

  return (
    <div className='form_main'>
      <div className="add-brand-container">
        <ToastContainer />
        <h2 className='brand_h'>Add New Brand</h2>
        <form onSubmit={handleSubmit}>
          {/* Brand Name Field */}
          <div className="form-group">
            <label htmlFor="name">Brand Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
              placeholder="Enter brand name"
            />
          </div>

          {/* Logo URL Field */}
          <div className="form-group">
            <label htmlFor="logo">Logo URL</label>
            <input
              type="text"
              id="logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              required
              className="form-control"
              placeholder="Enter logo URL"
            />
          </div>

          {/* Status Dropdown */}
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="form-control"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;

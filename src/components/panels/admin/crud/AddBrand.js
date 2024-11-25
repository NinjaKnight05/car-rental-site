import React, { useState } from 'react';
// import { db } from '../../../../Firebase';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBrand = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await addDoc(collection(db, 'brands'), {
    //     name,
    //     logo,
    //     status,
    //     createdAt: Timestamp.now() 
    //   });
    //   setName('');
    //   setLogo('');
    //   setStatus('');
    //   toast.success('Brand added successfully');
    // } catch (error) {
    //   console.error('Error adding brand: ', error);
    //   toast.error('Error adding brand');
    // }
  };

  return (
    <div className='form_main'>
    <div className="add-brand-container">
      <ToastContainer />
      <h2 className='brand_h'>Add New Brand</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Add Brand</button>
      </form>
    </div>
    </div>
  );
};

export default AddBrand;

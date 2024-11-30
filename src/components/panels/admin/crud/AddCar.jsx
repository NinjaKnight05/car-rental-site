import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCar = () => {
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
    //   toast.success('Car added successfully');
    // } catch (error) {
    //   console.error('Error adding Car: ', error);
    //   toast.error('Error adding Car');
    // }
  };

  return (
    <div className='form_main'>
    <div className="add-brand-container">
      <ToastContainer />
      <h2 className='brand_h'>Add New Car</h2>
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
          <label htmlFor="name">Car Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            placeholder="Enter Car name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Price</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Description</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            placeholder="Enter Description"
          />
        </div>  
        <button type="submit" className="btn btn-primary">Add Car</button>
      </form>
    </div>
    </div>
  );
};

export default AddCar;



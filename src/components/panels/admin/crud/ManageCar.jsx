import React, { useEffect, useState } from 'react';

const ManageCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars from localStorage
    const savedCars = JSON.parse(localStorage.getItem('cars')) || [];
    setCars(savedCars);
  }, []);

  const handleDelete = (index) => {
    // Remove car from the list
    const updatedCars = cars.filter((_, i) => i !== index);
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars)); // Update localStorage
  };

  return (
    <div className="table_main mx-auto">
      <div className="table-responsive m-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Car Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.length > 0 ? (
              cars.map((car, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{car.brandName}</td>
                  <td>{car.carName}</td>
                  <td>${car.price}</td>
                  <td>{car.description}</td>
                  <td>
                    
                    <button
                      className="btn btn-danger btn-sm m-sm-1"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No cars available. Please add some.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCar;

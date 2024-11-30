import React, { useEffect, useState } from 'react';

const ManageBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {

    const savedBrands = JSON.parse(localStorage.getItem('brands')) || [];
    setBrands(savedBrands);
  }, []);

  const handleDelete = (index) => {

    const updatedBrands = brands.filter((_, i) => i !== index);

    localStorage.setItem('brands', JSON.stringify(updatedBrands));
    setBrands(updatedBrands);
  };

  return (
    <div className="table_main mx-auto">
      <div className="table-responsive m-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Name</th>
              <th scope="col">Logo</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.length > 0 ? (
              brands.map((brand, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{brand.name}</td>
                  <td>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm">Edit</button>
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
                <td colSpan="4" className="text-center">
                  No brands available. Please add some.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBrand;

import React from 'react';

const ManageCar = () => {
  return (
    <div className='table_main mx-auto'>
    <div className="table-responsive m-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Brand Name</th>
            <th scope="col">Car Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mercedes</td>
            <td>carname</td>
            <td>10,000</td>
            <td>hello!</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm m-sm-1'>Delete</button>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Royle-Roys</td>
            <td>carname</td>
            <td>20,000</td>
            <td>hello!</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm  m-sm-1'>Delete</button>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bugatti</td>
            <td>carname</td>
            <td>30,000</td>
            <td>hello!</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm  m-sm-1'>Delete</button>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mercedes</td>
            <td>carname</td>
            <td>40,000</td>
            <td>hello!</td>
           
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm  m-sm-1'>Delete</button>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageCar;

import React from 'react';

const ManageBrand = () => {
  return (
    <div className='table_main mx-auto'>
    <div className="table-responsive m-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">logo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mercedes</td>
            <td>mercedeslogo.png</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm m-sm-1'>Delete</button>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mercedes</td>
            <td>mercedeslogo.png</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm  m-sm-1'>Delete</button>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mercedes</td>
            <td>mercedeslogo.png</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm  m-sm-1'>Delete</button>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mercedes</td>
            <td>mercedeslogo.png</td>
            <button className='btn-primary btn-sm'>Edit</button>
            <button className='btn-primary btn-sm  m-sm-1'>Delete</button>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageBrand;

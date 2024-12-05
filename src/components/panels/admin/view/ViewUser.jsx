import React from 'react';

const ViewUser = () => {
  return (
    <div className='table_main mx-auto'>
    <div className="table-responsive m-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>demo</td>
            <td>demo@gmail.com</td>
            <td>9876543210</td>  
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>jokerr</td>
            <td>jokeer@gmail.com</td>
            <td>8968557443</td>  
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>joker1</td>
            <td>joker1@gmail.com</td>
            <td>6363334463</td>
           
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>tobi</td>
            <td>tobi@gmail.com</td>
            <td>575875677</td> 
           
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Yuvi</td>
            <td>yuvi@gmail.com</td>
            <td>7457657634</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ViewUser;

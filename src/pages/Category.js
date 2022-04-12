import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'
// import { Table } from 'react-bootstrap';

const Category = () => {
    return (
       <div>
           <div>
           <Navbar/>
           </div>

           <div>
               <div class="container-fluid">
                    <div class="row text-white mt-5 ms-5 mb-2">
                        <h5>List Category</h5>
                    </div>
                    <div class="row mx-5">
                    <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                <th scope="col" >No</th>
                                <th scope="col">Category Name</th>
                                <th scope="col" class="col-3">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                    <div class="row">
                                    <div class="col"><button className='buttonEdit'>
                                    Edit </button></div>
                                     
                                    <div class="col"><button className='buttonDelete'>
                                    Delete </button></div>
                                    </div>

                                </td>
                                </tr>
                              
                            </tbody>
                            </table>
                    </div>
               </div>
           </div>
       </div>
    )
}
export default Category;
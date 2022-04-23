import React from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar';
import { useNavigate } from 'react-router-dom';
import TableCategory from "../../component/table"
import { dataCategory } from '../../DataDummy/DataCategory';
// import { Table } from 'react-bootstrap';

const Category = () => {
    const navigate = useNavigate()
    return (
        <>
        <Navbar/>
       <div className="container">
          
                    <div className="row text-white mt-5 mb-3">
                        <h4>List Category</h4>
                    </div>
                    <table className="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col-md-3" >No</th>
                                <th scope="col-md-3">Category Name</th>
                                <th scope="col-md-3" className="col-3">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                            
                                {dataCategory.map((item) => {
                                return <TableCategory name={item.name} number={item.number}/>

                                  })} 
         
                              
                            </tbody>
                            </table>
       </div></>
    )
}
export default Category;
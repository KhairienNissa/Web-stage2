import React from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar'
import { useNavigate } from 'react-router-dom';
import TableProd from '../../component/TableProd';
import { dataProduct } from '../../DataDummy/DataProd';
// import { Table } from 'react-bootstrap';


const Product = (Props) => {
    const navigate = useNavigate();
    return (
       <div>
           <div>
           <Navbar/>
           </div>

           <div>
               <div className="container">
                    <div className="row text-white mt-5 mb-3">
                        <h4>List Product</h4>
                    </div>
                    <table className="table table-striped table-dark">
                            <thead>
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Desk</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty</th>
                                <th scope="col" className="col-3">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {dataProduct.map((item) => {
                                    return (
                                    <TableProd number={item.number} image={item.image} name={item.name} desk={item.desk.slice(0, 20) + '..'} price={item.price} stok={item.stok} />
                                    )
                                })}
                                
                                
                                
                            </tbody>
                            </table>
               </div>
           </div>
           </div>
    )
}
export default Product;
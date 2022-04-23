import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import AlertDelete from './alert';
// import { Table } from 'react-bootstrap';

const TableProd = (props) => {
    const navigate = useNavigate()
    return (
        <tr>
        <th scope="row">1</th>
        <td>{props.image}</td>
        <td>{props.name}</td>
        <td>{props.desk}</td>
        <td>{props.stok}</td>
        <td>{props.price}</td>
        <td>
            <div className="row">
            <div className="col"><button className='buttonEdit' onClick={()=> navigate('/edit-product')}>
            Edit </button></div>
             
            <div className="col">
                <AlertDelete/>
            </div>
            </div>

        </td>
        </tr>
    )
}
export default TableProd;





import React from 'react';
// import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Detail } from '../DataDummy/DetailProduct';
import { Card, ListGroup,ListGroupItem, } from 'react-bootstrap';

const CardProduct = (props) => {
   
 
    return (
                 <div className="col-md-2 me-2"> 
                    <NavLink className="nav-link text-black" to={`/detail-page/${props.id}`}
                  exact >
                    <Card style={{ width: '200px', height: '340px', backgroundColor: "black" , color: "white", border: "2px solid white"}}>
                <Card.Img variant="top" src={props.image} style={{height: '230px' }}/>
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price}
               <p>stok : {props.stok}</p> 
                </Card.Text>
                </Card.Body>
                </Card></NavLink>  
                    </div>
    //  "images/mouse.png" 
    )
}
export default CardProduct;
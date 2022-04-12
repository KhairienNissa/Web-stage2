import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'
import { Card, ListGroup,ListGroupItem, } from 'react-bootstrap';


const ProductShop = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div>
            <div class="container-fluid">
                <div class="row m-5 text-danger">
                    <h5>Product</h5>
                </div>

                <div class="row m-5">
                    <div class="col-3">
                    <Card style={{ width: '241px', height: '410px' }}>
                <Card.Img variant="top" src="images/keyboard.png" />
                <Card.Body>
                <Card.Title>Keyboard</Card.Title>
                <Card.Text>
                Rp. 600.000
                stok: 540
                </Card.Text>
                </Card.Body>
            
                </Card>
                                </div>
                    <div class="col-3">   
                    <Card style={{  width: '241px', height: '410px' }}>
                <Card.Img variant="top" src="images/mouse.png" />
                <Card.Body>
                <Card.Title>Mouse</Card.Title>
                <Card.Text>
                Rp. 500.000
                stok: 500
                </Card.Text>
                </Card.Body>
            
                </Card>
                    </div>
                </div>
            </div>
        </div> 
     </div>
    )
}

export default ProductShop;
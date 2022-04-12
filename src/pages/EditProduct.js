import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'

const EditProduct = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
            

                <div>
        <div class="container-fluid" style={{padding : "20px 50px"}}>
            <form>
                <div class="m-5 text-white">
                    <h2>Edit Product</h2>
                </div>

                <div class="row">
                    <div class="col-1 mx-5">
                        <button class="buttonMerah"> <input type="file" id="image" name="image" hidden /> upload image</button>
                    </div>
                    <div class="col-1 text-white">
                       <p>mouse.jpg</p>
                    </div>


                </div>


                <div class="row mx-5 mt-3">
                    <input style={{backgroundColor: "#BCBCBC"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div class="row mx-5 mt-3">
                    <input style={{backgroundColor: "#BCBCBC"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div class="row mx-5 mt-3" >
                    <input style={{backgroundColor: "#BCBCBC", paddingTop: "40px", paddingBottom : "40px"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div class="row mx-5 mt-3">
                    <input style={{backgroundColor: "#BCBCBC"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="600"/>
                </div>
                <div class="row mx-5 mt-5 mb-4">
                    <button type="submit" class="buttonSave">Save</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default EditProduct;
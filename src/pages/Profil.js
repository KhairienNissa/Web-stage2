import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'

const Profil = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div>
                <div class="container-fluid">

                    

                    <div class="row justify-content-center">
                       <div class="col-md-6 m-5">
                           <h1 class="text-danger">My Profil</h1>
                           <div class="row mt-5">
                                <div class="col">
                                    <div class="col-md-4">
                                     <img variant="top" src="images/caca.jpg" style={{width: "338px",height: "435px"}} />
                                     </div>
                                </div>      
                                <div class="col text-white">
                                        <div class="row">
                                            <p class="text-danger">Name</p>
                                            <p>Khairien</p>
                                        </div>
                                        <div class="row">
                                            <p class="text-danger">Email</p>
                                            <p>cacakhairien@gmail.com</p>
                                        </div>
                                        <div class="row">
                                            <p class="text-danger">Phone</p>
                                            <p>089651049130</p>
                                        </div>
                                        <div class="row">
                                            <p class="text-danger">Gender</p>
                                            <p>Female</p>
                                        </div>
                                        <div class="row">
                                            <p class="text-danger">Address</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                        </div>
                                       
                                </div>      
                           </div>
                       </div>

                       <div class="col-md-4  m-5 text-danger">
                           <div class="row">
                             <h2>My Transaction</h2> 
                           </div>
                            <div class="row mt-5">
                                <div class="kotak">
                                    <div  class="row">
                                    <div  class="col-3 mt-2">
                                    <img src="images/mouse.png" width= "80px" height= "120px"/>
                                    </div>
                                    <div style={{fontSize: "10px"}} class="col text-white">
                                        <div class="row">
                                            <h5 class="text-danger">mouse</h5>
                                            <p>Saturday, 14 Juli 2021</p>
                                            <p>Price : Rp.500.000</p>

                                        </div>
                                        <div class="row">
                                        <p>Sub Total : 500.000</p>
                                        </div>
                                    

                                    </div>
                                    <div  class="col mt-2">
                                         <img src="images/Frame.png" width="70" height="70"/>
                                    </div>
                                    </div>
                                 </div>
                            </div>
                       </div>

                    </div>

                   
                </div>
            </div>
            
        
        </div>
    )
}

export default Profil;
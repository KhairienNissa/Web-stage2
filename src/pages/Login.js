import React from 'react';
import { Navigate } from 'react-router-dom';
import './Button.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
    return (
        <div>
            <div class="container">
              <div class="row mt-5">
                  {/* bagian kiri */}

                 <div class="col-md-6">
                      <img src="images/Frame.png" width="264" height="264"/>
                   <div class="row text-white mt-3">
                     <h1> Easy, Fast and Reliable</h1>
                   </div>

                   <div class="row mt-2">
                     <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                   </div>
                     <div class="row mt-4">
                        <div class="col-3">
                             <button className='buttonMerah'>login</button>
                        </div>
                        <div class="col-3 ">
                             <a class="nav-link text-white" href="#home">Register</a>
                        </div>
                     </div>
                 </div>

                  {/* penutup */}

                  {/* bagian kanan login */}
                <div class="col-md-5">
                    <div class="row row-cols-1 row-cols-md-2 justify-content-center mt-5">
                         <div class="col mb-4 ">
                             <div class="card bor" style={{background: "#181818", width: "416px", height: "366px"}}>
                                <div class="card-body" style={{background: "#181818", width: "350px", margin: "20px auto"}}>
                                  <h2 style={{background: "#181818"}} class="text-white mb-5">Login</h2>
                                 <form>
                                     <div style={{background: "#181818"}} class="form-group">
                                         <div class="row mb-4">
                                              <input style={{backgroundColor: "#BCBCBC"}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="email"/>
                                         </div>
                                         <div class="row mb-5">
                                              <input style={{backgroundColor: "#BCBCBC"}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="password" />
                                         </div>
                                         <div class="row mb-">
                                             <button type="button" class="btn btn-lg btn-block fs-6 text-white" style={{background: "#F74D4D"}} onClick= {() => navigate('/Product')}>Login</button>
                                         </div>
                                     </div>
                                </form>
                              </div>
                         </div>
                     </div>
                </div>
            </div>
                {/* bagian penutup */}


             </div>
        </div>
     </div>
    )
}
export default Login;
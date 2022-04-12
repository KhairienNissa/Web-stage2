import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'
// import { Table } from 'react-bootstrap';

const Complain = () => {
    return (
       <div>
           <div>\
           <Navbar/>
           </div>

            <div class="container-fluid">
                <div class="row">

                    {/* sesi kiri */}

                    <div class="col-md-4 mt-4" style={{height: "570px", borderRight : "1px solid white", marginBottom:"0px"}}>
                         <div class="row m-4">
                             <div class="col-2 mt-2">
                             <img class="rounded-circle" src="images/5147268.jpg" width={"50px"}/>
                             </div>
                             <div class="col mt-1">
                                <p style={{fontSize: "14px", color: "white", fontWeight: "bold"}}>Admin</p>
                                <p style={{fontSize: "12px", color: "white"}}>Yes, is there anything i can help?</p>
                             </div>
                        </div>
                    </div>

                    {/* sesi kanan */}

                    <div class="col">
                        <div class="row">
                            <div class="chat">
                            <div>
                        <div class="row">
                         <div class="col-6">
                        
                      </div>
                          <div class="col-6">
                            <div class="talk-bubble tri-right left-in">
                            <div class="talktext">
                                <p>This talk-bubble uses .left-in class to show a triangle on the. .</p>
                            </div>
                            </div>
                        </div>

                         <div class="col-6">
                             <img class="rounded-circle" src="images/5147268.jpg" width={"50px"}/>
                            <div class="talk-bubble1 tri-right left-in">
                            <div class="talktext">
                                <p>Yes, is there anything i can help?</p>
                            </div>
                            </div>
                            </div>
                        
                            <div class="col-4">
                        
                             </div>

                          </div>

                            </div>
                            <div >
                                <form>
                            <input style={{backgroundColor: "#BCBCBC", height:"64px"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Send Message"/></form>
                        </div>
                    </div>          
                    </div>          
                 </div>
            </div>
       </div>
       </div>
    )
}
export default Complain;
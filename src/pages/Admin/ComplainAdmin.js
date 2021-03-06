import React from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar';
// import { Table } from 'react-bootstrap';
import caca from '../../Assets/images/caca1.JPG'

const ComplainByAdmin = () => {
    return (
       <div>
           <div>
           <Navbar/>
           </div>

           <div className=" container"  >
            <div className='row'>
                <div className='col-4 d-flex' style= {{borderRight: "1px solid rgb(75, 75, 75)", height : "530px", paddingTop:"30px"}}>
                    <img className='me-3 rounded-circle' src={caca} alt="admin" width={"60px"} height={"60px"}/>
                    <div>
                        <p className="mb-2 text-white" style={{fontSize : "15px"}}>Caca</p>
                        <p className="text-secondary-2 text-white" style={{fontSize : "14px"}}>hi, i need your help!</p>
                    </div>
                    <div className="ms-auto">
                        <img src="image/caca.jpg" alt="" className='d-flex justify-content-end' height={"800px"}/>
                    </div>
                </div>



                <div className='col-8 d-flex flex-column justify-content-end' style={{height : "530px"}}>
                    <div className="d-flex ms-3">
                        <img className="me-3 rounded-circle" src={caca} alt="" width={"60px"} height={"60px"}/>
                        <div className='d-flex'>
                            <span className='mt-2' style={{width: "0", height: "0", borderTop: "18px solid transparent", borderRight: "30px solid rgb(191, 194, 194)", borderBottom: "18px solid transparent"}}></span>
                            <p className="fw-500 bg-card p-3" style={{borderRadius: "5px", width: "max-content", backgroundColor: "rgb(191, 194, 194)"}}>hi, i need your help!</p>
                        </div>
                    </div>

                    <div className='d-flex ms-4 mt-4'>
                        <input type="text" className="bg-input mb-4 fw-600 form-control p-3" id="formGroupExampleInput" placeholder="Send Message" style={{border: "none"}} />
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
export default ComplainByAdmin;
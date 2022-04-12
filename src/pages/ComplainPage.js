import React from 'react';
import './Button.css';
import Navbar from '../component/Navbar'

const ComplainPage = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div>
            <div class="container-fluid" style={{padding : "20px 50px"}}>
            <form>
                <div class="m-5 text-white">
                    <h2>Edit Category</h2>
                </div>

                <div class="m-5">
                    <input style={{backgroundColor: "#BCBCBC"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div class="m-5">
                    <button type="submit" class="buttonSave">save</button>
                </div>
            </form>
            </div>
            </div>
     </div>
    )
}

export default ComplainPage;
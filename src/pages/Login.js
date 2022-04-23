import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import '../component/style.css';
import { useNavigate, NavLink } from 'react-router-dom';
import frame from  '../Assets/images/Frame.png'



const Login = () => {
  const navigate = useNavigate();


  const [state, setState] = useState ({
    email : '',
    password : ''
  })

  const HandleOnChange = (event) =>{
      setState({
        ...state,
        [event.target.name] : event.target.value
      })
  }

    const HandleOnsubmit = (event) => {
      event.preventDefault() 
      navigate('/')
      console.log("Submit", state)
    }

      return (
        <div>
            <div className="container" style={{margin : "80px 100px"}}>
              <div className="row mt-5">
                  {/* bagian kiri */}

                 <div className="col-md-6">
                      <img src={frame} width="264" height="264"/>
                   <div className="row text-white mt-3">
                     <h1> Easy, Fast and Reliable</h1>
                   </div>

                   <div className="row mt-2">
                     <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                   </div>
                     <div className="row mt-4">
                        <div className="col-md-3">
                             <button className='buttonMerah' onClick={() =>  navigate('/category ')}>login</button>
                        </div>
                        <div className="col-md-3 ">
                        <NavLink
                        aria-current="page" className="nav-link text-white"
                        to="/register"
                        exact >
                        Register
                        </NavLink>
                        </div>
                     </div>
                 </div>

                  {/* penutup */}

                  {/* bagian kanan login */}
                <div className="col-md-6">
                    <div className="row row-cols-1 row-cols-md-2 justify-content-center mt-5">
                         <div className="col mb-4 ">
                             <div className="card bor" style={{background: "#181818", width: "416px", height: "366px"}}>
                                <div className="card-body" style={{background: "#181818", width: "350px", margin: "20px auto"}}>
                                  <h2 style={{background: "#181818"}} className="text-white mb-5">Login</h2>
                                   <form onSubmit={HandleOnsubmit}>
                                     <div style={{background: "#181818"}} className="form-group">
                      
                                         <div className="row mb-4">
                                              <input style={{backgroundColor: "rgb(131, 131, 131)",
                                           border: "2px solid white"}} type="email" className="text-white form-control" id="exampleFormControlInput1" placeholder="email" name="email" value={state.email} onChange={HandleOnChange}/>
                                         </div>
                                         <div className="row mb-5">
                                              <input style={{backgroundColor: "rgb(131, 131, 131)",
                                           border: "2px solid white"}} type="password" className="text-white form-control" id="exampleFormControlInput1" placeholder="password" name="password" value={state.password} onChange={HandleOnChange} />
                                         </div>
                                         <div className="row">
                                             <button type="submit" className="btn btn-lg btn-block fs-6 text-white" style={{background: "#F74D4D"}}>Login</button>
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
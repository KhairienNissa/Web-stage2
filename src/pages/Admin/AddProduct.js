import React,  {useState} from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const [state, setState] = useState ({
        category : ''
      })
    
      const HandleOnChange = (event) =>{
          setState({
            ...state,
            [event.target.name] : event.target.value
          })
      }
    
        const HandleOnsubmit = (event) => {
          event.preventDefault() 
          navigate('/category')
          console.log("Submit", state)
        }
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
            

                <div>
        <div className="container-fluid" style={{width: "1000px",padding : "20px 50px"}}>
            <form onSubmit={HandleOnsubmit}>
                <div className="m-5 text-white text-center">
                    <h2>Add Product</h2>
                </div>

                <div className="row">
                    <div className="col-1 mx-5">
                        <button className="buttonMerah"> <input type="file" id="image" name="image" hidden /> upload image</button>
                    </div>
                    <div className="col ms-5 text-white">
                       <p>mouse.jpg</p>
                    </div>


                </div>
            

                <div className="row mx-5 mt-3">
                    <input style={{backgroundColor: "#BCBCBC"}} type="text" className="form-control" id="exampleInputEmail1"  placeholder="mouse" name="name" value={state.name} onChange={HandleOnChange}/>
                </div>
                <div className="row mx-5 mt-3">
                    <input style={{backgroundColor: "#BCBCBC"}} type="text" className="form-control" id="exampleInputEmail1"  placeholder="mouse" name="desk" value={state.desk} onChange={HandleOnChange}/>
                </div>
                <div className="row mx-5 mt-3" >
                    <input style={{backgroundColor: "#BCBCBC", paddingTop: "40px", paddingBottom : "40px"}} type="text" className="form-control" id="exampleInputEmail1"  placeholder="mouse" name="price" value={state.price} onChange={HandleOnChange}/>
                </div>
                <div className="row mx-5 mt-3">
                    <input style={{backgroundColor: "#BCBCBC"}} type="text" className="form-control" id="exampleInputEmail1"  placeholder="600" name="stok" value={state.stok} onChange={HandleOnChange}/>
                </div>
                <div className="row mx-5 mt-5 mb-4">
                    <button type="submit" className="buttonSave" onClick={() => ('/ListProduct')}>Save</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default AddProduct;
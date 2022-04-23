import React, {useState} from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar'

const AddCategory = () => {
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
            <div className="container-fluid" style={{ width: "1000px",padding : "20px 50px"}}>
            <form onSubmit={HandleOnsubmit}>
                <div className="m-5 text-white text-center">
                    <h2>Add Category</h2>
                </div>

                <div className="m-5">
                    <input style={{backgroundColor: "#BCBCBC"}} type="text" className="form-control" aria-describedby="emailHelp"  placeholder="mouse" name="category" value={state.category} onChange={HandleOnChange}/>
                </div>
                <div className="m-5">
                    <button type="submit" className="buttonSave">save</button>
                </div>
            </form>
            </div>
            </div>
     </div>
    )
}

export default AddCategory;
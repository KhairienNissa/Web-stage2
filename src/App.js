import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import Login from './pages/Login' ;
// import Register from './pages/Register' ;
// import Category from './pages/Admin/Category' ;
// import ListProduct from './pages/Admin/ListProduct' ;
// import EditProduct from './pages/Admin/EditProduct' ;
// import ProductShop from '../src/pages/ProductShop' ;
// import DetailPage from './pages/User/DetailPage' ;
// import Profil from './pages/User/Profil' ;
// import EditCategory from './pages/Admin/EditCategory' ;
// import ComplainUser from './pages/User/ComplainUser' ;
// import ComplainAdmin from './pages/Admin/ComplainAdmin' ;
import Render from '../src/Config/Router';


const App = () => {
  return (
    <div>

      <Render/>
          {/* <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register'  element={<Register/>}/>
                <Route path='/category' element={<Category/>}/>
                <Route path='/complain-user' element={<ComplainUser/>}/>
                <Route path='/complaina-admin'element={<ComplainAdmin />}/>
                <Route path='/list-product' element={<ListProduct/>}/>
                <Route path='/product-shop' element={<ProductShop/>}/>
                <Route path='/profil' element={<Profil/>}/>
                <Route path='/edit-category' element={<EditCategory/>}/>
                <Route path='/edit-product' element={<EditProduct/>}/>
                <Route path='/detail-Page' element={<DetailPage/>}/>
                <Route path='/product-shop' element={<ProductShop/>}/>
            </Routes>
        </BrowserRouter>  */}
    </div>
  );
}

export default App;

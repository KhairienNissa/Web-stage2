import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login' ;
import Register from '../pages/Register' ;
import Category from '../pages/Admin/Category' ;
import ListProduct from '../pages/Admin/ListProduct' ;
import EditProduct from '../pages/Admin/EditProduct' ;
import Home from '../pages/home' ;
import DetailPage from '../pages/User/DetailPage' ;
import Profil from '../pages/User/Profil' ;
import EditCategory from '../pages/Admin/EditCategory' ;
import ComplainUser from '../pages/User/ComplainUser' ;
import ComplainAdmin from '../pages/Admin/ComplainAdmin' ;
import PrivateRoute from './PrivatRoute';
import AlertDelete from '../component/alert';
import FileNotFound from '../pages/fileNotFound';

const Render = () => {
 return(
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register'  element={<Register/>}/>
        <Route path='/*' element={<FileNotFound/>}/>
        <Route path='/'  element={<PrivateRoute/>}>
        <Route path='/category' element={<Category/>}/>
        <Route path='/complain-user' element={<ComplainUser/>}/>
        <Route path='/complain-admin'element={<ComplainAdmin />}/>
        <Route path='/list-product' element={<ListProduct/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/profil' element={<Profil/>}/>
        <Route path='/edit-category' element={<EditCategory/>}/>
        <Route path='/edit-product' element={<EditProduct/>}/>
        <Route path='/detail-Page/:id' element={<DetailPage/>}/>
        <Route path='/delete' element={<AlertDelete/>}/>
        
        </Route>
    </Routes>
</BrowserRouter>
      
 )
}

export default Render;






















// // import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// // import Category from '../pages/Category';
// // import Complain from '../pages/Complain';
// // import ComplainByAdmin from '../pages/ComplainByAdmin';
// // import ComplainPage from '../pages/ComplainPage';
// // import EditCategory from '../pages/EditCategory';
// // import EditProduct from '../pages/EditProduct';
// // import Login from '../pages/Login';
// // import Product from '../pages/Product';
// // import Profil from '../pages/Profil';
// // import Register from '../pages/Register';
// // import ProductShop from '../pages/ProductShop';


// //         <Router>
// //             <Routes>
// //                 <Route path='/Login'>
// //                     <Login/>
// //                 </Route>
// //                 <Route path='/Register'>
// //                     <Register/>
// //                 </Route>
// //                 <Route path='/Category'>
// //                     <Category/>
// //                 </Route>
// //                 <Route path='/Complain'>
// //                     <Complain/>
// //                 </Route>
// //                 <Route path='/ComplainByAdmin'>
// //                     <ComplainByAdmin/>
// //                 </Route>
// //                 <Route path='/ComplainPage'>
// //                     <ComplainPage/>
// //                 </Route>
// //                 <Route path='/Product'>
// //                     <Product/>
// //                 </Route>
// //                 <Route path='/ProductShop'>
// //                     <ProductShop/>
// //                 </Route>
// //                 <Route path='/Profil'>
// //                     <Profil/>
// //                 </Route>
// //                 <Route path='/EditCategory'>
// //                     <EditCategory/>
// //                 </Route>
// //                 <Route path='/EditProduct'>
// //                     <EditProduct/>
// //                 </Route>
// //             </Routes>
// //         </Router>
      
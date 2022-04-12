import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login' ;
import Register from './pages/Register' ;
import Category from './pages/Category' ;
import Product from '../src/pages/Product' ;
import EditProduct from '../src/pages/EditProduct' ;
import ProductShop from '../src/pages/ProductShop' ;
import DetailPage from '../src/pages/DetailPage' ;
import Profil from '../src/pages/Profil' ;
import EditCategory from '../src/pages/EditCategory' ;
import ComplainPage from '../src/pages/ComplainPage' ;
import Complain from '../src/pages/Complain' ;
import ComplainByAdmin from '../src/pages/ComplainByAdmin' ;
import Render from '../src/Config/Router';



function App() {
  return (
    <div>
       <Login/>
      
    </div>
  );
}

export default App;

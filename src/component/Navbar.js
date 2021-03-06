import React from 'react';
import { NavLink } from 'react-router-dom';
import '../component/style.css'
import frame from "../Assets/images/Frame.png"



const Navbar = () => {
  let url = window.location.href;
  let host = window.location.host;
  let final_url = url.replace(`http://${host}`, "");

return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark text-white ">
          <div className="container-fluid px-5 pt-2">
        <NavLink to="/" exact><img src={frame} width="60"/></NavLink> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item me-4">
                  <NavLink
                  aria-current="page" className={
                    final_url === "/complain-admin" ? "nav-link hello text-danger fw-bold" :"nav-link hello text-white "}
                    to="/complain-admin"exact >
                   Complain
                  </NavLink>
              </li>
              <li className="nav-item me-4">
              <NavLink
                  aria-current="page" className={
                    final_url === "/category" ? "nav-link hello text-danger fw-bold" :"nav-link hello text-white "}
                  to="/category"
                  exact >
                  Category
                  </NavLink>
            </li>
            <li className="nav-item me-4">
                 <NavLink
                  aria-current="page" className={
                    final_url === "/list-product" ? "nav-link hello text-danger fw-bold" :"nav-link hello text-white "}
                  to="/list-product"
                  exact >
                  Product
                  </NavLink>
            </li>
            <li className="nav-item">
                 <NavLink
                  aria-current="page" className="nav-link hello text-white"
                  to="/login"
                  exact >
                  Logout
                  </NavLink>
              </li>
               
            </ul>
          </div>
        </div>
      </nav>
    </div>
)
}

export default Navbar;

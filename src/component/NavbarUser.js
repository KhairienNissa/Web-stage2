import React from 'react';
// import Frame from '../../public/images/Frame.png';
import { NavLink } from 'react-router-dom';
import frame from "../Assets/images/Frame.png"


const NavbarUser = (props) => {
  let url = window.location.href;
  let host = window.location.host;
  let final_url = url.replace(`http://${host}`, "");
return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark text-white shadow-sm">
        <div className="container-fluid px-5 pt-2">
        <NavLink to="/" exact ><img src={frame} width="60"/></NavLink> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item me-4">
              <form>
              <div class="mb-3">
                {final_url == '/' &&
                  <input type="input" class="form-control inputSearch" placeholder='Search..' value={props.seacrh} onChange={(event) => props.setSearch(event.target.value)}/> }
              </div>
              </form>
              </li>
              <li className="nav-item me-4">
                {/* <a aria-current="page"></a>
                  <link to="/Complain" >Complain</link> */}
                    <NavLink
                  aria-current="page" className={
                    final_url === "/complain-user" ? "nav-link hello text-danger fw-bold" :"nav-link hello text-white "}
                  to="/complain-user"
                  exact >
                Complain
                  </NavLink>
              </li>
            <li className="nav-item me-4">
                 <NavLink
                  aria-current="page" className={
                    final_url === "/profil" ? "nav-link hello text-danger fw-bold" :"nav-link hello text-white "}
                  to="/profil"
                  exact >
                  Profil
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

export default NavbarUser;

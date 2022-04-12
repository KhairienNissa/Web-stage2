import React from 'react';
// import Frame from '../../public/images/Frame.png';


const navbar = () => {
return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-dark text-white shadow-sm">
        <div class="container-fluid px-5">
        <img src="images/Frame.png" width="60" height="60"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item me-4">
                {/* <a aria-current="page"></a> */}
                  <link to="/Complain" class="nav-link text-white">Complain</link>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link text-white" href="#about">Category</a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link text-white" href="#card">Product</a>
            </li>
            <li class="nav-item me-4">
                <a class="nav-link text-white" href="#kontak">Logout</a>
              </li>
               
            </ul>
          </div>
        </div>
      </nav>
    </div>
)
}

export default navbar;

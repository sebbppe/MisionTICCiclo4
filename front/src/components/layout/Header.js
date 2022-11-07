import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img src="./images/logo192.png" alt="Tienda" width="40px" height="40px"></img>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div class="input-group">
            <input
              type="text"
              id="search_field"
              class="form-control"
              placeholder="Buscar producto"
            ></input>
            <div class="input-group-append">
              <button id="search-btn" class="btn">
                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          
          <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
          <span id="cart_count" className="ml-1">
            2
          </span>

          <span>
            <button className="btn btn-info mx-4" id="login-btn">
              Inicie sesión
            </button>
          </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

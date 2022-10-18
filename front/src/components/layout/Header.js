import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img src="./images/logo192.png" alt="Tienda"></img>
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
                <i class="fa fa fa" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login-btn">
            Inicie sesión
          </button>
          <span id="cart" className="ml-3">
            Carrito
          </span>
          <span id="cart_count" className="ml-1">
            2
          </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;

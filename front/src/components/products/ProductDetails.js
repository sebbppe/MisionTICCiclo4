import React, { Fragment } from "react";
import { MetaData } from "../layout/MetaData";

export const ProductDetails = () => {
  return (
    <Fragment>
      <MetaData title="Details"></MetaData>
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
          <img
            src="../../images/Gato1Kg.jpg"
            height={450}
            width="450"
            alt="imagen del producto"
          ></img>
        </div>
        <div className="col-12 col-lg-5 m5-5">
          <h3>Alimento húmedo</h3>
          <p id="product_id">Product #2566</p>
        </div>
      </div>
    </Fragment>
  );
};

import React, { Fragment, useEffect } from "react";
import { MetaData } from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { Link } from 'react-router-dom'
import {useAlert} from 'react-alert'
export const Home = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const alert=useAlert();
  useEffect(() => {
    if (error){
        return alert.error(error)
    }
    dispatch(getProducts());
    alert.success("Ok")
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <h1> Cargando</h1>
      ) : (
        <Fragment>
          <MetaData title="productos"></MetaData>
          <h1 id="encabezado_prodcutos">Últimos productos</h1>
          <section id="productos" className="container mt-5">
            <div className="row">
              {products &&
                products.map((producto) => (
                  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                      <img
                        className="card-img-top mx-auto "
                        src={producto.imagen[0].url}
                        alt="Comida de 1Kg"
                      ></img>
                      <div className="card-body d-flex flex-column">
                        <h5 id="titulo_producto">
                          <Link to={`/producto/${producto._id}`}>{producto.nombre}</Link>
                        </h5>
                        <div className="rating mt-auto">
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{
                                width: `${(producto.calificacion / 5) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span id="No_de_opiniones">
                            {" "}
                            {producto.calificacion}
                          </span>
                        </div>
                        <p className="card-text">${producto.precio} </p>
                        <Link to={`/producto/${producto._id}`} id="ver_producto" className="btn btn-dark">
                          Ver producto
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

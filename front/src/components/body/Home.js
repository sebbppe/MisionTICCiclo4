import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>

        <h1 id="encabezado_prodcutos">Últimos productos</h1>
        <section id="productos" className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto ' src='./images/Gato1Kg.jpg' alt='Comida de 1Kg'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='#'>Comida gatito 1KG</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'>

                                    </div>
                                </div>
                                <span id='No_de_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'>$72000 </p>
                            <a href='#' id='ver_producto' className='btn btn-dark'>Ver producto</a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto ' src='./images/Gato2Kg.jpg' alt='Comida de 1Kg'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='#'>Comida gatito 2KG</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'>

                                    </div>
                                </div>
                                <span id='No_de_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'>$72000 </p>
                            <a href='#' id='ver_producto' className='btn btn-dark'>Ver producto</a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto ' src='./images/Gato3Kg.jpg' alt='Comida de 1Kg'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='#'>Comida gatito 3KG</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'>

                                    </div>
                                </div>
                                <span id='No_de_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'>$72000 </p>
                            <a href='#' id='ver_producto' className='btn btn-dark'>Ver producto</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </Fragment>
  )
}

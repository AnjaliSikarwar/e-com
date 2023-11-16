import React from 'react'

function Shopdetail() {
    return (
        <>

            {/* Breadcrumb Start */}

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <nav className='breadcrumb mb-30'>
                            <a className='breadcrumb-item' href='/'>Home</a>
                            <a className='breadcrumb-item' href='/'>Shop</a>
                            <span className='breadcrumb-item'>Shop List</span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Breadcrumb End */}



            {/* Shop detail start */}

            <div className='container'>

                <div className='row'>

                    <div className='col-lg-5  '>
                        <div className='left-detail'>
                            <img className='img-fluid ' src='https://pnecommerce.netlify.app/img/product-1.jpg' alt='' />
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <div className='h-100 p-30 h-auto right-detail'>
                            <h3>Product Name Goes Here</h3>
                            <div className='d-flex mb-3'>
                                <div className='text-primary mr-2'>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star-half-alt'></small>
                                    <small className='fas fa-star'></small>
                                </div>
                                <small className='pt-1'>(99 Reviews)</small>
                            </div>

                            <h3 className='font-weight-semi-bold mb-4'>$150.00</h3>
                            <p className='mb-4'>
                                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy
                            </p>
                            <div className='d-flex mb-3'>
                                <strong className='text-dark mr-3'>Sizes:</strong>
                                <form className='d-flex '>
                                    <div className='custom-control custom-radio custom-control-inline'>
                                        <input type='radio' className='custom-control-input' id='size-1' name='size' />
                                        <label className='custom-control-label' for='size-1'>XS</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='size-2' name='size' />
                                        <label className='custom-control-label' for='size-2'>S</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='size-3' name='size' />
                                        <label className='custom-control-label' for='size-3'>M</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='size-4' name='size' />
                                        <label className='custom-control-label' for='size-4'>L</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='size-5' name='size' />
                                        <label className='custom-control-label' for='size-5'>XL</label>
                                    </div>
                                </form>
                            </div>

                            <div className='d-flex mb-3'>
                                <strong className='text-dark mr-3'>Colors:</strong>
                                <form className='d-flex'>
                                    <div className='custom-control custom-radio custom-control-inline'>
                                        <input type='radio' className='custom-control-input' id='color-1' name='color' />
                                        <label className='custom-control-label' for='color-1'>Black</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='color-2' name='color' />
                                        <label className='custom-control-label' for='color-2'>White</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='color-3' name='color' />
                                        <label className='custom-control-label' for='color-3'>Red</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='color-4' name='color' />
                                        <label className='custom-control-label' for='color-4'>Blue</label>
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline ml-2'>
                                        <input type='radio' className='custom-control-input' id='color-5' name='color' />
                                        <label className='custom-control-label' for='color-5'>Green</label>
                                    </div>
                                </form>
                            </div>

                            <div className='d-flex align-items-center mb-4 pt-2'>
                                <div className='input-group quantity mr-3'>
                                    <div className='input-group-btn'>
                                        <button className='btn btn-primary btn-minus'>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>
                                    <input type='text' className='form-control bg-secondary border-0 text-center' value='1'></input>
                                    <div className='input-group-btn'>
                                        <button className='btn btn-primary btn-plus'>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                                <button className='btn btn-primary px-3'>
                                    <i className='fa fa-shopping-cart mr-1'></i>
                                    Add To Cart
                                </button>
                            </div>

                            <div className='d-flex pt-2'>
                                <strong className='text-dark mr-2'>Share on:</strong>
                                <div className='d-inline-flex'>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-pinterest'></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row mt-5'>
                    <div className='col'>
                        <div className='description'>
                            <div className='nav nav-tabs mb-4'>
                                <a className='nav-item nav-link text-dark active' data-toggle='tab' href>
                                    Description
                                </a>
                                <a className='nav-item nav-link text-dark ' data-toggle='tab' href>
                                    Information
                                </a>
                                <a className='nav-item nav-link text-dark ' data-toggle='tab' href>
                                    Reviews (0)
                                </a>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane fade show active' id='tab-pane-1'>
                                    <h4 className='mb-3'>Product Description</h4>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                    <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Shop detail end */}




            {/* product start here */}

            <div className='container pt-5 pb-3'>
                <h2 className='section-title mb-4'>YOU MAY ALSO LIKE</h2>
                <div className='row'>

                    <div className='col-lg-3 col-md-4 col-sm-6 pb-1 box-3'>
                        <div className='product-item mb-4' >
                            <div className='product-img'>
                                <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-1.jpg' alt='' />
                            </div>
                            <div className=' product-text text-center py-4'>
                                <a className='text-decoration-none' href>Product Name Goes Here</a>
                                <div className='d-flex align-items-center justify-content-center mt-2'>
                                    <h5>$123.00</h5>
                                    <h6 className='text-muted'><del>$123.00</del></h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mb-1'>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                        <div className='product-item mb-4'>
                            <div className='product-img'>
                                <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-2.jpg' alt='' />
                            </div>
                            <div className=' product-text text-center py-4'>
                                <a className='text-decoration-none' href>Product Name Goes Here</a>
                                <div className='d-flex align-items-center justify-content-center mt-2'>
                                    <h5>$123.00</h5>
                                    <h6 className='text-muted'><del>$123.00</del></h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mb-1'>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                        <div className='product-item mb-4'>
                            <div className='product-img'>
                                <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-3.jpg' alt='' />
                            </div>
                            <div className=' product-text text-center py-4'>
                                <a className='text-decoration-none' href>Product Name Goes Here</a>
                                <div className='d-flex align-items-center justify-content-center mt-2'>
                                    <h5>$123.00</h5>
                                    <h6 className='text-muted'><del>$123.00</del></h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mb-1'>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                        <div className='product-item mb-4'>
                            <div className='product-img'>
                                <img className='img-fluid w-100' src='	https://pnecommerce.netlify.app/img/product-4.jpg' alt='' />
                            </div>
                            <div className=' product-text text-center py-4'>
                                <a className='text-decoration-none' href>Product Name Goes Here</a>
                                <div className='d-flex align-items-center justify-content-center mt-2'>
                                    <h5>$123.00</h5>
                                    <h6 className='text-muted'><del>$123.00</del></h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-center mb-1'>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                    <small className='fa fa-star text-primary mr-1'></small>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product end here */}

        </>
    )
}

export default Shopdetail
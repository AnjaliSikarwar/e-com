import React from 'react'

function Shop() {
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



            {/* Shop Start */}

            <div className='container mt-4'>
                <div className='row'>

                    {/* Shop Sidebar Start */}
                    <div className='col-lg-3 col-md-4 filter'>

                        {/* Price Start */}
                        <h5 className='section-title mb-3'>
                            <span>FILTER BY PRICE</span>
                        </h5>

                        <div className='filter-price'>
                            <form>
                                <div className='custom-control custom-checkbox d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-all' />
                                    <label className='custom-control-label' for='price-all'>All Price</label>
                                    <span className=' custom-control-span'>1000</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>$0 - $100</label>
                                    <span className='custom-control-span'>150</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>$100 - $200</label>
                                    <span className='custom-control-span'>295</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>$200 - $300</label>
                                    <span className='custom-control-span'>246</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>$300 - $400</label>
                                    <span className='custom-control-span'>145</span>
                                </div>


                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>$400 - $500</label>
                                    <span className='custom-control-span'>168</span>
                                </div>

                            </form>
                        </div>
                        {/* Price End */}



                        {/* Color Start */}
                        <h5 className='section-title mb-3'>
                            <span>FILTER BY COLOR</span>
                        </h5>

                        <div className='filter-price'>
                            <form>
                                <div className='custom-control custom-checkbox d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-all' />
                                    <label className='custom-control-label' for='price-all'>All Price</label>
                                    <span className=' custom-control-span'>1000</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>Black</label>
                                    <span className='custom-control-span'>150</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>White</label>
                                    <span className='custom-control-span'>295</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>Red</label>
                                    <span className='custom-control-span'>246</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>Blue</label>
                                    <span className='custom-control-span'>145</span>
                                </div>


                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>Green</label>
                                    <span className='custom-control-span'>168</span>
                                </div>

                            </form>
                        </div>
                        {/* Color End */}



                        {/* Size Start */}
                        <h5 className='section-title mb-3'>
                            <span>FILTER BY SIZE</span>
                        </h5>

                        <div className='filter-price'>
                            <form>
                                <div className='custom-control custom-checkbox d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-all' />
                                    <label className='custom-control-label' for='price-all'>All Price</label>
                                    <span className=' custom-control-span'>1000</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>XS</label>
                                    <span className='custom-control-span'>150</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>S</label>
                                    <span className='custom-control-span'>295</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>M</label>
                                    <span className='custom-control-span'>246</span>
                                </div>

                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>L</label>
                                    <span className='custom-control-span'>145</span>
                                </div>


                                <div className='custom-control d-flex mb-3'>
                                    <input type='checkbox' className='custom-control-input' checked id='price-1' />
                                    <label className='custom-control-label' for='price-1'>XL</label>
                                    <span className='custom-control-span'>168</span>
                                </div>

                            </form>
                        </div>
                        {/* Size End */}


                    </div>
                    {/* Shop Sidebar End */}


                    {/* Shop Product Start */}

                    <div className='col-lg-9 col-md-8'>
                        <div className='row pb-3'>

                            <div className='col-12 pb-1'>
                                <div className='d-flex align-items-center justify-content-between mb-4'>
                                    <div>
                                        <button className='btn btn-sm'>
                                            <i className='fa fa-th-large'></i>
                                        </button>
                                        <button className='btn btn-sm ml-2'>
                                            <i className='fa fa-bars'></i>
                                        </button>
                                    </div>
                                    <div className='ml-2'>

                                        <div className='btn-group'>
                                            <button type='button' className='btn dropdown-toggle btn-sm' data-toggle='dropdown'>Sorting</button>
                                        </div>

                                        <div className='btn-group ml-2'>
                                            <button type='button' className='btn dropdown-toggle btn-sm' data-toggle='dropdown'>Sorting</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                                <div className='col-lg-4 col-md-4 col-sm-6 pb-1 box-3'>
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
                                    <div className='product-item mb-4'>
                                        <div className='product-img'>
                                            <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-5.jpg' alt='' />
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
                                    <div className='product-item mb-4'>
                                        <div className='product-img'>
                                            <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-6.jpg' alt='' />
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
                                    <div className='product-item mb-4'>
                                        <div className='product-img'>
                                            <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-7.jpg' alt='' />
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
                                    <div className='product-item mb-4'>
                                        <div className='product-img'>
                                            <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-8.jpg' alt='' />
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

                                <div className='col-lg-4 col-md-6 col-sm-6 pb-1'>
                                    <div className='product-item mb-4'>
                                        <div className='product-img'>
                                            <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-9.jpg' alt='' />
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



                                <div className='col-12'>
                                    <nav>
                                        <ul className='page'>
                                            <li className='page-item disabled'>
                                                <a className='page-link' href='/'>Previous</a>
                                            </li>
                                            <li className='page-item active'>
                                                <a className='page-link' href='/'>1</a>
                                            </li>
                                            <li className='page-item'>
                                                <a className='page-link' href='/'>2</a>
                                            </li>
                                            <li className='page-item '>
                                                <a className='page-link' href='/'>3</a>
                                            </li>
                                            <li className='page-item '>
                                                <a className='page-link' href='/'>Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            
                        </div>
                    </div>

                    {/* Shop Product End */}
                </div>
            </div>

            {/* Shop End */}
        </>
    )
}

export default Shop
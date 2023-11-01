import React from 'react'

function Home() {
  return (
    <>

{/* <!--Topbar Start--> */}
    <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">

            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <a className="text-body mr-3" href>About</a>
                    <a className="text-body mr-3" href>Contact</a>
                    <a className="text-body mr-3" href>Help</a>
                    <a className="text-body mr-3" href>FAQs</a>
                </div>
            </div>

            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">

                    <div className="btn-group show">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown"
                            aria-expanded="true">
                            My Account
                        </button>
                        <div className="dropdown-menu dropdown-menu-right ">
                            <button className="dropdown-item" type="button">Sign in</button>
                            <button className="dropdown-item" type="button">Sign up</button>

                        </div>
                    </div>

                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                            USD
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </div>
                    </div>

                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                            EN
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                <div className="col-lg-4">
                    <a href className="text-decoration-none">
                        <img src="image/logo.jpg" className="logo" alt=''/>
                    </a>
                </div>

                <div className="col-lg-4 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products"/>
                            <div className="input-group-append ">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-lg-4 col-6 text-right">
                    <p className="m-0">Customer Services</p>
                    <h5 className="m-0">+012 345 6789</h5>
                </div>
            </div>
        </div>
    </div>
    {/* <!--Topbar end--> */}

    {/* <!-- Navbar start --> */}
    <div className="container-fluid mb-3">
        <div className="row px-xl-5">

            
            <div className="col-lg-3 d-none d-lg-block category">
                <a href='/' className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                    data-toggle="collapse">
                    <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>

                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                    id="navbar-vertical">
                    <div className="navbar-nav w-100">
                        <div className="nav-item dropdown dropright">
                            <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses<i
                                    className="fa fa-angle-right float-right mt-1"></i>
                            </a>
                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                <a href className="dropdown-item">Men's Dresses</a>
                                <a href className="dropdown-item">Women's Dresses</a>
                                <a href className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href className="nav-item nav-link">Shirts</a>
                        <a href className="nav-item nav-link">Jeans</a>
                        <a href className="nav-item nav-link">Swimwear</a>
                        <a href className="nav-item nav-link">Sleepwear</a>
                        <a href className="nav-item nav-link">Sportswear</a>
                        <a href className="nav-item nav-link">Jumpsuits</a>
                        <a href className="nav-item nav-link">Blazers</a>
                        <a href className="nav-item nav-link">Jackets</a>
                        <a href className="nav-item nav-link">Shoes</a>
                    </div>

                </nav>
            </div>



            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0 ">
                    <a href className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 m1-n1">Shop</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a className="nav-item nav-link active" href="/">Home</a>
                            <a className="nav-item nav-link active" href="/">Shop</a>
                            <a className="nav-item nav-link active" href="/">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                    aria-expanded="false">Pages<i className="fa fa-angle-down mt-1"></i></a>
                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <a className="dropdown-item" href="/cart">Shopping cart</a>
                                    <a className="dropdown-item" href="/checkout">Checkout</a>
                                </div>
                            </div>
                            <a className="nav-item nav-link active" href="/">Contact</a>
                        </div>

                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href className="btn px-0">
                                <i className="fas fa-heart text-primary"></i>
                                <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
   
    {/* <!-- Navbar end --> */}


     



      {/* featured product Start */}
      <div className='container pt-5 pb-3'>
        <h2 className='section-title mb-4'>FEATURED PRODUCT</h2>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

        </div>
      </div>
       {/* featured product end */}



      {/* Offer start */}
      <div className='container pt-5 pt-3'>
        <div className='row'>

          <div className='col-md-6'>

            <div className='product-offer'>
              <img className='img-fluid' src='https://pnecommerce.netlify.app/img/offer-1.jpg' alt='' />

              <div className='offer-text'>
                <h6 className='text-white'>SAVE 20%</h6>
                <h3 className='text-white'>Special Offer</h3>
                <a href className='btn'>Shop Now</a>
              </div>
            </div>

            </div>


          <div className='col-md-6'>
            
          <div className='product-offer'>
              <img className='img-fluid' src='	https://pnecommerce.netlify.app/img/offer-2.jpg' alt='' />

              <div className='offer-text'>
                <h6 className='text-white'>SAVE 20%</h6>
                <h3 className='text-white'>Special Offer</h3>
                <a href className='btn'>Shop Now</a>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* Offer end */}



      {/* recent product Start */}
      <div className='container pt-5 pb-3'>
        <h2 className='section-title mb-4'>RECENT PRODUCT</h2>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

          <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
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

        </div>
      </div>
      {/* recent product end */}



      {/* Vendor start */}
      <div className='container py-5'>
        <div className='row'>
         
         <div className='col-md-2'>
         <div className='vendor-icons'>
          <div className='vendor-item'>
            <img src='https://pnecommerce.netlify.app/img/vendor-3.jpg' alt=''/>
          </div>
         </div>
         </div>
         
         
         <div className='col-md-2'>
         <div className='vendor-icons'>
          <div className='vendor-item'>
            <img src='https://pnecommerce.netlify.app/img/vendor-5.jpg' alt=''/>
          </div>
         </div>
         </div>

         
         <div className='col-md-2'>
         <div className='vendor-icons'>
          <div className='vendor-item'>
            <img src='https://pnecommerce.netlify.app/img/vendor-6.jpg' alt=''/>
          </div>
         </div>
         </div>


         
         <div className='col-md-2'>
         <div className='vendor-icons'>
          <div className='vendor-item'>
            <img src='https://pnecommerce.netlify.app/img/vendor-7.jpg' alt=''/>
          </div>
         </div>
         </div>


         
         <div className='col-md-2'>
         <div className='vendor-icons'>
          <div className='vendor-item'>
            <img src='https://pnecommerce.netlify.app/img/vendor-8.jpg' alt=''/>
          </div>
         </div>
         </div>


        <div className='col-md-2'>
         <div className='vendor-icons'>
          <div className='vendor-item'>
            <img src='https://pnecommerce.netlify.app/img/vendor-1.jpg' alt=''/>
          </div>
         </div>
         </div>

         
        
         
        </div>
      </div>

      {/* Vendor end */}


    </>
  )
}

export default Home
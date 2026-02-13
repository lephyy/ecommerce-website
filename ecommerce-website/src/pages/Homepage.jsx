import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Homepage(){
  return (
    <>
      <Navbar/>

      <div className="container-fluid">
        <div className="card text-bg-dark">
          <img src="/img/banner8.webp" className="card-img" alt="..."/>
          <div className="card-img-overlay d-flex justify-content-start align-items-center p-4"  style={{background: 'rgba(0, 0, 0, 0.5)'}}>
            <div style={{paddingLeft: '70px'}}>
              <h1 className="card-title">Welcome to Our Shop!</h1>
              <p className="card-text">Discover the latest products</p>
              <a href="/product.html" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div className="icon mr-4 align-self-start">
              <span className="icon-truck"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase"><i className="bi bi-truck"></i> Free Shipping</h2>
              <p>Enjoy hassle-free shopping with free shipping on all orders.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div className="icon mr-4 align-self-start">
              <span className="icon-refresh2"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase"><i className="bi bi-box2"></i> Free Returns</h2>
              <p>free returns for peace of mind.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon mr-4 align-self-start">
              <span className="icon-help"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase"><i className="bi bi-telephone-inbound-fill"></i> Customer Support</h2>
              <p>24/7 customer support to assist you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3 mb-3">
        <div className="row d-none d-lg-flex">
          {/* <!-- Large Screen: Grid layout (3 columns) --> */}
          <div className="col-4">
            <div className="card text-bg-dark">
              <img src="img/best1.webp" className="card-img" alt="..."/>
              <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                <h5 className="card-title">Hot Wheels Elite 64 Pandem Datsun 280ZX</h5>
                <p className="card-text">The Elite 64 series continues with a bold and intricate 1:64 version of the Pandem
                  Datsun 280ZX.</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-bg-dark">
              <img src="img/best2.webp" className="card-img" alt="..."/>
              <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                <h5 className="card-title">Hot Wheels Elite 64 Freightliner Cascadia</h5>
                <p className="card-text">Elite 64 model with a detachable trailer, working ramp, and space for six 1:64
                  vehicles.</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-bg-dark">
              <img src="img/best3.webp" className="card-img" alt="..."/>
              <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                <h5 className="card-title">Elite 64 Series Land Rover Defender 90 Pickup</h5>
                <p className="card-text">The Land Rover Defender features 35+ parts for hyper-accurate detail, capturing its
                  rugged confidence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Small and Medium screens: Carousel layout --> */}
        <div id="carouselExample" className="carousel slide d-lg-none" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card text-bg-dark">
                <img src="img/best1.webp" className="card-img" alt="..."/>
                <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                  <h5 className="card-title">Hot Wheels Elite 64 Pandem Datsun 280ZX</h5>
                  <p className="card-text">The Elite 64 series continues with a bold and intricate 1:64 version of the Pandem
                    Datsun 280ZX.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-bg-dark">
                <img src="img/best2.webp" className="card-img" alt="..."/>
                <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                  <h5 className="card-title">Hot Wheels Elite 64 Freightliner Cascadia</h5>
                  <p className="card-text">Elite 64 model with a detachable trailer, working ramp, and space for six 1:64
                    vehicles.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card text-bg-dark">
                <img src="img/best3.webp" className="card-img" alt="..."/>
                <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                  <h5 className="card-title">Elite 64 Series Land Rover Defender 90 Pickup</h5>
                  <p className="card-text">The Land Rover Defender features 35+ parts for hyper-accurate detail, capturing its
                    rugged confidence.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mb-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center pt-3 pb-3">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- Product 1 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="img/product1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body bg-light">
                <h6 className="card-title">Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h6>
                <p className="card-text">$30.00</p>
                <a href="/productdetail.html" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* <!-- Product 2 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="img/product2.jpg" className="card-img-top" alt="..."/>
              <div className="card-body bg-light">
                <h6 className="card-title">Hot Wheels Elite 64 1990 BMW 318i Touring</h6>
                <p className="card-text">$20.00</p>
                <a href="/productdetail.html" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* <!-- Product 3 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="img/product3.webp" className="card-img-top" alt="..."/>
              <div className="card-body bg-light">
                <h6 className="card-title">Hot Wheels Elite 64 Pandem Datsun 280ZX</h6>
                <p className="card-text">$20.00</p>
                <a href="/productdetail.html" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* <!-- Product 4 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="img/product4.webp" className="card-img-top" alt="..."/>
              <div className="card-body bg-light">
                <h6 className="card-title">Hot Wheels Elite 64 Series Modified ’69 Ford Mustang</h6>
                <p className="card-text">$20.00</p>
                <a href="/productdetail.html" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
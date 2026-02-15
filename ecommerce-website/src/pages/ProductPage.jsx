import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function ProductPage(){
return(
<>
  <title>Products</title>
  <Navbar/>

  <div className="container mb-5 text-center">
    <div className="row justify-content-center">
      <div className="col-md-7 text-center pt-3 pb-3">
        <h2>Products</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* <!-- Product 1 --> */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product1.jpg" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h6>
            <p className="card-text">$30.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      {/* <!-- Product 2 --> */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product2.jpg" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Elite 64 1990 BMW 318i Touring</h6>
            <p className="card-text">$20.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      {/* <!-- Product 3 --> */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product3.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Elite 64 Pandem Datsun 280ZX</h6>
            <p className="card-text">$20.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      {/* <!-- Product 4 --> */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product4.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Elite 64 Series Modified ’69 Ford Mustang</h6>
            <p className="card-text">$20.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product5.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">RLC Exclusive 2021 Pagani Huayra R</h6>
            <p className="card-text">$30.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product6.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Collectors Hot Wheels Formula 1 Vehicle</h6>
            <p className="card-text">$25.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product7.jpg" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels x Daniel Arsham Eroded Ford Mustang</h6>
            <p className="card-text">$70.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product8.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Premium Car Culture 2-Pack '94 Nissan Primera & Nissian R390 GTI</h6>
            <p className="card-text">$13.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product9.jpg" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Boulevard Lamborghini Countach LPI 800-4</h6>
            <p className="card-text">$6.50</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product10.jpg" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Matchbox Collectors Mercedes-Benz SLR McLaren</h6>
            <p className="card-text">$25.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product11.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Matchbox Collectors Matchbox 1993 BMW E30 M3</h6>
            <p className="card-text">$25.00</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <img src="/img/product12.webp" className="card-img-top" alt="..."/>
          <div className="card-body bg-light">
            <h6 className="card-title">Hot Wheels Car Culture Circuit Legends BMW 320 Group 5</h6>
            <p className="card-text">$6.50</p>
            <a href="/product-detail" className="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</>
)
}

import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export function ProductDetailPage(){

  const [quantity,setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 0)); // prevent negative
  };

  return(
    <>
      <title>Product Detail</title>
      <Navbar/>

      <div className="container mb-5">
        <div className="row">
          {/* <!-- Image Column --> */}
          <div className="col-12 col-lg-6 mb-3">
            <img src="/img/best1.webp" className="img-fluid rounded-start" alt="..."/>
          </div>
          
          {/* <!-- Content Column --> */}
          <div className="col-12 col-lg-6">
              <h4>Hot Wheels Collectors</h4>
              <h4>Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h4>
              <p>$30.00</p>
              
              <div style={{lineHeight: 1.6, color: "#333"}}>
                <p>
                  <strong>
                    The Elite 64 series continues with a bold and intricate 1:64 version of the Pandem Datsun 280ZX. 
                    Hot Wheels partnered with Pandem/Rocket Bunny to develop the die-cast and real-life car that was featured at SEMA in November 2023. 
                    Our tribute features full-metal construction, negative-camber Real Riders wheels, and realistic decos. Made from 20+ separate pieces, 
                    this is a hyper-accurate tribute to the “Formula Z,” a custom build designed to be a drift-racing king.
                  </strong>
                </p>
                <ul style={{paddingLeft: "20px"}}>
                  <li><strong>Hot Wheels® Elite 64™ Pandem Datsun 280ZX</strong></li>
                  <li><strong>Body Color: White</strong></li>
                  <li><strong>Graphics: Authentic logos</strong></li>
                  <li><strong>Body Type: ZAMAC</strong></li>
                  <li><strong>Wheels: Gold Real Riders wheels with white hubs</strong></li>
                  <li><strong>Base: Full-metal, matte black painted chassis</strong></li>
                  <li><strong>Window Color: Medium smoke tint</strong></li>
                  <li><strong>Interior Color: Black</strong></li>
                  <li><strong>Scale: 1:64</strong></li>
                </ul>
                <div className="quantity-wrapper">
                  <button className="btn btn-danger decrease" onClick={decreaseQty} disabled={quantity === 1}>
                    <i className="fa-solid fa-minus"></i>
                  </button>

                  <span className="qty-value">{quantity}</span>

                  <button className="btn btn-danger increase" onClick={increaseQty}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <Link to="/cart" className="btn btnCart">Add to cart</Link>
              </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-7 pt-3 pb-3">
            <h2>You May Also Like</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- Product 1 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="/img/product1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body bg-light text-center">
                <h6 className="card-title">Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h6>
                <p className="card-text">$30.00</p>
                <Link to="/product-detail" className="btn btn-primary">Add to cart</Link>
              </div>
            </div>
          </div>
          {/* <!-- Product 2 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="/img/product2.jpg" className="card-img-top" alt="..."/>
              <div className="card-body bg-light text-center">
                <h6 className="card-title">Hot Wheels Elite 64 1990 BMW 318i Touring</h6>
                <p className="card-text">$20.00</p>
                <Link to="/product-detail" className="btn btn-primary">Add to cart</Link>
              </div>
            </div>
          </div>
          {/* <!-- Product 3 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="/img/product7.jpg" className="card-img-top" alt="..."/>
              <div className="card-body bg-light text-center">
                <h6 className="card-title">Hot Wheels x Daniel Arsham Eroded Ford Mustang</h6>
                <p className="card-text">$70.00</p>
                <Link to="/product-detail" className="btn btn-primary">Add to cart</Link>
              </div>
            </div>
          </div>
          {/* <!-- Product 4 --> */}
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
              <img src="/img/product4.webp" className="card-img-top" alt="..."/>
              <div className="card-body bg-light text-center">
                <h6 className="card-title">Hot Wheels Elite 64 Series Modified ’69 Ford Mustang</h6>
                <p className="card-text">$20.00</p>
                <Link to="/product-detail" className="btn btn-primary">Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
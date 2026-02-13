import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function CheckoutPage(){
  return(
    <>
      <title>Checkout</title>

      <Navbar/>

      <div className="container my-5">
        <h2 className="mb-4">Shopping Cart</h2>
        {/* <!-- Cart Items --> */}
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <img src="public/img/best1.webp" className="img-fluid rounded-start" alt="Product 1"/>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h5>
                    <p className="card-text">$30.00</p>
                    <div className="d-flex align-items-center">
                      <input type="number" className="form-control w-25 me-3" value="1" min="1"/>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <img src="public/img/product5.webp" className="img-fluid rounded-start" alt="Product 2"/>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">RLC Exclusive 2021 Pagani Huayra R</h5>
                    <p className="card-text">$30.00</p>
                    <div className="d-flex align-items-center">
                      <input type="number" className="form-control w-25 me-3" value="1" min="1"/>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Cart Summary --> */}
          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Summary</h4>
                <hr/>
                <p className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span>$60.00</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Tax (10%):</span>
                  <span>$5.50</span>
                </p>
                <hr/>
                <h5 className="d-flex justify-content-between">
                  <span>Total:</span>
                  <span>$65.50</span>
                </h5>
                <a href="#" className="btn btn-primary w-100 mt-3">Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
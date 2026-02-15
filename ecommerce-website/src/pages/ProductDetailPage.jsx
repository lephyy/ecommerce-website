import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function ProductDetailPage(){
  return(
    <>
      <title>Product Detail</title>
      <Navbar/>

      <div class="container mb-5">
        <div class="row">
          {/* <!-- Image Column --> */}
          <div class="col-12 col-lg-6 mb-3">
            <img src="/img/best1.webp" class="img-fluid rounded-start" alt="..."/>
          </div>
          
          {/* <!-- Content Column --> */}
          <div class="col-12 col-lg-6">
              <h4>Hot Wheels Collectors</h4>
              <h4>Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h4>
              <p>$30.00</p>
              
              <div style="line-height: 1.6; color: #333;">
                <p>
                  <strong>
                    The Elite 64 series continues with a bold and intricate 1:64 version of the Pandem Datsun 280ZX. 
                    Hot Wheels partnered with Pandem/Rocket Bunny to develop the die-cast and real-life car that was featured at SEMA in November 2023. 
                    Our tribute features full-metal construction, negative-camber Real Riders wheels, and realistic decos. Made from 20+ separate pieces, 
                    this is a hyper-accurate tribute to the “Formula Z,” a custom build designed to be a drift-racing king.
                  </strong>
                </p>
                <ul style="padding-left: 20px;">
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
                <a href="#" class="btn btn-primary mt-3">Add to cart</a>
              </div>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <div class="row">
          <div class="col-md-7 pt-3 pb-3">
            <h2>You May Also Like</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          {/* <!-- Product 1 --> */}
          <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <img src="/img/product1.jpg" class="card-img-top" alt="..."/>
              <div class="card-body bg-light text-center">
                <h6 class="card-title">Hot Wheels Elite 64 Mod Shop '94 Land Rover Discovery</h6>
                <p class="card-text">$30.00</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* <!-- Product 2 --> */}
          <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <img src="/img/product2.jpg" class="card-img-top" alt="..."/>
              <div class="card-body bg-light text-center">
                <h6 class="card-title">Hot Wheels Elite 64 1990 BMW 318i Touring</h6>
                <p class="card-text">$20.00</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* <!-- Product 3 --> */}
          <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <img src="/img/product7.jpg" class="card-img-top" alt="..."/>
              <div class="card-body bg-light text-center">
                <h6 class="card-title">Hot Wheels x Daniel Arsham Eroded Ford Mustang</h6>
                <p class="card-text">$70.00</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* <!-- Product 4 --> */}
          <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <img src="/img/product4.webp" class="card-img-top" alt="..."/>
              <div class="card-body bg-light text-center">
                <h6 class="card-title">Hot Wheels Elite 64 Series Modified ’69 Ford Mustang</h6>
                <p class="card-text">$20.00</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
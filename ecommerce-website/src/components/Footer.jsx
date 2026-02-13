export function Footer(){
  return(
    <footer className="bg-dark text-white py-5 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-4">
          <h5 className="font-weight-bold mb-3">Hot Wheels</h5>
          <p>We are passionate about Hot Wheels, offering a wide selection of die-cast cars and tracks for collectors
            and enthusiasts of all ages.</p>
        </div>

        <div className="col-md-3 mb-4">
          <h5 className="font-weight-bold mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none">Home</a></li>
            <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
            <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h5 className="font-weight-bold mb-3">Follow Us</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none">Facebook</a></li>
            <li><a href="#" className="text-white text-decoration-none">Instagram</a></li>
            <li><a href="#" className="text-white text-decoration-none">Tiktok</a></li>
            <li><a href="#" className="text-white text-decoration-none">Telegram</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h5 className="font-weight-bold mb-3">Contact Us</h5>
          <p>For any inquiries, feel free to reach out to us at <a href="mailto:support@hotwheelsstore.com"
              className="text-white">support@hotwheelsstore.com</a>.</p>
        </div>
      </div>

      <hr className="my-4 border-white opacity-25"/>

      <div className="text-center">
        <p className="mb-0">&copy; 2024 Hot Wheels Store. All Rights Reserved.</p>
      </div>
    </div>
    </footer>
  )
}
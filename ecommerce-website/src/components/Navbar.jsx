export function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container ">
      <a className="navbar-brand" href="#">
        <img src="/img/logo.png" alt="" width="150px" height="60px"/>
      </a>

      {/* <!-- Icons visible only on small screens, in front of the navbar toggle button --> */}
      <div className="d-flex ms-auto d-lg-none">
        <a className="mt-2" href="#"><i className="bi bi-search fa-lg me-3"></i></a>
        <a className="mt-2" href="#"><i className="bi bi-person-circle fa-lg me-3"></i></a>
        <a className="mt-2" href="/cart.html"><i className="bi bi-cart fa-lg me-3"></i></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>



      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link active sand-semibold" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/product.html">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/aboutus.html">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/contactus.html">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* <!-- Icons visible only on larger screens --> */}
      <div className="d-none d-lg-block ms-3"> 
        <a href="#"><i className="bi bi-search fa-lg ms-3"></i></a>
        <a href="#"><i className="bi bi-person-circle fa-lg ms-3"></i></a>
        <a href="/cart.html"><i className="bi bi-cart fa-lg ms-3"></i></a>
      </div>
    </div>
    </nav>
  )
}
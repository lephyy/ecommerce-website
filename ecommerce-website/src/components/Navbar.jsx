import { Link } from "react-router";

export function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container ">
      <Link className="navbar-brand" to="/">
        <img src="/img/logo.png" alt="" width="150px" height="60px"/>
      </Link>

      {/* <!-- Icons visible only on small screens, in front of the navbar toggle button --> */}
      <div className="d-flex ms-auto d-lg-none">
        <Link className="mt-2" to="/search"><i className="bi bi-search fa-lg me-3"></i></Link>
        <Link className="mt-2" to="/profile"><i className="bi bi-person-circle fa-lg me-3"></i></Link>
        <Link className="mt-2" to="/checkout"><i className="bi bi-cart fa-lg me-3"></i></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>



      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li className="nav-item">
            <Link className="nav-link active sand-semibold" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/product">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* <!-- Icons visible only on larger screens --> */}
      <div className="d-none d-lg-block ms-3"> 
        <Link to="/search"><i className="bi bi-search fa-lg ms-3"></i></Link>
        <Link to="/profile"><i className="bi bi-person-circle fa-lg ms-3"></i></Link>
        <Link to="/checkout"><i className="bi bi-cart fa-lg ms-3"></i></Link>
      </div>
    </div>
    </nav>
  )
}
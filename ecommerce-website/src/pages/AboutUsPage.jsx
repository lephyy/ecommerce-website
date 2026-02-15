import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";


export function AboutUsPage(){
  return(
    <>
      <title>About Us</title>
      <Navbar/>

      <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
                <h1 className="text-center mb-4">About Us</h1>
                <p className="lead text-center mb-4">Welcome to Hot Wheels Store - your ultimate destination for die-cast cars and all things Hot Wheels! Whether you're a seasoned collector or a new enthusiast, we have something exciting just for you.</p>

                <h2>Our Story</h2>
                <p>At Hot Wheels Store, we’re passionate about Hot Wheels cars and have been ever since the first die-cast vehicle hit the streets in 1968. What started as a hobby quickly turned into a business focused on bringing the thrill of Hot Wheels into the hands of enthusiasts around the world.</p>

                <p>We are a team of passionate collectors who share a love for both vintage and modern Hot Wheels models. Our goal is to offer a wide selection of die-cast cars, exclusive series, and limited edition models to help collectors complete their collections.</p>

                <h2>Our Mission</h2>
                <p>Our mission is simple: to provide the best selection of Hot Wheels cars and accessories at competitive prices, with excellent customer service. We want to make your Hot Wheels shopping experience enjoyable, easy, and memorable. Whether you're searching for the rarest Hot Wheels or just starting your collection, we are here to help!</p>

                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Wide Selection:</strong> We offer a vast collection of Hot Wheels, from iconic classic models to the latest releases.</li>
                    <li><strong>Exclusive Items:</strong> Find rare and limited edition Hot Wheels that aren’t available anywhere else.</li>
                    <li><strong>Fast Shipping:</strong> We ship globally with fast, reliable service to get your Hot Wheels to you as soon as possible.</li>
                    <li><strong>Passion for Collecting:</strong> Our team consists of dedicated Hot Wheels fans who understand the value and excitement of collecting. We’re here to help you find that perfect car.</li>
                </ul>

                <h2>Our Values</h2>
                <p>At Hot Wheels Store, we are committed to delivering exceptional customer service, authenticity, and quality in every car we sell. We believe in fostering a community of Hot Wheels lovers who share in the excitement of collecting. Whether it’s the hunt for a rare model or showing off your latest acquisition, we’re here to support your passion.</p>

                <h2>Join the Hot Wheels Community</h2>
                <p>We invite you to browse our shop, follow us on social media, and become part of the growing Hot Wheels community. Connect with fellow collectors, share your passion, and stay up to date with the latest releases and events. Let’s celebrate the love for Hot Wheels together!</p>

                <div className="text-center mt-4">
                    <Link to="/product" className="btn btn-primary btn-lg">Start Shopping Now</Link>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
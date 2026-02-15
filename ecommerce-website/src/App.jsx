import { Routes,Route } from "react-router";
import { HomePage } from "./pages/Homepage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
      <Route path="about-us" element={<AboutUsPage/>}/>
      <Route path="contact-us" element={<ContactUsPage/>}/>
      <Route path="product-detail" element={<ProductDetailPage/>}/>
      <Route path="product" element={<ProductPage/>}/>
    </Routes>
    </>
  )
}

export default App

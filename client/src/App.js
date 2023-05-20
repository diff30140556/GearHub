import React from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import ProductPage from "./pages/ProductPage/index";
import LandingPage from "./pages/LandingPage/index";
import LoginPage from "./pages/LoginPage/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <LoginPage></LoginPage> */}
      <LandingPage />

      <Footer />
    </div>
  );
}

export default App;

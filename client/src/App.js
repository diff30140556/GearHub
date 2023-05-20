import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import LandingPage from './pages/LandingPage/index';
import ProductPage from './pages/ProductPage/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Header />
      {/* <LandingPage /> */}
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;

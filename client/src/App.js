import React from 'react';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
  height: 700,
  background: 'url("https://images.unsplash.com/photo-1599792215800-042be231c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80") center no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

function App() {
  return (
    <div className="App">
      <header className='sticky-top'>
        <Navbar />
      </header>
      <div style={divStyle} className="content"></div>
      <Footer />
    </div>
  );
}

export default App;

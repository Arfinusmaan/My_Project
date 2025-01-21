import React from 'react';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './hOver.css';
import ProductScreen from './Screen/ProductScreen';

function App() {
  return (
    <div style={{backgroundcolor:'#fce4ec', minHeight:'100vh' }}>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

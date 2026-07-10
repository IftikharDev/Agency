import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}
export default App; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

const App = () => (
  <Router>
    <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </div>
  </Router>
);

export default App;

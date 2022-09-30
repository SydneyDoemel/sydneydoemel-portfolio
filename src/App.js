import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <div className="App">
    <Nav />
    <Routes>
    <Route path='/sydneydoemel-portfolio/' element={<Home />}/>
    <Route path='/sydneydoemel-portfolio/about' element={<About />}/>
    <Route path='/sydneydoemel-portfolio/portfolio' element={<Portfolio />}/>
    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

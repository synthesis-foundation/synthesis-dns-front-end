import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/imgs/logo-synthesis-dns.png';
import moon from './assets/imgs/moon-icon.svg';
import { Button } from './components/Button';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <header className="header container">
        <div className="header__logo-wrapper">
          <div className="header__logo-stroke">
            <img src={logo} className="header__logo" alt="Synthesis"/>
          </div>
          <span className="header__logo-text"> / DNS</span>
        </div>
        <div className="header__buttons-block">
          <Button padding={"14px 25px"} color={"#fff"} margin={"0 40px 0 0"}>
            About
          </Button>
          <Button padding={"14px 60px"} color={"#52C395"} textColor={"#fff"} margin={"0 29px 0 0"}>
            Connect wallet
          </Button>
          <img src={moon} alt="moon"/>
        </div>
      </header>
      <main className="main">
        <BrowserRouter>
            <Routes>
              <Route path='' element={<Home/>}/>
              <Route path='transactions'/>
            </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

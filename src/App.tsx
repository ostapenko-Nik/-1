import { useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Fodd from './components/food2';
import Fod from './components/ food';
import './App.css';
import Day from "./components/nav/day";
import Menu from "./components/nav/menu";
import Supp from "./components/nav/support";
function App() {
  const [food, setFood] = useState<null | string>(null);
  const location = useLocation();

  const text = 'Мы верим, что вкусная еда и уютная атмосфера могут сделать день особенным. В нашем кафе вы найдёте не только ароматный кофе и свежую выпечку, но и настоящие традиционные казахские блюда, приготовленные с любовью. Мы ценим каждого гостя и стараемся, чтобы каждый визит оставлял приятные впечатления.';

  const HandleClick = () => {
    setFood(prev => prev ? null : text);
  };

  const isHome = location.pathname === "/";

  return (
    <>
      <nav className="nav-a">
        <Link to="/" className='name'><strong>CAFE AND COFFE</strong></Link>

        <div className="div-nav"><Link to="/" className="a-nav">Главная</Link></div>
        <div className="div-nav"><Link to="/Menu" className="a-nav">Меню</Link></div> 
        <div className="div-nav"><Link to="/Day" className="a-nav">Блюдо Дня</Link></div>
        <div className="div-nav"><Link to="/Support" className="a-nav">Поддержка</Link></div>
      </nav>
      {isHome && (
        <>
          <div className="did">
            <header className="header">  
              <div className="black">
                <div className="dis">
                  <div className="na">
                    <h1>Семейное кафе</h1>
                    <button className="but-1" onClick={HandleClick}>больше информации</button>
                  </div>
                  <div className="info">{food}</div>
                </div>
              </div>
            </header>
          </div>

          <h2>Традиционные казахские блюда</h2>
          <Fod />
          <br /><br /><br />
          <Fodd />
          <br /><br />
          <Fod />
        </>
      )}
      <Routes>
        <Route path="/Day" element={<Day />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Support" element={<Supp />} />
      </Routes>
    </>
  );
}

export default App;

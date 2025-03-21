import logo from './Patenca.png';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';  

const App = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>

      <div class="nav_background">
    <nav>
      <div class="logo">
        <a href="#"><span>My</span>cons</a>
      </div>
      <div class="buttons">
        <a href="#" class="login">Log in</a>
        <a href="#" class="btn">Register</a>
      </div>
    </nav>
  </div>
  <div class="container">
    
    <div class="content">
      <h2>Bring AI to your<br></br>daily financial decisions</h2> 
      <p>With your ai consultant having access to your monthly incomes and expenses, he can help you decide wether a certian purchase or investment is wirth it at the moment.</p>
    </div>
    <div class="link">
      <a href="#" class="hire">Try It</a>
    </div>
  </div>

      </div>
      

    
  );
}

export default App;
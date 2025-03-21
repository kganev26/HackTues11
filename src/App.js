import logo from './Patenca.png';
import './App.css';
import Chat from './Chat';
import { useState } from 'react';
import { Link } from 'react-router-dom';  

const App = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  return (
    <div>
      
      <li>
            <Link to="/">Contact</Link>
          </li>
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
      <p>With your ai consultant having access to your monthly incomes and expenses, he can help you decide wether a certian purchase or investment is really worth it.</p>
    </div>
    <div class="link">
      <a href="#" class="hire">Try It</a>
    </div>
  </div>
  <div class="contact">
    <div class="content">
    <h1>Contact Us</h1>
    <div class="contactlinks">
      <a href="https://mail.google.com/mail/?view=cm&to=rozovitepatenca@gmail.com&subject=Your%20Subject&body=Your%20Message" target="_blank">Email Us</a><br></br>
      <a href="https://x.com/Rozovitepatenca" target="_blank">Follow us on X</a><br></br>
      <a href="https://www.instagram.com/rozovitepatenca/" target="_blank">Follow us on Instagram</a>
    </div>
    </div>
  </div>
  <div>
    <Chat />
  </div>
  </div>
  

  );
}

export default App;
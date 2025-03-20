import logo from './Patenca.png';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  return (
    <div>
      <title> AI consultant </title>
      <h1>Your balance:</h1>
     
      <div className="separator"></div>
      <br />
     <div className='income-expense-container'>
        <h1> Income:</h1>
        <h1> Expense:</h1>
     </div>
     <div> <img src="https://cdn-icons-png.flaticon.com/512/3797/3797961.png" alt="language" className="language"/> </div>
     
      <div  className='ai-container'>
      <a href="our_ai.js"><img className='ai' src="/Screenshot 2025-03-20 130759.png" alt="our AI" /></a>
      </div>
      

    </div>
  );
}

export default App;


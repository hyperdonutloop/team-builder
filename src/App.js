import React, { useState } from 'react';
import './App.css';
import TeamForm from "./Components/TeamForm";


function App() {
  const [member, setMember] = useState([
    {
      name: 'Ryan Renteria',
      email: 'ryan@superhuman.com',
      role: 'wizard',

  },

  {
    name: 'Albus Dumbledore',
    email: 'albus@superhuman.com',
    role: 'HeadMaster',
  },

  {
    name: 'Severus Snape',
    email: 'severus@superhuman.com',
    role: 'Sr. Engineer', 
  }

]);

  return (
    <div className="App">
      <TeamForm />
      
    </div>
  );
}

export default App;

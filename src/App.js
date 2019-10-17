import React, { useState } from 'react';
import './App.css';
import Members from "./Components/Members";
import Form from "./Components/Form";

function App() {

  const [teamMembers, setTeamMembers] = useState([

  
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
  },

  

]);

  return (
    <div className="App">
     <Members membersList={teamMembers} />
     <Form />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [student, setStudent] = useState({
    id: '101399114',
    name: 'Parthkumar Patel',
    college: 'George Brown College, Toronto'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <p>React JS Programming Week09 Lab exercise</p>
        <p>{student.id}</p>
        <p>{student.name}</p>
        <p>{student.college}</p>
      </header>
    </div>
  );
}

export default App;

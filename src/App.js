import React, { useState, useEffect } from 'react';

import request from 'umi-request';

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request('https://jsonplaceholder.typicode.com/todos/', {
     method: 'get',
    })
    .then(response => {
      console.log('fetch data');
      setData(response);
    })
    .catch(error => {
      console.log("report error: ", error);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {data.map(item => {
            return (
            <li key={item.id}>{item.title}</li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;

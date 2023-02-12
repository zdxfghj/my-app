import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const elem = (
  <div>
    <button>Click</button>
    <h2>Hello World!</h2>
  </div>
);
root.render(
 elem,
 document.getElementById('root')
);



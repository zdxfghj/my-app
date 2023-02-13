
import { StrictMode } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () =>{
  return <h2>Hello World!</h2>
}

const Field = () =>{
  const styleField = {
    width: '300px'
  };

  return <input placeholder='Type here' type="text" style={styleField} />
}

function Btn(){
  const logo = "log in";
  let logger = true;
  function res(){
    return 'second level';
  }

  return <button>Click {logo} {res()} {logger? "enter": logo} </button>
}


function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;


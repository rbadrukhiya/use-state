import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const  App = () => {
  const [user , setuser]= useState("asdf");
  const [name , setname] =   useState('hello');


const btnhandler = () =>{
  alert(name);
  setuser(name)
}

  return (    
    <div className="App">
      <h1>{name}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1> 
      <h1>{user}</h1>
      <h1>{user}</h1>
      <h1>{user}</h1>

      <input type="text" onChange={(e) => {setname(e.target.value)}}/>
      <input type="button" value="click here" onClick={btnhandler} />
      
    </div>
  );
}

export default App;

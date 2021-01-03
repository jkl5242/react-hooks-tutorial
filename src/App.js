import './App.css';
import React, { useEffect, useState, useRef } from "react";
import { useForm } from './useForm';
import { useFetch } from './useFetch';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''});

  const [showHello, setShowHello] = useState(true);

  const inputRef = useRef();

  const hello = useRef(() => {
    console.log("Hello");
  });


  return (
  <div>
    <>
    <button onClick={()=> setShowHello(!showHello)}>toggle</button>
    {showHello && <Hello />}
    <input ref={inputRef} name='email' value={values.email} onChange={handleChange} />
    <input placeholder="firstname" name='firstName' value={values.firstName} onChange={handleChange}/>
    <input type="password" name='password' value={values.password} onChange={handleChange}></input>
    <button onClick={()=>{
      hello.current();
      inputRef.current.focus();
    }}>focus</button>
    </>
  </div>
  );
};

export default App;

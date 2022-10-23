import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

let num = 1;
const title = "Hacker Dormitory";
function App() {
  const [msg, setMsg] = useState('');
  const [list, setList] = useState([]);

  if (localStorage.getItem('list') !== null && num === 1) {
    let aaa = JSON.parse(localStorage.getItem('list'));
    setList(aaa);
    num++;
  }


  const setMessage = (data) => {
    setMsg(data);
  }
  const setResidentsList = (data) => {
    setList(oldarray => [...oldarray, data]);
    localStorage.setItem('list', JSON.stringify([...list, data]));
  }
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setMessage={setMessage} setResidentsList={setResidentsList} />
        <Error msg={msg} />
        <ResidentsList list={list} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
  const [msg, setMsg] = useState('');
  const [list, setList] = useState([]);
  const setMessage = (data) => {
    setMsg(data);
  }
  const setResidentsList = (data) => {
    let aaa = JSON.parse(JSON.stringify(list));
    aaa.push(data);
    setList(aaa);
  }
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setMessage={setMessage} setResidentsList={setResidentsList}/>
        <Error msg={msg} />
        <ResidentsList list={list}/>
      </div>
    </div>
  );
}

export default App;

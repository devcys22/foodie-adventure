import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get('/api/data')
        .then(rex => setData(res.data))
        .catch(err => console.log(err))
  }, []);

  return (
      <div>
        값 : {data}
      </div>
  );
}

export default App;

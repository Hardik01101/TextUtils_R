import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [mode, setdark] = useState('light');
  const [label, setmode] = useState('Dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setdark('dark');
      setmode('Light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils Dark';
    }
    else {
      setdark('light');
      setmode('Dark')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils Light';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} label={label} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route> */}

          {/* <Route> */}
            <TextForm heading="Enter text below" mode={mode} showAlert={showAlert} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

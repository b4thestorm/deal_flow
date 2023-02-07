import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Root from "./Root";

const App = () => {
  return (
      <Root>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Root>
  );
}

export default App;

// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from "../src/pages/login";
import Home from "../src/pages/home";

const App = () => {
 const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
          <Route path="/login" element={!token? <Login setToken = {setToken} /> : <Navigate to='/'/>} />
          <Route path="/" element={ token?<Home setToken = {setToken} />: <Navigate to='/login'/>} />
      </Routes>
    </Router>
  );
};

export default App;

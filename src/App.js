import './App.css';
import { Result } from './pages/Result/Result';
// import { Signup } from './Signup.jsx';
import {Home, Login,Quiz, Signup} from "./pages/index"
import { Routes, Route } from "react-router-dom";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";


function App() {

  return (
<div className="app">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/auth/login" element={<Login />} />
<Route path="/auth/signup" element={<Signup />} />

<Route path="/quiz" element={<Quiz />} />
<Route path="/result" element={<Result/>} />
</Routes>
 </div>
  );
}

export default App;

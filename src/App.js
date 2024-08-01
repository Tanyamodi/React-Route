import "./App.css";
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute"

function App() {

  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Hello in App")
    setIsLoggedIn(false)
  }, [])

  return (
    < div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
          <Dashboard setIsLoggedIn={setIsLoggedIn} />
        } />
      </Routes>
    </ div >
  )

}

export default App;
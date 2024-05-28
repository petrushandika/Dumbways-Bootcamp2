import { useState } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import CallApi from "./test/CallApi"

function App() {
  const PrivateRoute = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)

    if (isLogin) return <Outlet/>

    return <Navigate to={"/login"}/>
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/callapi" element={<CallApi />} />
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

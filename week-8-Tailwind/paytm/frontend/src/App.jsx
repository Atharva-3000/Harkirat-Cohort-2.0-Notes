import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";

import {SendMoney} from "./pages/SendMoney";
import {Dashboard} from "./pages/Dashboard";
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

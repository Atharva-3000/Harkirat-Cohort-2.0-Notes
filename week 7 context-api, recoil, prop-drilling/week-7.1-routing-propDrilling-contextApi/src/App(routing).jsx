import "./App.css";
import React, { Suspense } from "react";
// ⚡⚡
  // Lazy loading means that the component will be loaded only when it is required, like only page 1 will be loaded when the user is on page 1, and page 2 will be loaded when the user is on page 2. rather than loading both the pages at the start.
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dashboard= React.lazy(() =>import('./components/Dashboard'))
const Landing= React.lazy(() =>import('./components/Landing'))



// useNavigate makes sure that hard reload does'nt happen
// client bundle remains same and only the content changes.
function AppRouting() {
  //  only works inside browser Router

//  Suspense API is used to wrap the lazy loaded components, so that the user can see a fallback UI while the component is being loaded.

  return (
    <div>
      <div>
        {/*   WITHOUT CLIENT SIDE RENDERING, WHOLE THING WILL BE RE SENT BY THE SERVER AND HENCE RELOADING 👇🏼👇🏼 */}
        {/* <button onClick={()=>{
      window.location.href = '/';
    }}>Landing Page</button>
    <button onClick={()=>{
      window.location.href = '/dashboard';
    }}>DashBoard</button> */}
      </div>
      <BrowserRouter>
      {/* appbar is inside browser router, since useNavigate hooks require so */}
        <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense>} 
          />
          <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} 
          />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function AppBar() {
  // this hook can only be used inside the BrowserRouter
  // hence it is used here, and is added as a component
  // inside the BrowserRouter
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        DashBoard
      </button>
    </div>
  );
}
export default AppRouting;

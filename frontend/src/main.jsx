import React from 'react';
import ReactDom from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './login_page/Login';
import "./index.css";
import Dashboard from './dashboard_page/Dashboard';

ReactDom.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element = {<Dashboard></Dashboard>} ></Route>
      </Routes>
    </BrowserRouter>
)
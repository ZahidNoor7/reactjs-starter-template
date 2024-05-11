// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
};

export default App;

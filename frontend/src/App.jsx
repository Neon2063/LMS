import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard"
import Authcontext from './context/authcontext'
import Register from "./pages/Register"

function App() {
  return (
    <Authcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
          <Route path="/student-dashboard/*" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </Authcontext>
  );
}

export default App
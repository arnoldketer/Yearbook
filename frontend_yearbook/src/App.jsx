import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Portfollio from "./components/Portfollio";
import './App.css';
import Students from "./pages/Students";
import Projects from "./pages/Projects";
import ProjectForm from "./components/ProjectForm";


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout(){
  localStorage.clear();
  return <Register />;
}

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
      path="/portfollio"
      element={
        <ProtectedRoute>
          <Portfollio />
        </ProtectedRoute>
      }
      />
      <Route
      path="/projects"
      element={
        <ProtectedRoute>
          <ProjectForm/>
        </ProtectedRoute>
      }
      />

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path='/student' element={<Students/>} />
      <Route path="/project" element={<Projects/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

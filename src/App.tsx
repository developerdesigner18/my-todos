import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTodos from "./pages/MyTodos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<MyTodos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

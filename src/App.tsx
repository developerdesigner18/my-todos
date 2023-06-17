import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTodos from "./pages/MyTodos";
import Login from "./pages/Login";
import PrivateRoutes from "./components/PrivateRoutes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<MyTodos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

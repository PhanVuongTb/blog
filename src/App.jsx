import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import LayoutWeb from "./pages/LayoutWeb";

function App() {
  const currentUser = true;
  return (
    <Routes>
      <Route path="/" element={<LayoutWeb />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<HomePage />} />
        <Route
          path="register"
          element={currentUser ? <HomePage /> : <Register />}
        />
        <Route path="login" element={currentUser ? <HomePage /> : <Login />} />
        <Route path="write" element={currentUser ? <HomePage /> : <Write />} />
        <Route
          path="settings"
          element={currentUser ? <HomePage /> : <Settings />}
        />
      </Route>
    </Routes>
  );
}

export default App;

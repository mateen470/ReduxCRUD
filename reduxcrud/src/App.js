import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import View from "./Components/ViewSingle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

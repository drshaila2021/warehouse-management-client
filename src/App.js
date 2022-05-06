import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import InventoryDetail from "./component/InventoryDetail/InventoryDetail";
import ManageInventory from "./component/ManageInventory/ManageInventory";
import AddNewItem from "./component/AddNewItem/AddNewItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/inventory/:id"
          element={<InventoryDetail></InventoryDetail>}
        ></Route>
        <Route
          path="/manageinventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;

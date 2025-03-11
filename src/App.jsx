import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouse from "./pages/Warehouse";
import Inventory from "./pages/Inventory";
import "./App.scss";

console.log(process.env.PORT);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<Warehouse />} />
          <Route path={"warehouses"} element={<Warehouse />} />
          <Route path={"inventory"} element={<Inventory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

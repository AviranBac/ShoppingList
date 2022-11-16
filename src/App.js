import './App.css';
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemExtendedData from "./components/ItemExtendedData/ItemExtendedData";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ShoppingList />} />
              <Route path="/itemExtendedData" element={<ItemExtendedData />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

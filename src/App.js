import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Producst from "./pages/Products";
import Categories from "./pages/Categories";
import NoPages from "./pages/NoPage";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/urunler" element={<Producst/>}/>
          <Route path="/kategoriler" element={<Categories/>}/>
          <Route path="/sepet" element={<Basket/>}/>
          <Route path="*" element={<NoPages/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

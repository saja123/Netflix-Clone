import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './component/FavList.js';
import Header from './component/Header';
import Footer from "./component/Footer.js";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Routes>
      <Route path='/favlist' element={<FavList />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
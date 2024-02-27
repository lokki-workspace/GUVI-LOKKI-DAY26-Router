import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from "./components/Menu";
import AllCom from "./components/All";
import FullStackDev from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>  <Menu></Menu>
      
        <Routes>
          <Route exact path="/" element={<AllCom />}></Route>
          <Route
            path="/fullStackDevelopment" element={<FullStackDev />}></Route>
          <Route path="/dataScience" element={<DataScience />}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
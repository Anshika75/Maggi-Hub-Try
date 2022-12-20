import "./App.css";
import About from "./pages/About";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import SubMenu from "./pages/SubMenu";
import { Menulist } from "./helpers/MenuList";
function App() {
  return (
    <div className="bg-[url('./assets/Background.jpg')] overflow-x-hidden h-full w-full bg-[length:100%_100%] bg-fixed flex flex-row justify-center">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/project/:id" element={<ProjectDisplay />} /> */}
          <Route path="/Menu" element={<Menu />} />
          {Menulist.map((e, k) => {
            return <Route path={"/"+e.title} element={<SubMenu path={"/"+e.title}/>} key={k} />
          })
          }
          {/* <Route path="/Beverages" element={<SubMenu/> */}

          {/* </Route> */}
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
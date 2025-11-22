// src/App.jsx
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from "./components/HeaderTop.jsx";
import NavBar from "./components/NavBar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Article.jsx"
import Article from "./pages/ArticleNew.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import PreventiveCare from "./pages/PreventiveCare.jsx";
import Nutri from "./pages/Nutri.jsx"
// import Heal from "./pages/Heal.jsx"
import Temp from "./pages/Temp.jsx"
import SignupForm from "./components/SignupForm.jsx";
import Footer from "./components/Footer.jsx"
// import BottomFooter from "./components/BottomFooter.jsx";

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <HeaderTop />
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:id" element={<Blog />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/preventive" element={<PreventiveCare />} />
          <Route path="/nutri" element={<Nutri />} />
          {/* <Route path="/heal" element={<Heal />} /> */}
          <Route path="/temp" element={<Temp />} />
        </Routes>
      <SignupForm></SignupForm>
      <Footer></Footer>
      {/* <BottomFooter></BottomFooter> */}
    </Router>
    
    </>
  );
}

export default App;

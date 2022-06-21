import { Route, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost/AddPost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/Not Found/NotFound";
import About from "./pages/About/About";
import Archive from "./pages/Archive/Archive";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
    return (
        <div className="bg-[#fff6ef]">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/blog/archive" element={<Archive />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/add-post" element={<AddPost />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

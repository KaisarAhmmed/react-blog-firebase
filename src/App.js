import { Route, Routes } from "react-router-dom";
import AddPost from "./pages/Dashboard/AddPost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/Not Found/NotFound";
import About from "./pages/About/About";
import Archive from "./pages/Archive/Archive";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SinglePost from "./pages/SinglePost/SinglePost";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Author from "./pages/Author/Author";
import RequireAuth from "./pages/Login/RequiredAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/Dashboard/UserProfile";
import Index from "./pages/Dashboard/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProfile from "./pages/Dashboard/EditProfile";
import BookmarkPost from "./pages/Dashboard/BookmarkPost";
import Register from "./pages/Register/Register";

function App() {
    return (
        <div className="bg-[#fff6ef]">
            <UserAuthContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/blog/:id" element={<SinglePost />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/author" element={<Author />}></Route>
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<Index></Index>}></Route>
                        <Route
                            index
                            path="/dashboard/profile"
                            element={
                                <RequireAuth>
                                    <UserProfile />
                                </RequireAuth>
                            }
                        ></Route>
                        <Route
                            index
                            path="/dashboard/bookmark-post"
                            element={
                                <RequireAuth>
                                    <BookmarkPost />
                                </RequireAuth>
                            }
                        ></Route>
                        <Route
                            index
                            path="/dashboard/edit-profile"
                            element={
                                <RequireAuth>
                                    <EditProfile />
                                </RequireAuth>
                            }
                        ></Route>
                        <Route
                            path="/dashboard/add-post"
                            element={
                                <RequireAuth>
                                    <AddPost />
                                </RequireAuth>
                            }
                        ></Route>
                    </Route>

                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/blog/archive" element={<Archive />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/add-post" element={<AddPost />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </UserAuthContextProvider>
            <ToastContainer />
        </div>
    );
}

export default App;

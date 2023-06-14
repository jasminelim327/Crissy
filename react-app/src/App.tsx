import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Post from "./components/Post";
import PostPage from "./components/PostPage";
import NavBar from "./components/NavBar";
import CommentSection from "./components/CommentSection";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import Blog from "./components/IntroductionPage/blog/Blog";
import { createContext, useState } from "react";

// /post/1
interface UserContextInterface { 
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextInterface>({ user: "", setUser: () => {} });

function App() {
  const [user, setUser] = useState("");
  // TODO create context provider

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/post/:id" Component={PostPage} />
            <Route path="/post/:id" />
            <Route path="/post/:id/comment" Component={CommentSection} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );

}

export default App;

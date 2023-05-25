import Message from "./Message";
import ListGroup from "./components/DiscussionForum";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Post from "./components/Post";
import PostItem from "./components/PostItem";
import PostPage from "./components/PostPage";
import NavBar from "./components/NavBar";


// /post/1

function App (){
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/post/:id" Component={PostPage} dynamic />
        <Route path="/navbar" element={<NavBar user={undefined}/>}  />



      </Routes>
  </Router>
</div>
  
;}



  export default App;
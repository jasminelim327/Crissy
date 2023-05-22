import Message from "./Message";
import ListGroup from "./components/DiscussionForum";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";


function App (){
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  </Router>
</div>
  
;}



  export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Post from "./components/Post/Post";
import PostPage from "./components/Post/PostPage";
import NavBar from "./components/NavBar";
import CommentSection from "./components/Comment/CommentSection";
import SignUp from "./components/SignupSignIn/SignUp";
import LogIn from "./components/SignupSignIn/SignIn";
import Blog from "./components/IntroductionPage/blog/Blog";
import { createContext, useEffect, useState } from "react";
import PostItem from "./components/Post/PostItem";
import { auth } from "./backend/firebase";
import { User } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface UserContextInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  displayName: string | null;
  setDisplayName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  setUser: () => {},
  displayName: null,
  setDisplayName: () => {},
});

function App() {
  // TODO create context provider
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName); // Set the display name
      } else {
        setUser(null);
        setDisplayName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ...

  const userContextValue: UserContextInterface = {
    user,
    setUser,
    displayName,
    setDisplayName,
  };


  return (
    <UserContext.Provider value={userContextValue}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/post/:id"  Component={PostPage} />
            <Route
  path="/post/:id/comment/:commentid"
  element={
    <>
      <PostPage />
      <Comment />
    </>
  }
/>
            {/* <Route path="/post/:id" element={PostItem />} /> */}
            {/* <Route path="/post/:id" /> */}
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

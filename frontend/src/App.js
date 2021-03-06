import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import ChatPage from './components/chat/ChatPage';
import AboutPage from './components/about/AboutPage';
import NewsPage from "./components/news/NewsPage";
import ContactUsPage from "./components/contact/ContactUsPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  
  const loggedInRouter = (
            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container m-0 p-0" style={{ maxWidth:"none"}}>
                    <Switch>

                        <Route path="/posts">
                            <PostsPage/>
                        </Route>

                        <Route path="/chat">
                            <ChatPage/>
                        </Route>

                        <Route path="/aboutus">
                            <AboutPage/>
                        </Route>

                        <Route exact path="/">
                          <HomePage/>
                        </Route>

                        <Route path="/news">
                          <NewsPage/>
                        </Route>
                    </Switch>


                </div>
            </Router>
  );
  return loggedInRouter;


//   return (loggedIn ? loggedInRouter : <HomePage/>);


}

export default App;

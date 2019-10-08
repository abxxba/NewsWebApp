import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/classic.css";
import Navbar from "./components/layouts/Navigation/SideNav";
import PostForm from "./components/layouts/forms/PostForm";
import CategoryForm from "./components/layouts/forms/CategoryForm";
import SourceForm from "./components/layouts/forms/SourceForm";
import RegisterationForm from "./components/layouts/forms/RegisterationForm";
import HeaderNav from "./components/layouts/Navigation/HeaderNav";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <div className="main">
          <HeaderNav />
          <Route path="/" exact component={PostForm} />
          <Route path="/category" exact component={CategoryForm} />
          <Route path="/source" exact component={SourceForm} />
          <Route path="/register" exact component={RegisterationForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;

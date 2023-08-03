import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Call from "../components/Call";
import Bandeau from "../components/Bandeau";
import BlogContent from "../components/BlogContent";
import Footer from "../components/Footer";
import Mention from "../components/Mention";

const Blog = () => {
  return (
    <div className="general">
      <div className="navbar">
        <Logo />
        <Navigation />
      </div>
      <div className="bandeauaccueil">
        <Call />
        <h1>Blog</h1>
        <Bandeau />
      </div>
      <div>
        <BlogContent />
      </div>

      <div className="footercontact">
        <Footer />
        <Mention />
      </div>
    </div>
  );
};

export default Blog;

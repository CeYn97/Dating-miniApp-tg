import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Chats from "./Chat";
import Profile from "./Profile";
import Subscribe from "./Subscribe"; 
import "../styles/App.css";
import "../styles/reset.css";
import mainLogo from "../assets/mainLogo.svg";
import TabBar from "../components/TabBar/TabBar";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="logo">
        <img
          src={mainLogo}
          alt="Logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">
        <span className="title-line">ВОПРОСЫ</span>
        <span className="title-line">ДЛЯ СВИДАНИЙ</span>
      </h1>
      <p className="author">by Настя Рыбка</p>
      <button className="start-button" onClick={() => navigate("/chats")}>Начать</button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <TabBar />
    </>
  );
};

export default App;



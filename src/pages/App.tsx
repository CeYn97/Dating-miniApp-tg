// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import '../styles/App.css';
// import React from "react";
// import "../styles/Chats.css";
// import searchIcon from "../assets/SearchIcon.svg";
// import firstAvatar from "../assets/firstAvatar.png";
// import secondAvatar from "../assets/secondAvatar.png";
// import thridAvatar from "../assets/thridAvatar.png";
// import chatsIcon from "../assets/ChatsIcon.svg"
// import buySubscribeIcon from "../assets/buySubscribe.svg"
// import ProfileIcon from "../assets/ProfileIcon.svg"
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Chats from "./Chat";
import "../styles/App.css";
import "../styles/reset.css";
import mainLogo from "../assets/mainLogo.svg";

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
};

export default App;



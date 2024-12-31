import React from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useMatch,
} from "react-router-dom";
import Chats from "./Chats";
import Profile from "./Profile";
import Subscribe from "./Subscribe";
import ChatScreen from "./ChatScreen";
import "../styles/App.css";
import "../styles/reset.css";
import mainLogo from "../assets/mainLogo.png";
import TabBar from "../components/TabBar/TabBar";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="logo">
        <img src={mainLogo} alt="Logo" className="logo-image" />
      </div>
      <h1 className="title">
        <span className="title-line">ВОПРОСЫ</span>
        <span className="title-line">ДЛЯ СВИДАНИЙ</span>
      </h1>
      <p className="author">by Настя Рыбка</p>
      <button className="start-button" onClick={() => navigate("/chats")}>
        <span>Начать</span>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  const isChatScreen = useMatch("/chat/:chatId");
  const routesWithTabBar = ["/chats", "/subscribe", "/profile"];

  const shouldShowTabBar =
    routesWithTabBar.includes(location.pathname) || Boolean(isChatScreen);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat/:chatId" element={<ChatScreen />} />
      </Routes>

      {shouldShowTabBar && <TabBar />}
    </>
  );
};

export default App;

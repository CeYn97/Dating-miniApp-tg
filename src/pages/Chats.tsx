import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Chats.css";
import "../styles/reset.css";
import searchIcon from "../assets/SearchIcon.svg";
import firstAvatar from "../assets/firstAvatar.png";
import secondAvatar from "../assets/secondAvatar.png";
import thirdAvatar from "../assets/thirdAvatar.png";
import someChatImage from "../assets/someChatIcon.svg";

const chats = [
  {
    id: 1,
    name: "Сергей",
    lastMessage: "Мне нравится, когда ты говори...",
    time: "13:50",
    avatar: firstAvatar,
  },
  {
    id: 2,
    name: "Александр Петров",
    lastMessage: "Если говорить честно, то я не ...",
    time: "11:01",
    avatar: secondAvatar,
  },
  {
    id: 3,
    name: "Артём Васильев",
    lastMessage: "Какой областью своей жизни...",
    time: "09:17",
    avatar: thirdAvatar,
  },
];

const ChatListScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleChatClick = (chatId: number) => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="container">
      <header className="searchBarContainer">
        <div className="searchBarWrapper">
          <img src={searchIcon} alt="search-icon" className="searchIcon" />
          <input type="text" placeholder="Поиск" className="searchBar" />
        </div>
        <div className="addButton">
          <span className="plus">+</span>
        </div>
      </header>

      <main className="chatList">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="chatItem"
            onClick={() => handleChatClick(chat.id)}
          >
            <div className="avatar">
              <img src={chat.avatar} alt={chat.name} className="avatarImage" />
            </div>
            <div className="chatDetails">
              <p className="chatName">{chat.name}</p>
              <p className="chatMessage">{chat.lastMessage}</p>
            </div>
            <div className="chatImageWrapper">
              <p className="chatTime">{chat.time}</p>
              <img src={someChatImage} alt="Chat" className="chatImage" />
            </div>
          </div>
        ))}
      </main>

      <div className="footer">
        <button className="inviteButton">
          <span className="inviteText">Пригласить нового игрока</span>
        </button>
      </div>
    </div>
  );
};

export default ChatListScreen;

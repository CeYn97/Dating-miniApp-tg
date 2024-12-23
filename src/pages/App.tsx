import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Chats.css'
import '../styles/gardevoir.css'
import '../styles/minireset.css'
import searchIcon from '../assets/SearchIcon.svg'
import mainLogo from "../assets/mainLogo.svg"

interface ChatItemProps {
  name: string;
  message: string;
  time: string;
  avatar: string;
  hasIcon?: boolean;
}

interface NavItemProps {
  label: string;
  icon: string;
  isActive?: boolean;
}

function ChatScreen() {
  return (
    <div className="chat-screen">
      {/* Header */}
      <div className="chat-header">
       <div className="search-container">
          <img src={searchIcon} alt="searchIcon" className='search-icon '/>
          <input type="text" placeholder="Поиск" className="search-input" />
        </div>
        <button className="add-button">+</button>
      </div>

      {/* Chat list */}
      <div className="chat-list">
        <ChatItem
          name="Сергей"
          message="Мне нравится, когда ты говори..."
          time="13:50"
          avatar="/path/to/sergey-avatar.png" // Add paths to avatars
        />
        <ChatItem
          name="Александр Петров"
          message="Если говорить честно, то я не ..."
          time="11:01"
          avatar="/path/to/alexander-avatar.png"
          hasIcon
        />
        <ChatItem
          name="Артём Васильев"
          message="Какой областью своей жизни..."
          time="09:17"
          avatar="/path/to/artem-avatar.png"
        />
      </div>

      {/* Invite button */}
      <button className="invite-button">Пригласить нового игрока</button>

      {/* Bottom navigation */}
      <div className="bottom-navigation">
        <NavItem label="Диалоги" icon="dialogs-icon" isActive />
        <NavItem label="Подписка" icon="subscription-icon" />
        <NavItem label="Профиль" icon="profile-icon" />
      </div>
    </div>
  );
}

function ChatItem({ name, message, time, avatar, hasIcon }: ChatItemProps) {
  return (
    <div className="chat-item">
      <img src={avatar} alt={name} className="avatar" />
      <div className="chat-details">
        <div className="chat-header">
          <span className="chat-name">{name}</span>
          <span className="chat-time">{time}</span>
        </div>
        <div className="chat-message">
          {message}
        </div>
      </div>
      {hasIcon && <div className="chat-icon">⚪</div>}
    </div>
  );
}

function NavItem({ label, icon, isActive }: NavItemProps) {
  return (
    <div className={`nav-item ${isActive ? 'active' : ''}`}>
      <div className={icon}></div>
      <span>{label}</span>
    </div>
  );
}

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="header">
        <img src={mainLogo} alt="Logo" className="logo" />
        <h1 className="title">
          <span className="first-line">Вопросы</span>
          для свиданий
        </h1>
        <div className="linePosition">
           <div className="line"></div>
        </div>
        <p className="author">by Настя Рыбка</p>
      </div>
         <button className="start-button" onClick={() => navigate('/chats')}>Начать</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/chats" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}

export default App;



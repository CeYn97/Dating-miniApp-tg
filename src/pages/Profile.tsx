import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import "../styles/reset.css";
import profileAvatar from "../assets/ProfileAvatar.svg";
import chatsIcon from "../assets/ChatsIcon.svg";
import buySubscribeIcon from "../assets/buySubscribe.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";

const ProfilePage: React.FC = () => {
  const [hideAge, setHideAge] = useState(false);

  const toggleHideAge = () => {
    setHideAge(!hideAge);
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="avatar-container">
          <img src={profileAvatar} alt="Avatar" className="profile-avatar" />
          
        </div>
        <h1 className="profile-name">Виктория Чурикова</h1>
        <p className="profile-info">
          Девушка {hideAge ? "Возраст скрыт" : "29 лет"}
        </p>
      </header>

      <main className="profile-details">
        <div className="input-group">
          <input type="text" id="name" className="floating-input" defaultValue="Виктория Чурикова"  />
          <label htmlFor="name" className="floating-label">ИМЯ</label>
        </div>

        <div className="input-group">
          <input type="text" id="gender" className="floating-input" defaultValue="Женский"  />
          <label htmlFor="gender" className="floating-label">ПОЛ</label>
        </div>

        <div className="input-group">
          <input type="text" id="birthdate" className="floating-input" defaultValue="23.09.1995"  />
          <label htmlFor="birthdate" className="floating-label">ДАТА РОЖДЕНИЯ</label>
        </div>

        <div className="input-group">
          <div className="toggle-container">
            <span className="toggle-label">СКРЫВАТЬ ВОЗРАСТ</span>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="hide-age-toggle"
                checked={hideAge}
                onChange={toggleHideAge}
              />
              <label htmlFor="hide-age-toggle" className="slider"></label>
            </div>
          </div>
        </div>

        <div className="input-group">
          <input type="text" id="instagram" className="floating-input" defaultValue="@viktoria_chu"  />
          <label htmlFor="instagram" className="floating-label">ИНСТАГРАМ</label>
        </div>
      </main>

      <nav className="profileBottomNavigation">
        <div className="navItem">
          <Link to="/chats" className="navLink">
            <div className="navIconWrapper">
              <img src={chatsIcon} alt="chatsIcon" className="navIcon" />
            </div>
            <p className="navLabel">Диалоги</p>
          </Link>
        </div>
        <div className="navItem">
          <Link to="/profile" className="navLink">
            <div className="navIconWrapper">
              <img src={ProfileIcon} alt="ProfileIcon" className="navIcon" />
            </div>
            <p className="navLabel">Профиль</p>
          </Link>
        </div>
        <div className="navItem">
          <Link to="/subscribe" className="navLink">
            <div className="navIconWrapper">
              <img
                src={buySubscribeIcon}
                alt="buySubscribeIcon"
                className="navIcon"
              />
            </div>
            <p className="navLabel">Подписка</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ProfilePage;



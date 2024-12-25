import React, { useState } from "react";
import "../styles/Profile.css";
import "../styles/reset.css";
import profileAvatar from "../assets/ProfileAvatar.svg";
const ProfilePage: React.FC = () => {
  const [hideAge, setHideAge] = useState(false);

  const toggleHideAge = () => {
    setHideAge(!hideAge);
  };

  return (
    <div className="container-profile">
      <div className="profileWrapper">
        <header className="profile-header">
          <div className="avatar-container">
            <img src={profileAvatar} alt="Avatar" className="profile-avatar" />
          </div>
          <h1 className="profile-name">Виктория Чурикова</h1>
          <p className="profile-info">
            Девушка <div className="dot"></div> {hideAge ? "Возраст скрыт" : "29 лет"}
          </p>
        </header>

        <main className="profile-details">
          <div className="input-group">
            <input
              type="text"
              id="name"
              className="floating-input"
              defaultValue="Виктория Чурикова"
            />
            <label htmlFor="name" className="floating-label">
              ИМЯ
            </label>
          </div>

          <div className="input-group">
            <input
              type="text"
              id="gender"
              className="floating-input"
              defaultValue="Женский"
            />
            <label htmlFor="gender" className="floating-label">
              ПОЛ
            </label>
          </div>

          <div className="input-group">
            <input
              type="text"
              id="birthdate"
              className="floating-input"
              defaultValue="23.09.1995"
            />
            <label htmlFor="birthdate" className="floating-label">
              ДАТА РОЖДЕНИЯ
            </label>
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

          <div className="last-input">
            <input
              type="text"
              id="instagram"
              className="floating-input"
              defaultValue="@viktoria_chu"
            />
            <label htmlFor="instagram" className="floating-label">
              ИНСТАГРАМ
            </label>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;

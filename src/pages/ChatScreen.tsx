import React from "react";
import "../styles/ChatScreen.css";
import "../styles/reset.css";
import firstAvatar from "../assets/firstAvatar.png";
import leftCartLogo from "../assets/leftSideCartLogo.svg";
import rightCartLogo from "../assets/rightSideCartLogo.svg";
import viewStatus from "../assets/viewStatus.svg";
import sendMessagedButton from "../assets/sendButton.svg";
import dropNewCart from "../assets/dropCartButton.svg";

const ChatScreen: React.FC = () => {
  return (
    <div className="chat-screen">
      <div className="first-question__card">
        <div className="wrapper-first__question">
          <p className="first-question__text">
            Какой областью своей жизни <br /> ты абсолютно доволен, <br /> а
            какая вызывает тревогу?
          </p>
          <div className="question-footer">
            <div className="question-number">
              <img src={leftCartLogo} alt="leftCartLogo" />
              <div className="first-number__circle">
                <span>21</span>
              </div>
              <img src={rightCartLogo} alt="rightCartLogo" />
            </div>
          </div>
        </div>
      </div>

      <div className="message-block">
        <div className="received-message">
          <div className="first-message">
            <p className="received-message__text">
              Мне очень нравится путешествовать) и я рад, что моя работа
              позволяет это делать) а вот личная жизнь огорчает...
            </p>
            <img
              src={firstAvatar}
              alt="Avatar"
              className="profile-avatar__user"
            />
          </div>
          <span className="received-message__time">11:06</span>
        </div>

        <div className="sent-message">
          <div className="wrapper-sent__message">
            <div className="second-message">
              <p className="sent-message__text">
                Меня тоже не устраивает моя личная жизнь😭
              </p>
            </div>
          </div>
          <div className="wrapper-status">
            <img src={viewStatus} alt="View-status" />
            <span className="sent-message__time">11:06</span>
          </div>
        </div>
      </div>

      <div className="second-question__card">
        <div className="wrapper-second__question">
          <p className="second-question__text">
            Какие мои слова или <br /> действия тебя заводят ?
          </p>
          <div className="question-footer">
            <div className="question-number">
              <img src={leftCartLogo} alt="leftCartLogo" />
              <div className="second-number__circle">
                <span>22</span>
              </div>
              <img src={rightCartLogo} alt="rightCartLogo" />
            </div>
          </div>
        </div>
      </div>

      <div className="input-container">
        <div className="wrapper-input">
          <input
            type="text"
            id="text-input"
            className="text-input"
            placeholder="Напиши ответ)))"
          />
          <button className="send-button">
            <img
              src={sendMessagedButton}
              alt="Отправить"
              className="sendButton"
            />
          </button>
        </div>
        <div className="drop-button">
          <button className="drop-new-cart">
            <img src={dropNewCart} alt="Удалить" className="dropButton" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;

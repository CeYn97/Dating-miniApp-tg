// import './App.css'
// import {BrowserRoute as Router} from "react-router-dom"

// function App() {

//   return (
//     <>
//       <Router>
//         <div className="app">

//         </div>
//       </Router>
//     </>
//   )
// }

// export default App
import './App.css';
import './gardevoir.css'
import './minireset.css'
import mainLogo from "./assets/mainLogo.svg"


function miniApp() {
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
        <button className="start-button">Начать</button>
    </div>
  );
}

export default miniApp;


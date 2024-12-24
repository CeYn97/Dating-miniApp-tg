import { NavLink } from "react-router-dom";
import "./TabBar.css";

export default function TabBar() {
  return (
    <nav className="bottomNavigation">
      <div className="navItem">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
          to="/chats"
        >
          <div className="navIconWrapper">
            <svg
              className="navIcon"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.9699 17.2384L19.3599 20.3984C19.4599 21.2284 18.5699 21.8084 17.8599 21.3784L14.3999 19.3184C14.1599 19.1784 14.0999 18.8784 14.2299 18.6384C14.7299 17.7184 14.9999 16.6784 14.9999 15.6384C14.9999 11.9784 11.8599 8.99845 7.99989 8.99845C7.20989 8.99845 6.43989 9.11845 5.71989 9.35845C5.34989 9.47845 4.98989 9.13845 5.07989 8.75845C5.98989 5.11845 9.48989 2.40845 13.6699 2.40845C18.5499 2.40845 22.4999 6.09845 22.4999 10.6484C22.4999 13.3484 21.1099 15.7384 18.9699 17.2384Z" />
              <path d="M13.5 15.6384C13.5 16.8284 13.06 17.9284 12.32 18.7984C11.33 19.9984 9.76 20.7684 8 20.7684L5.39 22.3184C4.95 22.5884 4.39 22.2184 4.45 21.7084L4.7 19.7384C3.36 18.8084 2.5 17.3184 2.5 15.6384C2.5 13.8784 3.44 12.3284 4.88 11.4084C5.77 10.8284 6.84 10.4984 8 10.4984C11.04 10.4984 13.5 12.7984 13.5 15.6384Z" />
              <defs>
                <linearGradient
                  id="paint0_linear_85_2572"
                  x1="5.2075"
                  y1="3.56012"
                  x2="22.1452"
                  y2="3.71191"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03125" stop-color="#B8860B" />
                  <stop offset="0.235169" stop-color="#FFD700" />
                  <stop offset="0.505033" stop-color="#B8860B" />
                  <stop offset="0.749821" stop-color="#DCB900" />
                  <stop offset="1" stop-color="#B8860B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_85_2572"
                  x1="2.58933"
                  y1="11.216"
                  x2="13.2762"
                  y2="11.313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03125" stop-color="#B8860B" />
                  <stop offset="0.235169" stop-color="#FFD700" />
                  <stop offset="0.505033" stop-color="#B8860B" />
                  <stop offset="0.749821" stop-color="#DCB900" />
                  <stop offset="1" stop-color="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="navLabel">Диалоги</p>
        </NavLink>
      </div>
      <div className="navItem">
        <NavLink
          to="/subscribe"
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
        >
          <div className="navIconWrapper">
            <svg
              className="navIcon"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.4199 17.1584C22.0899 19.8184 19.9099 21.9984 17.2499 22.3284C15.6399 22.5284 14.1399 22.0884 12.9699 21.2284C12.2999 20.7384 12.4599 19.6984 13.2599 19.4584C16.2699 18.5484 18.6399 16.1684 19.5599 13.1584C19.7999 12.3684 20.8399 12.2084 21.3299 12.8684C22.1799 14.0484 22.6199 15.5484 22.4199 17.1584Z" />
              <path d="M10.49 2.40845C6.08 2.40845 2.5 5.98845 2.5 10.3984C2.5 14.8084 6.08 18.3884 10.49 18.3884C14.9 18.3884 18.48 14.8084 18.48 10.3984C18.47 5.98845 14.9 2.40845 10.49 2.40845ZM9.55 9.27845L11.96 10.1184C12.83 10.4284 13.25 11.0384 13.25 11.9784C13.25 13.0584 12.39 13.9484 11.34 13.9484H11.25V13.9984C11.25 14.4084 10.91 14.7484 10.5 14.7484C10.09 14.7484 9.75 14.4084 9.75 13.9984V13.9384C8.64 13.8884 7.75 12.9584 7.75 11.7984C7.75 11.3884 8.09 11.0484 8.5 11.0484C8.91 11.0484 9.25 11.3884 9.25 11.7984C9.25 12.1584 9.51 12.4484 9.83 12.4484H11.33C11.56 12.4484 11.74 12.2384 11.74 11.9784C11.74 11.6284 11.68 11.6084 11.45 11.5284L9.04 10.6884C8.18 10.3884 7.75 9.77845 7.75 8.82845C7.75 7.74845 8.61 6.85845 9.66 6.85845H9.75V6.81845C9.75 6.40845 10.09 6.06845 10.5 6.06845C10.91 6.06845 11.25 6.40845 11.25 6.81845V6.87845C12.36 6.92845 13.25 7.85845 13.25 9.01845C13.25 9.42845 12.91 9.76845 12.5 9.76845C12.09 9.76845 11.75 9.42845 11.75 9.01845C11.75 8.65845 11.49 8.36845 11.17 8.36845H9.67C9.44 8.36845 9.26 8.57845 9.26 8.83845C9.25 9.17845 9.31 9.19845 9.55 9.27845Z" />
              <defs>
                <linearGradient
                  id="paint0_linear_140_351"
                  x1="12.6313"
                  y1="13.0543"
                  x2="22.2658"
                  y2="13.1489"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03125" stop-color="#B8860B" />
                  <stop offset="0.235169" stop-color="#FFD700" />
                  <stop offset="0.505033" stop-color="#B8860B" />
                  <stop offset="0.749821" stop-color="#DCB900" />
                  <stop offset="1" stop-color="#B8860B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_140_351"
                  x1="2.62977"
                  y1="3.3712"
                  x2="18.1547"
                  y2="3.52375"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03125" stop-color="#B8860B" />
                  <stop offset="0.235169" stop-color="#FFD700" />
                  <stop offset="0.505033" stop-color="#B8860B" />
                  <stop offset="0.749821" stop-color="#DCB900" />
                  <stop offset="1" stop-color="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="navLabel">Подписка</p>
        </NavLink>
      </div>
      <div className="navItem">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
        >
          <div className="navIconWrapper">
            <svg
              className="navIcon"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 2.40845C9.88 2.40845 7.75 4.53845 7.75 7.15845C7.75 9.72845 9.76 11.8084 12.38 11.8984C12.46 11.8884 12.54 11.8884 12.6 11.8984C12.62 11.8984 12.63 11.8984 12.65 11.8984C12.66 11.8984 12.66 11.8984 12.67 11.8984C15.23 11.8084 17.24 9.72845 17.25 7.15845C17.25 4.53845 15.12 2.40845 12.5 2.40845Z" />
              <path d="M17.58 14.5585C14.79 12.6985 10.24 12.6985 7.42996 14.5585C6.15996 15.4085 5.45996 16.5585 5.45996 17.7885C5.45996 19.0185 6.15996 20.1585 7.41996 20.9985C8.81996 21.9385 10.66 22.4085 12.5 22.4085C14.34 22.4085 16.18 21.9385 17.58 20.9985C18.84 20.1485 19.54 19.0085 19.54 17.7685C19.53 16.5385 18.84 15.3985 17.58 14.5585Z" />
              <defs>
                <linearGradient
                  id="paint0_linear_95_2862"
                  x1="7.82715"
                  y1="2.9802"
                  x2="17.0566"
                  y2="3.07098"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03125" stop-color="#B8860B" />
                  <stop offset="0.235169" stop-color="#FFD700" />
                  <stop offset="0.505033" stop-color="#B8860B" />
                  <stop offset="0.749821" stop-color="#DCB900" />
                  <stop offset="1" stop-color="#B8860B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_95_2862"
                  x1="5.5743"
                  y1="13.7204"
                  x2="19.2516"
                  y2="13.9251"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03125" stop-color="#B8860B" />
                  <stop offset="0.235169" stop-color="#FFD700" />
                  <stop offset="0.505033" stop-color="#B8860B" />
                  <stop offset="0.749821" stop-color="#DCB900" />
                  <stop offset="1" stop-color="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="navLabel">Профиль</p>
        </NavLink>
      </div>
    </nav>
  );
}

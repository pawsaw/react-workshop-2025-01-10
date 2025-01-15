import { AppHeader } from "./commponents/AppHeader";

import "./index.css";
import { ThemeProvider } from "./domain/theme";
import { NavLink, Outlet } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <AppHeader />

          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "green" : "black",
                })}
                to="books"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "green" : "black",
                })}
                to="about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "green" : "black",
                })}
                to="counter"
              >
                Counter
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

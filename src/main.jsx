import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./assets/icomoon/style.css";
import "./index.css";
import "./assets/scss/main.scss";
import App from "./App.jsx";
import store from './redux/store';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

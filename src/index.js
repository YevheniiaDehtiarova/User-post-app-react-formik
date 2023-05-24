import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from './components/redux/store';
import UserService from "./components/redux/services/user-service";
import { UserServiceProvider } from "./components/redux/service-context";

const userService = new UserService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <UserServiceProvider value={userService}>
      <App />
    </UserServiceProvider>
      
  </Provider>
  </React.StrictMode>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./store.js";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { DashboardAuthContextProvider } from "./context/DashboardAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DashboardAuthContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </DashboardAuthContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);

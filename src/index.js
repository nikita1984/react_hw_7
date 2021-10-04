import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import store from "./store";

export const MyDataContext = React.createContext({ appVersion: "0.9-alpha" });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyDataContext.Provider value={{ appVersion: "0.9-alpha" }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistStore(store)}>
            <App />
          </PersistGate>
        </Provider>
      </MyDataContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

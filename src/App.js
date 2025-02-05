import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={chosenTheme}>
        <LanguageProvider>
          <>
            <GlobalStyles />
            <Main theme={chosenTheme} />
          </>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

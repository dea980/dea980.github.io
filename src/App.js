import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={chosenTheme}>
        <>
          <GlobalStyles />
          <Main theme={chosenTheme} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;

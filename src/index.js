import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/App";
import { GlobalStyles } from "./components/GlobalStyles";
import { Theme } from "./components/Theme";
import { GalleryProvider } from "./context";

ReactDOM.render(
  <GalleryProvider>
    <Theme>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </Theme>
  </GalleryProvider>,
  document.getElementById("root")
);

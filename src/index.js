import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { GlobalStyles } from "./components/GlobalStyles";
import { Theme } from "./components/Theme";
import { GalleryProvider } from "./context";

ReactDOM.render(
  <GalleryProvider>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </GalleryProvider>,
  document.getElementById("root")
);

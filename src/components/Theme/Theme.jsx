import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GalleryContext } from "../../context";

const themes = {
  dark: {
    mainColor: "#000000",
    secondaryColor: "#ffffff",
    borderColor: "#ffffff",
    placeholderColor: "rgba(255, 255, 255, 0.3)",
    filtersInputColor: "#FFFFFF",
    disabledButtonColor: "rgba(255, 255, 255, 0.3)",
  },
  light: {
    mainColor: "#ffffff",
    secondaryColor: "#000000",
    borderColor: "rgba(0, 0, 0, 0.3)",
    placeholderColor: "rgba(0, 0, 0, 0.3)",
    filtersInputColor: "#EFEFEF",
    disabledButtonColor: "rgba(0, 0, 0, 0.3)",
  },
};

const Theme = observer(({ children }) => {
  const store = useContext(GalleryContext);

  return <ThemeProvider theme={themes[store.theme]}>{children}</ThemeProvider>;
});

export default Theme;

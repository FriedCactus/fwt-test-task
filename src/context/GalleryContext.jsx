import React from "react";
import GalleryStore from "../store/GalleryStore";

export const GalleryContext = React.createContext(<GalleryStore />);

export const GalleryProvider = ({ children }) => (
  <GalleryContext.Provider value={new GalleryStore()}>
    {children}
  </GalleryContext.Provider>
);

import React from "react";
import GalleryStore from "../store/GalleryStore";
import PropTypes from "prop-types";

export const GalleryContext = React.createContext(<GalleryStore />);

export const GalleryProvider = ({ children }) => (
  <GalleryContext.Provider value={new GalleryStore()}>
    {children}
  </GalleryContext.Provider>
);

GalleryProvider.propTypes = {
  children: PropTypes.node,
};

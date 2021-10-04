import React from "react";
import { Filters } from "../Filters";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { Pagination } from "../Pagination";
import { Wrapper } from "../Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Filters />
      <Gallery />
      <Pagination />
    </Wrapper>
  );
};

export default App;

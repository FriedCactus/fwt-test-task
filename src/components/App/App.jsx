import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { GalleryContext } from "../../context";
import { Filters } from "../Filters";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { Pagination } from "../Pagination";
import { Wrapper } from "../Wrapper";

const App = observer(() => {
  const store = useContext(GalleryContext);

  return (
    <Wrapper>
      <Header />
      <Filters />
      <Gallery />
      {store.pagesCount > 1 && <Pagination />}
    </Wrapper>
  );
});

export default App;

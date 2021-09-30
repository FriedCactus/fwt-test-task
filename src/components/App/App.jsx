import { observer } from "mobx-react-lite";
import React from "react";
import { Container } from "../Container";
import { Header } from "../Header";
import { Wrapper } from "../Wrapper";

const App = observer(() => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
});

export default App;

import React from "react";
import { Container } from "../Container";
import { Input } from "../Input";
import { Select } from "../Select";
import { Years } from "../Years";

const Filters = () => {
  return (
    <Container>
      <Input placeholder="Name" />
      <Select placeholder="Author" isOpen={true} />
      <Select placeholder="Location" isOpen={false} />
      <Years placeholder="Created" isOpen={true} />
    </Container>
  );
};

export default Filters;

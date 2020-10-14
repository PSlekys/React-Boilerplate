import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";

storiesOf("Section", module)
  .add("Full-width Section", () => (
    <Section background="eee" fullWidth={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in quasi
      consequatur alias voluptate ut optio omnis ducimus, explicabo quis quos
      amet! Autem libero ab vero iste quibusdam doloremque. Deleniti!
    </Section>
  ))
  .add("Fixed-width Section", () => (
    <Section background="eee" fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in quasi
      consequatur alias voluptate ut optio omnis ducimus, explicabo quis quos
      amet! Autem libero ab vero iste quibusdam doloremque. Deleniti!
    </Section>
  ))
  .add("Transparent Section", () => (
    <Section fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in quasi
      consequatur alias voluptate ut optio omnis ducimus, explicabo quis quos
      amet! Autem libero ab vero iste quibusdam doloremque. Deleniti!
    </Section>
  ));

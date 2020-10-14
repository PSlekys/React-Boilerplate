import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Primary Button", () => (
    <Button handleClick={() => console.log("clicked")} color="primary">
      Primary Button
    </Button>
  ))
  .add("Secondary Button", () => (
    <Button handleClick={() => console.log("clicked")} color="secondary">
      Secondary Button
    </Button>
  ));

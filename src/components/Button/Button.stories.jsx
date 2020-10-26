import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./Button";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Button", module)
  .add("Primary Button", () => (
    <ThemeProvider theme={theme}>
      <Button handleClick={() => console.log("clicked")} color="primary">
        Primary Button
      </Button>
    </ThemeProvider>
  ))
  .add("Secondary Button", () => (
    <ThemeProvider theme={theme}>
      <Button handleClick={() => console.log("clicked")} color="secondary">
        Secondary Button
      </Button>
    </ThemeProvider>
  ));

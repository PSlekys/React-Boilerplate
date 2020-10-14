import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import React from "react";
import Header from "./Header";

storiesOf("Header", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />);

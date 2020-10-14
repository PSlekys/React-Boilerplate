import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#333" : "#eee")};
  color: ${(props) => (props.color === "primary" ? "#fff" : "#222")};
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5em 2em;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.color === "primary" ? "#222" : "#e8e8e8")};
  }
  &:focus {
    background: ${(props) => (props.color === "primary" ? "#111" : "#e3e3e3")};
  }
`;

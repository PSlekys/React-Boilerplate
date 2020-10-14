import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color }) {
  return (
    <S.Button onClick={handleClick} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;

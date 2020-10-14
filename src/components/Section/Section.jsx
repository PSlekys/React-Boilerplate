import React from "react";
import * as S from "./Section.style";

function Section({ background, fullWidth, children }) {
  return (
    <S.Section background={background}>
      {fullWidth ? children : <S.Container>{children}</S.Container>}
    </S.Section>
  );
}

export default Section;

import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1em;
`;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

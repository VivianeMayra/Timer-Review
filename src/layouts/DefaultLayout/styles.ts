import styled from "styled-components"

export const LayoutContainer = styled.div`
  width: 150%;
  height: 200vh;
  padding: 2.5rem;
  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1028px) {
    width: 70%;
    margin: 5rem auto;
    height: 100%;
  }
`

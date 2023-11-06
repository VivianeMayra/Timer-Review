import styled from "styled-components"

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 4rem;
  line-height: 4rem;
  width: 70%;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;
  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (min-width: 1028px) {
    font-size: 10rem;
    line-height: 5rem;
    width: 100%;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 11rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 1028px) {
    width: 4rem;
  }
`

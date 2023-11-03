import styled from "styled-components"

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`

export const FormContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (min-width: 1028px) {
    width: 100%;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }
  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
  width: 70%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }

  @media (min-width: 1028px) {
    width: 100%;
  }
`

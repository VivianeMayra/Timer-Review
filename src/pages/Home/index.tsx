import { HandPalm, Play } from "phosphor-react"

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles"
import { useContext } from "react"
import { Countdown } from "./Components/Countdown"
import { FormProvider, useForm } from "react-hook-form"
import { NewCycleForm } from "./Components/NewCycleForm"

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

import { CyclesContext } from "../../contexts/CyclesContext"

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log("data:", data)
    createNewCycle(data)
    reset()
  }

  const task = watch("task")
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}

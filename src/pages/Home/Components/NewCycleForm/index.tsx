import { useContext } from "react"
import {
  FormContainer,
  MinutesAmountInput,
  MinutesAmountInputContainer,
  TaskInput,
} from "./styles"
import { useFormContext } from "react-hook-form"
import { CyclesContext } from "../../../../contexts/CyclesContext"
import { Minus, Plus } from "phosphor-react"

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register, setValue, watch } = useFormContext()

  const count = watch("minutesAmount")
  const handleIncrement = () => {
    setValue("minutesAmount", count + 1)
  }

  const handleDecrement = () => {
    setValue("minutesAmount", count - 1)
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInputContainer>
        <button
          type="button"
          disabled={count <= 1 || !!activeCycle}
          onClick={handleDecrement}
        >
          <Minus size="12px" />
        </button>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={1}
          min={1}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <button
          type="button"
          disabled={count >= 60 || !!activeCycle}
          onClick={handleIncrement}
        >
          <Plus size="12px" />
        </button>
      </MinutesAmountInputContainer>

      <span>minutos.</span>
    </FormContainer>
  )
}

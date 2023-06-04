import React, { useState } from 'react'
import { Display } from './Display'
import { ButtonPanel } from './ButtonPanel'
import { Calculate, State } from './logic/Calculate'

export const Calculator = () => {
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false
  })
  const buttonHandler = (code: string) => {
    const nextState = Calculate(code, state);
    setState(nextState);
  }
  return (
    <div>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  )
}
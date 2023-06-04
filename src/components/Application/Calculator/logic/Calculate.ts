export function Calculate(button: string, state: State): State {
  // 数値かどうか
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  // オペレーターかどうか
  if (isOperatorButton(button)) {
  }
  // .かどうか
  if (isDotButton(button)) {
  }
  // 削除ボタンかどうか
  if (isDeleteButton(button)) {
  }
  // ACかどうか
  if (isAllClearButton(button)) {
  }
  // =かどうか
  if (isEqualButton(button)) {
  }
  return state;
}
export interface State {
  current: string; // 現在表示している内容
  operand: number; // 計算に使う数値を記憶
  operator: string | null; // どの計算をしようとしているか（足し算か引き算か）
  isNextClear: boolean; // クリアすべきかどうかのフラグ
}

function isNumberButton(button: string) {
  return (
    button === "0" ||
    button === "1" ||
    button === "2" ||
    button === "3" ||
    button === "4" ||
    button === "5" ||
    button === "6" ||
    button === "7" ||
    button === "8" ||
    button === "9"
  );
}
function handleNumberButton(button: string, state: State): State {
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }
  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
}

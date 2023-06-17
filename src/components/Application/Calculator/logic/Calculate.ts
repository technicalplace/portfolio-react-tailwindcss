export function Calculate(button: string, state: State): State { // Stateというインターフェースを作成する
  // 数値かどうか
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  // オペレーター(+ or -)かどうか
  if (isOperatorButton(button)) {
    handleOperatorButton(button, state);
  }
  // .かどうか
  if (isDotButton(button)) {
    return handleDotButton(state);
  }
  // 削除ボタンかどうか
  if (isDeleteButton(button)) {
    return handleDeleteButton(state);
  }
  // ACかどうか
  if (isAllClearButton(button)) {
    return handleAllClearButton();
  }
  // =かどうか
  if (isEqualButton(button)) {
    return handleEqualButton(state);
  }
  return state;
}
export interface State { // Stateというインターフェース
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
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }
  // 今の表示が0の時は（次の状態として）今表示している値は押したボタンの値
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }
  // 今の表示が0以外の時は後ろに押したボタンの値を付け足す
  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
}
function isOperatorButton(button: string) {
  return button === "+" || button === "-";
}

function handleOperatorButton(button: string, state: State): State {
  // 押されていない場合
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
    };
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true,
  };
}

function isDotButton(button: string) {
  return button === ".";
}
function handleDotButton(state: State): State {
  if (state.current.indexOf(".") !== -1) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
}
function isDeleteButton(button: string) {
  return button === "D";
}
function handleDeleteButton(state: State): State {
  if (state.current.length === 1) {
    return {
      current: "0",
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }
  return {
    current: state.current.substring(0, state.current.length - 1), //表示している値から1文字減らす
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
}
function isAllClearButton(button: string) {
  return button === "AC";
}
function handleAllClearButton(): State {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  };
}

function isEqualButton(button: string) {
  return button === "=";
}

function handleEqualButton(state: State): State {
  if (state.operator === null) {
    return state;
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: 0,
    operator: null,
    isNextClear: true,
  };
}
function operate(state: State): number {
  const current = parseFloat(state.current); // currentを数値に変換
  if (state.operator === "+") {
    return state.operand + current;
  }
  if (state.operator === "-") {
    return state.operand - current;
  }
  return current;
}

export function add(num1,num2) {
	
  return {
    type: "ADD",
    payload: {num1, num2}
  }
}

export function subtract() {
	
  return {
    type: "SUBTRACT",
    payload: 1
  }
}

export function divide() {
	
  return {
    type: "DIVIDE",
    payload: 1
  }
}

export function multiply() {
	
  return {
    type: "MULTIPLY",
    payload: 1
  }
}

export function set1(num1) {
  console.log('ACTION SET : ');
  return {
    type: "SET1",
    payload: num1
  }
}

export function set2(num2) {
  console.log('ACTION SET : ');
  return {
    type: "SET2",
    payload: num2
  }
}
export function splitIntoWords(sentense: string) {
  return sentense.toLowerCase().split(" ").map(w => w.replace('!', ''));
}

export  function sum(a: number, b:number) {
  return a + b
}

export  function mult(a: number, b:number) {
  return a * b
}

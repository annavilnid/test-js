import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(()=> {
  a = 3;
  b = 5;
  c = 1;

})

test('sum should be correct', () => {
  const result1 = sum(a,b);
  const result2 = sum(a,c);

  expect(result1).toBe(8);
  expect(result2).toBe(4);
})

test('mult should be correct', () => {
  const result1 = mult(a,b);
  const result2 = mult(a,c);

  expect(result1).toBe(15);
  expect(result2).toBe(3);
})

test('words should be split', () => {
  let sentence = "Hello my friends!"
  const result1 = splitIntoWords(sentence);

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friends');
})
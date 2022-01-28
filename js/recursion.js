// 1. Реализовать возведение в целую степень.
// Функция pow(base, exponent) с двумя параметрами должна возвращать значение base в степени exponent, вычисленное рекурсивно, где base любое число, exponent - натуральное (1, 2, 3) или *целое число(-2, -1, 0, 1, 2)).
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log('pow(2, 3) :>> ', pow(-2, 3));


// 2. Реализовать вывод в консоль скобок.
// вывод в консоль должен осуществляться внутри рекурсивной функции, соответственно, скобки будут расположены в консоли в столбик. Например, для вызова bracketWrapper(3) должно выводить:
// (
// (
// (
// )
// )
// )
function bracketWrapperString(n) {
  const brackets = [];

  bracketWrapper(n);

  function bracketWrapper(n) {
    if (n === 0) { return; }
    brackets.push('(');
    console.log('(');
    bracketWrapper(n-1);
    console.log(')');
  }
}
bracketWrapperString(3)
// 3. * Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat). Для реализации можно проверять, является ли элемент экземпляром MyArray (instanceof), и в зависимости от этого выполнять нужные действия.

const selfFlat = function (depth = 1) {
  let arr = Array.prototype.slice.call(this)
  if (depth === 0) return arr
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...selfFlat.call(cur, depth - 1)]
    } else {
      return [...pre, cur]
    }
  }, [])
}

Array.prototype.selfFlat = selfFlat;
const arr10 = [0, [1, 2], [3, 4, [5, 6, 7]],[8, 9, 10]] ;
const rezArr10 = arr10.selfFlat(Infinity);

console.log('rezArr10 :>> ', rezArr10);


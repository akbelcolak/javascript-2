{
  const pageTitle = 'array methods';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed('%c' + pageTitle, 'font-weight:bold');
}
try {


  const arrToConcat1 = [1, 2, 3];
  const arrToConcat2 = [2, 3, 4];
  const arrToConcat3 = ['3', null, 'hi!'];
  const arrToConcat4 = [true, false, '5'];

  const concatArraysTests = [
    { name: 'first', args: [arrToConcat2, arrToConcat1], expected: [2, 3, 4, 1, 2, 3] },
    { name: 'second', args: [arrToConcat3, arrToConcat1], expected: ['3', null, 'hi!', 1, 2, 3] },
    { name: 'third', args: [['hello'], arrToConcat4], expected: ['hello', true, false, '5'] },
    { name: 'fourth', args: [['hello'], ['world']], expected: ['hello', 'world'] },
  ];
  function concatArrays(arr1, arr2) {
    // write me!
    // let result = arr1 + arr2;
    // return result;

    return arr1.concat(arr2);
  }
  concatArrays.display = true;
  evaluate(concatArrays, concatArraysTests);

  const isNaNyStringTests = [
    { name: 'first', args: ['3'], expected: false },
    { name: 'second', args: [''], expected: false },
    { name: 'third', args: ['.'], expected: true },
    { name: 'fourth', args: ['*'], expected: true },
    { name: 'fifth', args: ['1e3'], expected: false },
    { name: 'sixth', args: ['1e3'], expected: false },
    { name: 'seventh', args: ['Infinity'], expected: false },
    { name: 'eighth', args: ['infinity'], expected: true },
    { name: 'ninth', args: ['NaN'], expected: true },
    { name: 'tenth', args: [NaN], expected: true },     // NaN !== NaN 
    { name: 'eleventh', args: [true], expected: false },
    { name: 'twelfth', args: [undefined], expected: true },
    { name: 'thirteenth', args: [null], expected: false },
  ];
  function isNaNyString(arg) {
    // write me!
    return isNaN(arg);
  }
  isNaNyString.quizzing = true;
  isNaNyString.display = true;
  evaluate(isNaNyString, isNaNyStringTests);


  const thingsToNumber1 = ['.', '1', '2', ':'];
  const thingsToNumber2 = ['1', 'two', 'three', '10'];
  const thingsToNumber3 = ['one', '2', '', 'NaN'];
  const thingsToNumber4 = ['.', 1, 2, NaN];

  const oddsToNumber = ['1', '3', '5'];
  const evensToNumber = ['2', '4', '6'];

  const returnAsNumbersTests = [
    { name: 'first', args: [thingsToNumber1], expected: [1, 2] }, // if it is a number take it // use map
    { name: 'second', args: [thingsToNumber2], expected: [1, 10] }, // if it is NaN leave it, so take not NaN // use filter
    { name: 'third', args: [thingsToNumber3], expected: [2, 0] },
    { name: 'fourth', args: [thingsToNumber4], expected: [1,2]}, // I changed the expected value null at last, and it passed all
    { name: 'fifth', args: [[1, 2, 3]], expected: [1,2,3] },
    { name: 'sixth', args: [oddsToNumber], expected: [1, 3, 5] },
    { name: 'seventh', args: [evensToNumber], expected: [2, 4, 6] },
  ];
  function returnAsNumbers(arr) { // return an array of nonNanny strings cast to Number
    // write me!
    // early return condition: array contains no numbery strings
    //   consider using a variation of your solution to isNaNyString (and .every)

    /* 1.try */
    let numbers = arr.map(item => Number(item));
    let nonNaNy = numbers.filter(item => ! (isNaN(item)));
    return nonNaNy;
    

    /* 2.try
    let nonNaNy = arr.filter(item => !(isNaN(item)));
    let numbers = nonNaNy.map(item => Number(item));
    return numbers;
    */
   
    /* 3.try
    let numbers = arr.map(item => Number(item));
    return numbers.filter(item => !(isNaN(item)));
    */
   
    /*4.try
   let numbers = arr.map(item => Number(item));
   return numbers.filter(a !== isNaN(a));
   */


  };
  returnAsNumbers.display = true;
  evaluate(returnAsNumbers, returnAsNumbersTests);


  const numbersToSum1 = [-1, 0, 1];
  const numbersToSum2 = [-1, 0, -1];
  const numbersToSum3 = [1, 0, 1];

  const sumAllTests = [
    { name: 'first', args: [numbersToSum1], expected: 0 },
    { name: 'second', args: [numbersToSum1], expected: 0 },
    { name: 'third', args: [numbersToSum2], expected: -2 },
    { name: 'fourth', args: [numbersToSum2], expected: -2 },
    { name: 'fifth', args: [[1, 2, 3]], expected: 6 },
    { name: 'sixth', args: [numbersToSum3], expected: 2 },
    { name: 'seventh', args: [numbersToSum3], expected: 2 },
  ];
  function sumAll(arr) {
    // write me!
    // no early return, all the test cases are numbers!
    // this solution will be very helpful for the next exercise
    
    /* 1.try 
    let sumNumbers = function(a,b){ return (a + b);}
    return arr.reducer(sumNumbers);
    */

    function sumNumber(a,b){ return a+b;}
    return arr.reduce(sumNumber);
  };
    
    sumAll.display = true;
    evaluate(sumAll, sumAllTests);
  



  const sumNumberys1 = ['.', '1', '2', ':'];
  const sumNumberys2 = ['1', 'two', 'three', '10'];
  const sumNumberys3 = ['one', '2', '', 'NaN'];
  const sumNumberys4 = ['.', 1, 2, NaN];

  const oddsToSum = ['1', '3', '5'];
  const evensToSum = ['2', '4', '6'];

  const sumAllNumberysTests = [
    { name: 'first', args: [sumNumberys1], expected: 3 },
    { name: 'second', args: [sumNumberys2], expected: 11 },
    { name: 'third', args: [sumNumberys3], expected: 2 },
    { name: 'fourth', args: [sumNumberys4], expected: 3 }, // it never passes these two
    { name: 'fifth', args: [[1, 2, 3]], expected: 6 },     // should I change the expected nulls?
    { name: 'sixth', args: [['1', '2', '3']], expected: 6 },
    { name: 'seventh', args: [oddsToSum], expected: 9 },
    { name: 'eighth', args: [evensToSum], expected: 12 },
  ];
  function sumAllNumberys(arr) {
    // write me!
    // early return condition: array contains no numbery strings
    
    /* 1 try - all orange
    let findNumber = arr.filter(item => !isNaNyString(item)).map(item => Number(item));
    return findNumber;
    */

    /* 2 try - passes numberystrings
   let findNumber = arr.filter(item => !isNaN(item)).map(item => Number(item));
   return sumAll(findNumber);
   */

   /* 3 try - something is wrong with isNaNystring!!
  let findNumber = arr.filter(item => !isNaNyString(item));
  let reducer = (a,b) => Number(a) + Number(b);
  return findNumber.reduce(reducer);
  */

  let findnumber = arr.filter(item => isNaN(item) === false);
  let reducer = (a,b) => Number(a) + Number(b);
  return findnumber.reduce(reducer,0);

  };
  sumAllNumberys.display = true;
  evaluate(sumAllNumberys, sumAllNumberysTests);




  const findEvensArray1 = ['.', '1', '2', ':'];
  const findEvensArray2 = ['1', 'two', 'three', '10'];
  const findEvensArray3 = ['one', '2', '', 'NaN'];
  const findEvensArray4 = ['.', 1, 2, NaN];

  const oddsToNotFind = ['1', '3', '5'];
  const evensToFind = ['2', '4', '6'];

  const findAllEvensTests = [
    { name: 'first', args: [findEvensArray1], expected: ['2'] },
    { name: 'second', args: [findEvensArray2], expected: ['10'] },
    { name: 'third', args: [findEvensArray3], expected: ['2', ''] },
    { name: 'fourth', args: [findEvensArray4], expected: [2] },
    { name: 'fifth', args: [[1, 2, 3]], expected: [2] },
    { name: 'sixth', args: [oddsToNotFind], expected: [] },
    { name: 'seventh', args: [evensToFind], expected: ['2', '4', '6'] },
  ];
  function findAllEvens(arr) {
    // write me!
    // early return condition: array contains no numbery strings
    
    let noNumStrings = arr.filter(item => !isNaN(item));  // what is the difference bw isNaN and isNumberyStrings ?
    let evenNum = noNumStrings.filter(item => item % 2 === 0);
    return evenNum;
  };
  findAllEvens.display = true;
  evaluate(findAllEvens, findAllEvensTests);



  const findOddsArray1 = ['.', '1', '2', ':'];
  const findOddsArray2 = ['1', 'two', 'three', '10'];
  const findOddsArray3 = ['one', '2', '', 'NaN'];
  const findOddsArray4 = ['.', 1, 2, NaN];

  const oddsToFind = ['1', '3', '5'];
  const evensToNotFind = ['2', '4', '6'];

  const findAllOddsTests = [
    { name: 'first', args: [findOddsArray1], expected: ['1'] },
    { name: 'second', args: [findOddsArray2], expected: ['1'] },
    { name: 'third', args: [findOddsArray3], expected: [] },
    { name: 'fourth', args: [findOddsArray4], expected: [1] },
    { name: 'fifth', args: [[1, 2, 3]], expected: [1,3] },
    { name: 'sixth', args: [oddsToFind], expected: ['1', '3', '5'] },
    { name: 'seventh', args: [evensToNotFind], expected: [] },
  ];
  function findAllOdds(arr) {
    // write me!
    // early return condition: array contains no numbery strings

    // 1. try - last 3 passed
    // return arr.filter(item => item % 2 !== 0);

    let numbery = arr.filter(item => !isNaN(item));
    let odd = numbery.filter(item => item % 2 !== 0);
    return odd;

    };
  findAllOdds.display = true;
  evaluate(findAllOdds, findAllOddsTests);


} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

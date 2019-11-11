{
  const pageTitle = 'error-based decisions';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

try {


  /* this function is meant to be confusing, no need to understand it!
    the point of these exercises is to learn how to work with functions that return errors
    you can (and often will!) have to work with functions that return errors
    ... without understanding what they do!
  */
  const mightReturnAnError = a => "object" == typeof a
    ? a instanceof Object
      ? (() => { try { return a(), !0 } catch (a) { return new Error('second error') } })()
      : new Error('first error')
    : +a === +a || new Error('third error');


  const exercise1Tests = [
    { name: 'first', args: [-5], expected: true },
    { name: 'second', args: [null], expected: false },
    { name: 'third', args: [undefined], expected: false },
    { name: 'fourth', args: [true], expected: true },
    { name: 'fifth', args: [['second error']], expected: false },
    { name: 'sixth', args: [{ a: 'x' }], expected: false },
    { name: 'seventh', args: [() => { }], expected: false },
    { name: 'eighth', args: ['13'], expected: true },
    { name: 'ninth', args: ['second error'], expected: false },
  ]
  function exercise1(arg) {
    const result = mightReturnAnError(arg);

   
    if (result  instanceof Error) { 
      return false; // write this condition
      // write me!
    } else {
      return true;// write me!
    }

  }
  exercise1.display = true;
  evaluate(exercise1, exercise1Tests);


  const exercise2Tests = [
    { name: 'first', args: [4], expected: 4 }, // nummer-nummer
    { name: 'second', args: [null], expected: 'first error' }, // null - 1 error
    { name: 'third', args: [undefined], expected: 'third error' }, //undefined - 3 error
    { name: 'fourth', args: [false], expected: false }, // boelean - boelan
    { name: 'fifth', args: [[]], expected: 'second error' },// array - 2 e
    { name: 'sixth', args: [{}], expected: 'second error' },//object - 2 e
    { name: 'seventh', args: [function () { }], expected: 'third error' },//function - 3
    { name: 'eighth', args: ['4'], expected: '4' }, // numberyString - string
    { name: 'ninth', args: ['e'], expected: 'third error' }, //string - 3 e
  ]
  // All returned undefined instead of expected

  function exercise2(arg) {
    const result = mightReturnAnError(arg);
    console.log(result);
    // write me!
    if ( result instanceof Error){
      return result.message;
    } else {
      return arg;
    }

  }
  exercise2.display = true;
  evaluate(exercise2, exercise2Tests);



  const exercise3Tests = [
    { name: 'first', args: [4], expected: { number: 4 } },
    { name: 'second', args: [null], expected: { object: 'first error' } },
    { name: 'third', args: [undefined], expected: { 'undefined': 'third error' } },
    { name: 'fourth', args: [false], expected: { 'boolean': false } },
    { name: 'fifth', args: [[]], expected: { object: 'second error' } },
    { name: 'sixth', args: [{}], expected: { object: 'second error' } },
    { name: 'seventh', args: [function () { }], expected: { 'function': 'third error' } },
    { name: 'eighth', args: ['4'], expected: { string: '4' } },
    { name: 'ninth', args: ['e'], expected: { string: 'third error' } },
  ]
  function exercise3(arg) {
    const result = mightReturnAnError(arg);
    if (result instanceof Error){
      return result.fileName;
    } else{
      return arg;
    }

    // write me!

  }
  exercise3.display = true;
  evaluate(exercise3, exercise3Tests);


  const exercise4Tests = [
    { name: 'first', args: [4], expected: [null, 4] },
    { name: 'second', args: [null], expected: ['first error'] },
    { name: 'third', args: [undefined], expected: ['third error'] },
    { name: 'fourth', args: [false], expected: [null, false] },
    { name: 'fifth', args: [[]], expected: ['second error'] },
    { name: 'sixth', args: [{}], expected: ['second error'] },
    { name: 'seventh', args: [function () { }], expected: ['third error'] },
    { name: 'eighth', args: ['4'], expected: [null, '4'] },
    { name: 'ninth', args: ['e'], expected: ['third error'] },
  ]
  function exercise4(arg) {
    const result = mightReturnAnError(arg);

    // write me!

  }
  exercise4.display = true;
  evaluate(exercise4, exercise4Tests);



} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}

{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

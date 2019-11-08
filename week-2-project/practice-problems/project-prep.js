{
  const pageTitle = 'project prep';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  const isPrimitiveTests = [
    { name: 'first', args: [false], expected: true },
    { name: 'second', args: [null], expected: true },
    { name: 'third', args: [''], expected: true },
    { name: 'fourth', args: [undefined], expected: true },
    { name: 'fifth', args: [0], expected: true },
    { name: 'sixth', args: [{}], expected: false },
    { name: 'seventh', args: [[]], expected: false },
    { name: 'eighth', args: [() => { }], expected: false },
    { name: 'ninth', args: [function () { }], expected: false },
    { name: 'tenth', args: [new WeakMap()], expected: false },
  ];
  function isPrimitive(thing) {
    // let type = typeof thing;
    // return isPrimitive(type);
    
    //if (type !== "object" || type !== "function"){ return true; } // 1,2,3,4,5 passes
    // if (type == "object" || type == "function") {return false;} // non of them passed
    // return false;

    return (thing !== Object(thing));
    
    }

  isPrimitive.display = true;
  evaluate(isPrimitive, isPrimitiveTests);

  const hasKeyTests = [
    { name: 'first', args: [{ a: 0 }, 'a'], expected: true },
    { name: 'second', args: [{ b: 0 }, 'a'], expected: false },
    { name: 'third', args: [{ a: 0 }, 'b'], expected: false },
    { name: 'fourth', args: [{ b: 0 }, 'b'], expected: true },
    { name: 'fifth', args: [{ a: undefined }, 'a'], expected: true },
    { name: 'sixth', args: [{ b: undefined }, 'a'], expected: false },
    { name: 'seventh', args: [{ a: undefined }, 'b'], expected: false },
    { name: 'eighth', args: [{ b: undefined }, 'b'], expected: true },
  ];
  function hasKey(obj, key) {
    // write me!
  return (obj.hasOwnProperty(key)); 
  }
  hasKey.display = true;
  evaluate(hasKey, hasKeyTests);


  const hasValueTests = [
    { name: 'first', args: [{ a: 0 }, 0], expected: true },
    { name: 'second', args: [{ b: 0 }, 1], expected: false },
    { name: 'third', args: [{ a: 1 }, 0], expected: false },
    { name: 'fourth', args: [{ b: 1 }, 1], expected: true },
    { name: 'fifth', args: [{ a: undefined }, undefined], expected: true },
    { name: 'sixth', args: [{ b: null, a: null }, null], expected: true },
    { name: 'seventh', args: [{ a: false, b: false }, true], expected: false },
  ];
  function hasValue(obj, value) {
    // write me!
    // consider using Object.keys, .filter and obj.hasOwnProperty
    //stackoverflow 
    return (Object.values(obj).indexOf(value) > -1)} // if the value is not in the object, write -1. othervise write the index number
      
  hasValue.display = true;
  evaluate(hasValue, hasValueTests);


  const firstObj = { a: 0 };
  const secondObj = { a: 0, b: 1 };

  const modifyToObjectWithBracketsTests = [
    { name: 'first', args: [firstObj, 'x', 0], expected: { a: 0, x: 0 } },
    { name: 'second',args: [firstObj, 'x', 0], expected: { a: 0, x: 0 } },
    { name: 'third', args: [secondObj, 'a', 1], expected: { a: 1, b: 1 } },
    { name: 'fourth',args: [secondObj, 'a', 1], expected: { a: 1, b: 1 } }, // when a copied key changes, original property key also changed
    { name: 'fifth', args: [{}, 'b', 'hi!'], expected: { b: 'hi!' } },  //a new key with value added
  ];
  function modifyToObjectWithBrackets(obj, key, value) {
    // write me!
    // (remember to avoid side effects)
    
    let newobj = Object.assign({},obj); //const newobj = {...obj}
    newobj[key] = value;
    return newobj;
  }
  modifyToObjectWithBrackets.display = true;
  evaluate(modifyToObjectWithBrackets, modifyToObjectWithBracketsTests)

  const deleteFromObjectTests = [
    { name: 'first', args: [firstObj, 'x'], expected: { a: 0 } }, //if the object doesnt contain the arg, do nothing
    { name: 'second', args: [firstObj, 'a'], expected: {} },      // if arg is in the object delete it(key and value)
    { name: 'third', args: [firstObj, 'x'], expected: { a: 0 } },
    { name: 'fourth', args: [secondObj, 'a'], expected: { b: 1 } },
    { name: 'fifth', args: [secondObj, 'b'], expected: { a: 0 } },
    { name: 'fifth', args: [{ b: 'hi!' }, 'b'], expected: {} },
  ];
  function deleteFromObject(obj, key) {
    // write me!
    // (remember to avoid side effects)

    const newObject = {...obj};
    delete newObject[key];
    return newObject;
  }
  deleteFromObject.display = true;
  evaluate(deleteFromObject, deleteFromObjectTests)


  const findByKeyTests = [
    { name: 'first', args: [firstObj, 'x'], expected: {} }, //there is no such key as x, so return empty
    { name: 'second',args: [firstObj, 'a'], expected: { a: 0 } },// if there is key as the same name as arg return the key with its value
    { name: 'third', args: [firstObj, 'a'], expected: { a: 0 } },
    { name: 'fourth',args: [secondObj, 'a'], expected: { a: 0 } },
    { name: 'fifth', args: [secondObj, 'b'], expected: { b: 1 } },
    { name: 'fifth', args: [{ b: 'hi!' }, 'b'], expected: { b: 'hi!' } },
  ];
  function findByKey(obj, key) {
    // write me!
    // (remember to avoid side effects)
    /* 'in' operator for property existance check
    let user = { name: "John", age: 30 };
    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist */

    const findObj = {...obj};
    if (key in findObj === true){ 
      let newfind = {};
      let value = findObj[key];
      newfind[key] = value;
      return newfind;
    }
    /*
    if (key in findObj === true){  
      return findObj; } //2,3,5 passes
    
      and next I tried to find by value :
      else if(key in findObj === true && key[value] in findObj !== true){
      let newfind = findObj;
      return newfind;} */

    else { // 1 pas
      return {};
    }

  }
  findByKey.display = true;
  evaluate(findByKey, findByKeyTests)


  const findByValueTests = [
    { name: 'first', args: [firstObj, 0], expected: { a: 0 } }, // arg is in our property value, so write the key and value
    { name: 'second', args: [firstObj, 1], expected: {} }, // we have no such prop value, {}
    { name: 'third', args: [firstObj, 0], expected: { a: 0 } }, 
    { name: 'fourth', args: [secondObj, 0], expected: { a: 0 } },
    { name: 'fifth', args: [secondObj, 1], expected: { b: 1 } },
    { name: 'fifth', args: [{ b: 'hi!', c: 'hi!' }, 'hi!'], expected: { b: 'hi!', c: 'hi!' } },
  ];
  function findByValue(obj, value) {
    // write me!
    // (remember to avoid side effects)

    /*const valueObject = {...obj};
    if (value in valueObject === true){
      return valueobject;
    }
    else {return {};} // only 2 passed
    */

   const valueObject = JSON.parse(JSON.stringify(obj)); // 1,3,5 passes
  // return valueObject;


   /* */
    if (value in Object.values(valueObject)){ // 1,3 passes
    return valueObject;}
    else {return {};} // 2 passes 

    /*
    let key = value[obj];
    for (let key in firstObj){ return valueObject;} // 1,3,6 passes
    */
    
    

  }
  findByValue.display = true;
  evaluate(findByValue, findByValueTests)

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

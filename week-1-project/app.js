const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function(param) {
    if (typeof param !== "string") {
      return false;
    }
    return !isNaN(param);
  },
  addString: function(param) {
    if (typeof param !== "string") {
      return false;
    } // write this early return condition

    // when I check with isNaN: if they are true, it means they are not a number.
    else if (isNaN(param)) {
      this.NaNyStrings.push(param);
    } // why I am using push here? Mert told but it is still not clear in my mind.
    else if (!isNaN(param)) {
      this.numberyStrings.push(param);
    }
    return true;

    //passed only first part:
    // if (typeof param !== 'string'){return false;} // write this early return condition
    // if (null) return false;
    // if (this.isNumberyString) {return false;}

    // write me! (using this.isNumberyString)
  },
  allStrings: function() {
    // first try
    //if (this.numberyStrings !== 0 && this.NaNyStrings === 0){
    // return this.isNumberyStrings;

    if (this.NaNyStrings.length === 0) {
      //allstrings first case
      return this.numberyStrings;
    } else if (this.numberyStrings.length === 0) {
      //second case
      return this.NaNyStrings;
    }
    // else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){  //third case, first code that works
    //  return this.numberyStrings.concat(this.NaNyStrings);}

    return this.numberyStrings.concat(this.NaNyStrings); //would love to make with  [...array] method
  },
  evenStrings: function() {
    //firs try to use filter
    //if (this.numberyStrings.length !== 0){
    //return this.numberyStrings.filter(even(this.numberyStrings % 2 === 0));

    function evenNumbers(nummer) {
      // a funtcion to find even numbers
      return nummer % 2 === 0;
    }

    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0) {
      return this.numberyStrings;
    } else if (this.NaNyStrings.length === 0) {
      return this.numberyStrings.filter(evenNumbers); // filter even numbers
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      return this.numberyStrings.filter(evenNumbers);
    }
  },
  oddStrings: function() {
    //a function to find odd numbers
    function oddNumbers(nummer) {
      return nummer % 2 !== 0;
    }

    if (this.numberyStrings.length === 0 && this.NaNyStrings.length !== 0) {
      
      // return this.NaNyStrings;
      // why did not pass ???
      // the answer is in return nany as number
      return this.numberyStrings;
    } else if (this.NaNyStrings.length === 0) {
      return this.numberyStrings.filter(oddNumbers);
    } else if (
      this.numberyStrings.length !== 0 &&
      this.NaNyStrings.length !== 0
    ) {
      return this.numberyStrings.filter(oddNumbers);
    }
  },
  negativeStrings: function() {
    //a function to find negative numbers

    function negativeNumbers(nummer) {
      return nummer < 0;
    }
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0) {
      return this.numberyStrings;
    } else if (this.NaNyStrings.length === 0) {
      return this.numberyStrings.filter(negativeNumbers);
    } else if (
      this.numberyStrings.length !== 0 &&
      this.NaNyStrings.length !== 0
    ) {
      return this.numberyStrings.filter(negativeNumbers);
    }
  },
  positiveStrings: function() {
    
    // a function to find positive numbers or empty string // the last case gives us an empty string
    function positiveNembers(nummer) {
      return nummer > 0 || nummer === '';
    }

    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0) {
      return this.numberyStrings;
    } else if (this.NaNyStrings.length === 0) {
      return this.numberyStrings.filter(positiveNembers);
    } else if (
      this.NaNyStrings.length !== 0 &&
      this.numberyStrings.length !== 0
    ) {
      return this.numberyStrings.filter(positiveNembers);
    }
  },
  zeroStrings: function() {
    
    // function to find zero VALUE
    function zero(nummer){
      return nummer == 0;
    }

    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
      return this.numberyStrings;
    } else if(this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      return this.numberyStrings.filter(zero);
    } else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      return this.numberyStrings.filter(zero);
    }
  },
  numberyAsNumbers: function() {
    
    // first try with map function // passed only first case
    // return this.numberyStrings.map( function numbersInStrings(number){
    // return Number;});
    //   I realised that I did not write the argument number

     return this.numberyStrings.map( function numbersInStrings(number){
     return Number(number);});
    
    // another style to write function
    // return this.numberyStrings.map(numbersInStrings => Number(numbersInStrings));
  },
<<<<<<< HEAD
  NaNyAsNumbers: function() {

    // there is no return result in any taste case

    return this.NaNyStrings.map (nothing => Number(nothing));
    //first, I call numbery strings => it only passed first case
    // now I call Nany strings!
=======
  sumOfNumbery: function () {
    // write me! (using a Array.prototype.reduce())
>>>>>>> upstream/master
  },
  sumOfNumbery: function() {
    
    const sumAll = (a, b) => Number(a) + Number(b);
    return this.numberyStrings.reduce(sumAll,0);
  },
  sumOfNaNy: function() {
    
    // return value is 'result !== result'
    // only NaN !== NaN
    // return NaN; 
    if(this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0) {
      return NaN;}
    const sumNaN = (a, b) => Number(a) + Number(b);
    return this.NaNyStrings.reduce(sumNaN,0);
  }
};

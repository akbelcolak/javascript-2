/*
  many of the exercises have focused on avoiding side effects
  this project is the opposite, you want to modify object.entries
  otherwise how can it save anything!

  You can even think of this week's object as a mini data base
  - there's a store of data in object.entries
  - and users can access & modify that data
*/

const object = {
  entries: {},
  isPrimitive: function (value) {
    
    return (value !== Object(value));
  },
  hasKey: function (obj, key) {
  
    return (obj.hasOwnProperty(key));
  },
  hasValue: function (obj, value) {
    
    return (Object.values(obj).indexOf(value) > -1);
  },
  addEntry: function (key, value) {
    if (typeof key !== 'string') {
      return new TypeError('addEntry: key should be a string');
    }
    // !this.isPrimitive(value)
    if (this.isPrimitive(value) === false) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    // what I tried:
    // if (this.hasOwnProperty(key) === true){}
    // if (this.entries.hasOwnProperty(key) === true){}
    // if (this.hasKey(this.entries, key)){}
    // if (this.entries.hasKey(key)) {}
    // if (this.entries.hasKey(this.entries, key)) {}
    
    if (key in this.entries===true) { // write me! (using this.hasKey)
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }
    else {this.entries[key] = value;
      return true;}
  },
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
    }
    delete this.entries[key];
    return true;
    
  },
  
  updateEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`updateEntry: no property "${key}" in this.entries`) };
    }
    else { this.entries[key] = value;
      return true;}
    // write me!
  },

  
  readAll: function () {
    let readObj = {...this.entries}
    return readObj;
  },
  findByKey: function (key) {
    if (typeof key!== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries,key)) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
    }

    //all steps
    // return {}  return an emty object so that it is not undefined
    // return {[key]: ''}  what are you looking for in your object; a key
    // return {[key]: this.entries} now you should be
    // return {[key]: this.entries[key]}
    else {return { [key]: this.entries[key] };}
  },
  findByValue: function (value) {
    if (this.isPrimitive !== value) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    // if (typeof this.hasValue === value)
    // if (typeof value !== 'this.hasValue')
    if (null) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    // write me! (this one is a bit trickier)
  },
}

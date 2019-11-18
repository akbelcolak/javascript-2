const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string') { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }
    /*
    object.entries = {};
    [['firstKey', 'firstValue'], ...]
    .forEach(newEntry => object.entries[newEntry[0]] = newEntry[1]);
    */

    /* This one is saying that the .currentKey property should be the value assigned to object.currentEntry.
    since object.currentEntry is a setter, what do you think it should set?
     */
  
      else {return this.currentKey = key;}
    // write me!
  },
  get currentEntry() {
    // write me!

    
  },
  likedKeys: [],
  get likedEntries() {

    // write me!
  },
  likeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries,key)) { // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (null) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }

    // write me!
  },
  unlikeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    // write me!
  },
  entries: {},
  isPrimitive: function (value) {
   return (value !== Object(value));
  },
  hasKey: function (obj, key) {
    return obj.hasOwnProperty(key); 
  },
  hasValue: function (obj, value) {
    if (Object.values(obj).includes(value)){return true;}
    else{return false;}
  },
  addEntry: function (key, value) {
    if (typeof key !== 'string') { 
      return new TypeError('addEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { 
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.hasKey(this.entries,key)){
      return new Error(`addEntry: key "${key}" already exists`);
    } else {
      this.entries[key] = value;
      return true;
    }
  },
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    else if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
    else {delete this.entries[key];
          return true;}
    },
  updateEntry: function (key, value) {
    if (typeof key !== 'string') { 
      return new TypeError('updateEntry: key should be a string');
    }
    if (!this.isPrimitive(value)) { 
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { 
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }  else {this.entries[key] = value;
          return true;}
  },
  readAll: function () {
    let readall = {...this.entries}
    return readall;
  },
  findByKey: function (key) {
    if (typeof key !== 'string') { 
      return new TypeError('findByKey: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) {
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }
    else {
      /*byKey = {...this.entries};
      this.entries[key] = byKey[key];
      return byKey;

      byKey = {};
      this.entries[key] = byKey[key];
      return byKey;*/

      byKey = {};
      byKey[key] = this.entries[key];
      return byKey;
      
    }
  },
  findByValue: function (value) {
    if (!this.isPrimitive(value)) { 
      return new TypeError('findByValue: value should be a primitive');
    }
    if (!this.hasValue(this.entries, value)) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
      }
      let finalobject = {};
      if (this.hasValue(this.entries, value)){
        const finalkey = Object.keys(this.entries);
        
        for (let i = 0; i < finalkey.length; i++) {
          if (this.entries[finalkey[i]] === value) {
            finalobject[finalkey[i]] = value;}
        }
        return finalobject;
      }
      else
      { return finalobject;}
  
    },
  };
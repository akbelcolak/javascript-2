const object = {
  entries: {},
  isPrimitive: function (value) {
    // write me!
  },
  hasKey: function (obj, key) {
    // write me!
  },
  hasValue: function (obj, value) {
    // write me!
  },
  addEntry: function (key, value) {
    if (null) { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }

    // write me!
  },
  removeEntry: function (key) {
    if (null) { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  updateEntry: function (key, value) {
    if (null) { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`updateEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  readAll: function () {
    // write me!
  },
  findByKey: function (key) {
    if (null) { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  findByValue: function (value) {
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (null) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    // write me!
  },
}

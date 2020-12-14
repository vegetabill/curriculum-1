/**
 * Shared between browser and server.
 */
class Counter {
  constructor(value) {
    this._count = parseInt(value) || 1;
    this._type = typeof(window) === 'object' ? 'Browser' : 'API';
  }

  increment() {
    console.log(`[Counter ${this.type}] INCREMENTING value ${this.value} => ${this.value+1}`);
    this._count++;
  }

  get value() {
    return this._count;
  }

  get type() {
    return this._type;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Counter;
}

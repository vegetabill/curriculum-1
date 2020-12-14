/**
 * Shared between browser and server.
 */
class Counter {
  #count;
  #type;

  constructor(value) {
    this.#count = parseInt(value) || 1;
    this.#type = typeof(window) === 'object' ? 'Browser' : 'API';
  }

  increment() {
    console.log(`[Counter ${this.type}] INCREMENTING value ${this.value} => ${this.value+1}`);
    this.#count++;
  }

  get value() {
    return this.#count;
  }

  get type() {
    return this.#type;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Counter;
}

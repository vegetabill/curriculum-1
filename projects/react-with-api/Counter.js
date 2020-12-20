class Counter {
  constructor(value) {
    this.value = parseInt(value) || 1;
    this.type = typeof(window) === 'object' ? 'Browser' : 'Node';
  }

  increment() {
    this.value++;
    this.printLog();
  }

  printLog() {
    console.log(`[Counter/${this.type}]`, this.value);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Counter;
}

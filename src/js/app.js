export default class Team {
  constructor() {
    this.members = {};
  }

  addAll(...objs) {
    for (let i = 0; i < objs.length; i += 1) {
      const item = objs[i];
      this.members[i] = item;
    }
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = Object.keys(this.members).length - 1;
    while (current < last) {
      yield this.members[current];
      current += 1;
    }
    return this.members[current];
  }
}

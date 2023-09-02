export default class Character {
  constructor(name, type) {
    if (typeof type === 'string') {
      this.type = type;
    } else {
      throw new Error('в конструктор передано некорректное значение');
    }
    if ((typeof name === 'string') && ((name.length >= 2) && (name.length <= 10))) {
      this.name = name;
    } else {
      throw new Error('в конструктор передано некорректное значение');
    }
    this.health = 100;
    this.level = 1;
  }
}

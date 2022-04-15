module.exports = class ProductsDAOMem {
  constructor() {
    this.elementos = [];
  }

  getById(id) {
    const elem = this.elementos.find((elem) => elem.id == id);
    if (!elem) throw new Error(`Error getById at DAO: elemento no encontrado`);
    return elem;
  }

  getAll() {
    return [...this.elementos];
  }

  save(elem) {
    let newId =
      this.elementos.length == 0
        ? 1
        : this.elementos[this.elementos.length - 1].id + 1;

    const newElem = { ...elem, id: newId };
    this.elementos.push(newElem);
    return newElem;
  }

  update(elem) {
    const index = this.elementos.findIndex((p) => p.id == elem.id);
    if (index == -1)
      throw new Error(`Error update at DAO: elemento no encontrado`);
    this.elementos[index] = elem;

    return elem;
  }

  deleteById(id) {
    const index = this.elementos.findIndex((elem) => elem.id == id);
    if (index == -1)
      throw new Error(`Error deleteById at DAO: elemento no encontrado`);
    return this.elementos.splice(index, 1);
  }

  deleteAll() {
    this.elementos = [];
    return true;
  }
};

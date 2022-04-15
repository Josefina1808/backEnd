const fs = require("fs");

module.exports = class ProductsDAOFile {
  constructor(name) {
    this.fileName = name;
    this.countID = 0;
    this.content = [];
    this.init();
  }

  async init() {
    try {
      let data = await fs.promises.readFile(this.fileName);
      this.content = JSON.parse(data);
      for (const element of this.content) {
        if (element.id > this.countID) this.countID = element.id;
      }
    } catch (error) {
      console.log("Aún no hay archivo");
    }
  }

  async write() {
    await fs.promises.writeFile(this.fileName, JSON.stringify(this.content));
  }

  save(object) {
    this.countID++;
    object["id"] = this.countID;
    this.content.push(object);
    this.write();
    return object;
  }

  getAll() {
    return this.content;
  }

  getById(id) {
    let result;
    if (this.content !== []) {
      result = this.content.find((x) => x.id === id);
      if (result === undefined) {
        result = null;
      }
    } else {
      result = "El archivo está vacío";
    }
    return result;
  }

  deleteById(id) {
    let result;
    if (this.content !== []) {
      let newContent = this.content.filter((x) => x.id !== id);
      this.content = newContent;
      this.write();
      result = `El producto fue eliminado`;
    } else {
      result = `El archivo está vacío`;
    }
    return result;
  }

  async deleteAll() {
    this.content = await this.content.splice(0, this.content.length);
    this.write();
  }

  update(id, obj) {
    const index = this.content.findIndex((objT) => objT.id == id);
    obj.id = this[index].id;
    this.content[index] = obj;
    return obj;
  }
};

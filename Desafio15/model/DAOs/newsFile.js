const fs = require("fs");
const newsDTO = require("../DTOs/newsDTO");
const NewsBaseDAO = require("./newsBaseDAO");

module.exports = class NewsFileDAO extends NewsBaseDAO {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }

  async read(file) {
    return JSON.parse(await fs.promises.readFile(file, "utf-8"));
  }
  async save(file, news) {
    await fs.promises.writeFile(file, JSON.stringify(news, null, "\t"));
  }

  getNews = async (_id) => {
    try {
      if (_id) {
        let news = await this.read(this.fileName);
        let index = news.findIndex((n) => n._id == id);

        return index >= 0 ? [news[index]] : [];
      } else {
        return await this.read(this.fileName);
      }
    } catch (e) {
      console.log("error getNews at DAO", e);
      await this.save(this.fileName, []);
      return [];
    }
  };
  saveNews = async (news) => {
    try {
      let news = await this.read(this.fileName);

      let _id = this.getNext_Id(news);
      let date = new Date().toLocaleDateString();
      let savedNews = newsDTO(news, _id, date);
      news.push(savedNews);

      await this.save(this.fileName, news);

      return savedNews;
    } catch (e) {
      console.log("error saveNews at DAO", e);
      return {};
    }
  };
  updateNews = async (news) => {
    try {
      let news = await this.read(this.fileName);

      let date = new Date().toLocaleDateString();
      let newNews = newsDTO(news, _id, date);

      let index = this.getIndex(id, this.news);
      let nowNews = this.news[index] || {};

      let updatedNews = {...nowNews,...newNews}

      await this.save(this.fileName, news);
      return updatedNews

    } catch (e) {
      console.log("error updateNews at DAO", e);

      return {};
    }
  };
  deleteNews = async (news) => {
    try {
        let news = await this.read(this.fileName);

        let index = this.getIndex(id, this.news);
        let deletedNews = this.news.splice(index,1)[0]

        await this.save(this.fileName, news);
        return deletedNews

    } catch (e) {
      console.log("error deleteNews at DAO", e);
      return {};
    }
  };
};

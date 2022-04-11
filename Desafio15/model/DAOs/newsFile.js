import fs from "fs";
import newsDTO from "../DTOs/newsDTO.js";
import NewsBaseDAO from "./newsBaseDAO.js";

class NewsFileDAO extends NewsBaseDAO {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }

  async read() {
    return JSON.parse(await fs.promises.readFile(this.fileName, "utf-8"));
  }
  async save(news) {
    await fs.promises.writeFile(this.fileName, JSON.stringify(news, null, "\t"));
  }

  getNews = async (_id) => {
    try {
      if (_id) {
        let news = await this.read();
        let index = news.findIndex((n) => n._id == id);

        return index >= 0 ? [news[index]] : [];
      } else {
        return await this.read();
      }
    } catch (e) {
      console.log("error getNews at DAO", e);
      await this.save([]);
      return [];
    }
  };
  saveNews = async (news) => {
    try {
      let news = await this.read();

      let _id = this.getNext_Id(news);
      let date = new Date().toLocaleDateString();
      let savedNews = newsDTO(news, _id, date);
      news.push(savedNews);

      await this.save(news);

      return savedNews;
    } catch (e) {
      console.log("error saveNews at DAO", e);
      return {};
    }
  };
  updateNews = async (newToUpdate) => {
    try {
      let news = await this.read();

      let date = new Date().toLocaleDateString();
      let newNews = newsDTO(newToUpdate, _id, date);

      let index = this.getIndex(id, news);
      let nowNews = this.news[index] || {};

      let updatedNews = {...nowNews,...newNews}
      
      index>=0?
      this.news.splice(index,1,updatedNews) :
      this.news.push(updatedNews)
      
      await this.save(news);
      return updatedNews

    } catch (e) {
      console.log("error updateNews at DAO", e);

      return {};
    }
  };
  deleteNews = async (news) => {
    try {
        let news = await this.read();

        let index = this.getIndex(id, news);
        let deletedNews = this.news.splice(index,1)[0]

        await this.save(news);
        return deletedNews

    } catch (e) {
      console.log("error deleteNews at DAO", e);
      return {};
    }
  };
};
export default NewsFileDAO
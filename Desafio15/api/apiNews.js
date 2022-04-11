import config from "../config/config.js";
import NewsFactoryDAO from "../model/DAOs/newsFactory.js";
import News from "../model/models/news.js";

class ApiNews {
  constructor() {
    this.newsDAO = NewsFactoryDAO.get(config.PERS);
  }

  async getNews(id) {
    return await this.newsDAO.getNews(id);
  }

  async saveNews(news) {
    ApiNews.validNews(news, true);
    return await this.newsDAO.saveNews(news);
  }
  async updateNews(id, news) {
    ApiNews.validNews(news, false);
    return await this.newsDAO.updateNews(id, news);
  }

  async deleteNews(id) {
    return await this.newsDAO.deleteNews(id);
  }

  async validNews(news, required) {
    try {
      News.validate(news, required);
    } catch (e) {
      throw new Error(
        "The news has an invalid json format or some data is missing: " +
          error.details[0].message
      );
    }
  }
}

export default ApiNews;

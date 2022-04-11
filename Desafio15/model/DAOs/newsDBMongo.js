import newsDTO from "../DTOs/newsDTO.js";
import NewsBaseDAO from "./newsBaseDAO.js";
import Config from "../../config/config.js";

import mongodb from "mongodb";
const { MongoClient, ObjectId } = mongodb;

class NewsDBMongoDAO extends NewsBaseDAO {
  constructor(database, collection) {
    super();
    (async () => {
      console.log("Connecting to database...");

      const connection = await MongoClient.connect(Config.db.connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = connection.db(database);
      this._collection = db.collection(collection);

      console.log("Data Base connected");
    })();
  }

  getNews = async (_id) => {
    try {
      if (_id) {
        const news = await this._collection.findOne({ _id: ObjectId(_id) });
        return [news];
      } else {
        const news = await this._collection.find({}).toArray();
        return news;
      }
    } catch (e) {
      console.log("Error getNews at DAO", e);
    }
  };

  saveNews = async (news) => {
    try {
      await this._collection.insertOne(news);
      return [news];
    } catch (e) {
      console.log("Error saveNews at DAO", e);
    }
  };

  updateNews = async (_id, news) => {
    try {
        await this._collection.updateOne({ _id: ObjectId(_id) }, {$set: news});
        return news;
      } catch (e) {
        console.log("Error updateNews at DAO", e);
        return news
      }
  }
  updateNews = async (_id) => {
    let deletedNews = newsDTO({},_id,null)
    try {
        await this._collection.delelteOne({_id: ObjectId(_id)});
        return deletedNews;
      } catch (e) {
        console.log("Error delteNews at DAO", e);
        return deletedNews
      }
  }
};
export default NewsDBMongoDAO
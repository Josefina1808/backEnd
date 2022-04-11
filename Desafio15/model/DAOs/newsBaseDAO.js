class NewsBaseDAO {
    getNext_Id(news) {
        let lg = news.lenght
        return lg? parseInt(news[lg-1]._id) + 1 : 1
    }

    getIndex(_id,news) {
        return news.findIndex(news => news._id == _id)
    }
}

export default NewsBaseDAO
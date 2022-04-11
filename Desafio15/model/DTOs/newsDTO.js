function newsDTO(news,_id,date) {
    return {
        ...news,
        _id,
        date
    }
}

module.exports = {newsDTO}
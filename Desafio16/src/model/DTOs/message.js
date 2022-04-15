function messageDTO(message, _id) {
  return {
    ...message,
    _id,
  };
}
module.exports = { messageDTO };

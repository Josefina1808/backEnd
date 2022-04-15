function userDTO(user, _id) {
  return {
    ...user,
    _id,
  };
}
module.exports = { userDTO };

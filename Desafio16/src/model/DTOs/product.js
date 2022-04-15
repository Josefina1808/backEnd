function productDTO(product, _id) {
  return {
    ...product,
    _id,
  };
}
module.exports = { productDTO };

const ProductsDAOMem = require("../src/model/DAOs/products/productsDAOMem");
const assert = require("assert").strict;

describe("test ProductsDAOMem", function () {
  it("deberia traer la lista de productos vacia", function () {
    // creamos una nueva instancia de ProductsDAOMem y verificamos que no tenga elementos
    const productsDAOMem = new ProductsDAOMem();
    assert.strictEqual(productsDAOMem.getAll().length, 0);
  });

  it("deberia agregar un producto", function () {
    const productsDAOMem = new ProductsDAOMem();
    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });
    assert.deepStrictEqual(productsDAOMem.getAll(), [
      {
        title: "Vaso",
        price: 1239,
        thumbnail:
          "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
        id: 1,
      },
    ]);
    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });
    assert.strictEqual(productsDAOMem.getAll().length, 2);
    assert.deepStrictEqual(productsDAOMem.getAll(), [
      {
        title: "Vaso",
        price: 1239,
        thumbnail:
          "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
        id: 1,
      },
      {
        title: "Vaso",
        price: 1239,
        thumbnail:
          "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
        id: 2,
      },
    ]);
  });

  it("deberia elimnar un producto según id", function () {
    const productsDAOMem = new ProductsDAOMem();

    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });

    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });
    assert.deepStrictEqual(productsDAOMem.deleteById(1), [
      {
        title: "Vaso",
        price: 1239,
        thumbnail:
          "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
        id: 1,
      },
    ]);
  });

  it("deberia eliminar todos los producto", function () {
    const productsDAOMem = new ProductsDAOMem();

    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });

    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });

    assert.strictEqual(productsDAOMem.deleteAll(), true);
  });

  it("deberia modificar un producto según 1", function () {
    const productsDAOMem = new ProductsDAOMem();

    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });

    productsDAOMem.save({
      title: "Vaso",
      price: 1239,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
    });

    assert.deepStrictEqual(
      productsDAOMem.update({
        title: "AHORA TENGO OTRO TITLE",
        price: 1500,
        thumbnail:
          "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
        id: 1,
      }),
      {
        id: 1,
        price: 1500,
        thumbnail:
          "https://cdn3.iconfinder.com/data/icons/geek-3/24/Deal_With_It_Glasses_pixel_geek_mame-128.png",
        title: "AHORA TENGO OTRO TITLE",
      }
    );
  });
});

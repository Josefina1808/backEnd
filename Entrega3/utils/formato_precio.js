const formatoPrecio = num => {
    // Función para dar formato de precio con separadores de miles (.) y decimales (,)
    num = num.toFixed(2);
    let entero, decimales;
    if (num.indexOf(".") >= 0) {
      entero = num.slice(0, num.indexOf("."));
      decimales = num.slice(num.indexOf(".")).replace(".", ",");
    }
    let enteroFormateado = "";
    for (let i = 1; i <= entero.length; i++) {
      if (i % 3 == 0) {
        if (i == entero.length) {
          enteroFormateado =
            entero.substr(entero.length - i, 3) + enteroFormateado;
          break;
        }
        enteroFormateado =
          ".".concat(entero.substr(entero.length - i, 3)) + enteroFormateado;
      }
    }
    enteroFormateado = entero.slice(0, entero.length % 3) + enteroFormateado;
    num = enteroFormateado.concat(decimales);
    return num;
  };

  module.exports = {formatoPrecio}
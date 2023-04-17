//---------ENCIPCION------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var btnEncriptar = document.getElementById("encriptar");
  btnEncriptar.addEventListener("click", function () {
    mostrarEncripcion();
  });
});

function mostrarEncripcion() {
  const texto = document.getElementById("texto").value;

  //validar solo minusculas y caracteres especiales
  if (validarCadena(texto) == false) {
    console.log("cagaste");

    //muestra sugerencia en rojo
    var elemento = document.getElementById("sugerencia");
    elemento.classList.add("aletsvg");
    //sugestText
    var elemento = document.getElementById("sugestText");
    elemento.classList.add("red");

    //muestra imgContainer
    var elemento = document.getElementById("imgContainer");
    elemento.classList.remove("yesText");

    //muestra la ecripcion
    var elemento = document.getElementById("encriptContainer");
    elemento.classList.add("yesText");
    document.getElementById("encripcion").value = "";

    //muestra alerta alert
    var elemento = document.getElementById("nullText");
    elemento.classList.remove("alert");

    return;
  }
  //validar vacios
  if (texto.trim() === "") {
    return;
  }
  var elemento = document.getElementById("nullText");
  elemento.classList.add("alert");

  //oculta imgContainer
  var elemento = document.getElementById("imgContainer");
  elemento.classList.add("yesText");

  //muestra la ecripcion
  var elemento = document.getElementById("encriptContainer");
  elemento.classList.remove("yesText");

  //muestra el valor enciptado
  var nuevoValor = encript(texto.toLowerCase());
  document.getElementById("encripcion").value = nuevoValor;
}

function encript(texto) {
  const reemplazos = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  const regex = new RegExp(Object.keys(reemplazos).join("|"), "g");
  return texto.replace(regex, (letra) => reemplazos[letra]);
}

function validarCadena(cadena) {
  return /^[a-z]+$/.test(cadena);
}

//---------DESENCIPCION----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var btnEncriptar = document.getElementById("desencriptar");
  btnEncriptar.addEventListener("click", function () {
    mostrarDesencipcion();
  });
});

function mostrarDesencipcion() {
  const texto = document.getElementById("encripcion").value;

  if (texto.trim() === "") {
    console.log("text area vacia");
    return;
  }

  //oculta imgContainer
  var elemento = document.getElementById("imgContainer");
  elemento.classList.add("yesText");

  //muestra la ecripcion
  var elemento = document.getElementById("encriptContainer");
  elemento.classList.remove("yesText");

  //muestra el valor enciptado
  var nuevoValor = decript(texto.toLowerCase());
  document.getElementById("encripcion").value = nuevoValor;
}

function decript(texto) {
  const reemplazos = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  const regex = new RegExp(Object.keys(reemplazos).join("|"), "g");
  return texto.replace(regex, (letra) => reemplazos[letra]);
}

document.addEventListener("DOMContentLoaded", function () {
  var btnEncriptar = document.getElementById("copiar");
  btnEncriptar.addEventListener("click", function () {
    copiarTexto();
  });
});

function copiarTexto() {
  const msj = document.getElementById("encripcion").value;
  navigator.clipboard
    .writeText(msj)
    .then(() => {
      //muestra la ecripcion
      var elemento = document.getElementById("copiar");
      elemento.classList.add("hide");

      var elemento = document.getElementById("copiado");
      elemento.classList.remove("hide");

      setTimeout(function () {
        var elemento = document.getElementById("copiar");
        elemento.classList.remove("hide");

        var elemento = document.getElementById("copiado");
        elemento.classList.add("hide");
      }, 1000);

      /* console.log("Texto copiado al portapapeles"); */
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
}

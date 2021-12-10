var texto = document.querySelector ("#texto") 
var select = document.querySelector("select")
var radio = document.querySelectorAll("input[name='radiobutton']")
var resultado = document.querySelector("#resultado")
var button = document.querySelector("button")
var passo = document.querySelector("#passo")
var containerPasso = document.querySelector(".passo")

select.addEventListener("change", function() {
    if(select.value == "cifra") {
        containerPasso.style.display = "flex"
    }else {
        containerPasso.style.display = "none"
    }
})
var radioValor = ""
for (var i=0; i< radio.length; i++) {
    radio[i].addEventListener("click", function(event){
        radioValor = event.target.value
        button.textContent = event.target.value.toUpperCase()
    })
}

button.addEventListener("click", function() {
    // console.log(radioValor)
    // console.log(select.value)
    // console.log(texto.value)

    if(radioValor == "codificar" && select.value == "cifra"){
        //rodar cifra
        resultado.innerText = cifra(parseInt(passo.value), texto.value)
        console.log(cifra(parseInt(passo.value), texto.value))
    }else if (radioValor == "codificar" && select.value == "base") {
        //rodar base 64
        resultado.innerText = codificaBase64(texto.value)
    }
    else if(radioValor == "decodificar" && select.value == "cifra"){
        //decriptografar cifra
        console.log(decifraCesar(parseInt(passo.value), texto.value))
        resultado.innerText =  decifraCesar(parseInt(passo.value), texto.value)
    }else if (radioValor == "decodificar" && select.value == "base") {
        //decriptografar base
        resultado.textContent = decodificaBase64(texto.value)
    }
})
function cifra(passo, texto) {
    //operação
    var resultadoCifra = ""
    var codigoCifra = 0
    for (var i=0; i < texto.length; i++) {
        if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
            codigoCifra = (((texto.charCodeAt(i) - 65) + passo) % 26) + 65;
        }
        else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
        codigoCifra = (((texto.charCodeAt(i) - 97) + passo) % 26) + 97;
        }
        else if (texto.charCodeAt(i) === 32) {
            codigoCifra = 32;
        }
        resultadoCifra += String.fromCharCode(codigoCifra);
    }
    console.log(resultadoCifra)
    return resultadoCifra
}
//conversor codigo de Cesar
function decifraCesar(passo, texto) {
    var decodificado = ""
    var decode = 0;
    for (var i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
        decode = (((texto.charCodeAt(i) - 90) - passo) % 26) + 90;
      }
      else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
        decode = (((texto.charCodeAt(i) - 122) - passo) % 26) + 122;
      }
      else if (texto.charCodeAt(i) === 32) {
        decode = 32;
      }
        decodificado += String.fromCharCode(decode);
        console.log(decode)
        console.log(decodificado)
    }
    return decodificado;
  }
  function codificaBase64(texto) {
    return btoa(texto);
  }
  
  function decodificaBase64(texto) {
    return atob(texto);
  }
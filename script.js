// variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const imagen = document.querySelector(".img3");
const bold = document.querySelector(".bold");
const parr = document.querySelector(".parr");
const btnCopiar = document.querySelector(".btn-copiar");

//logica

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//captura la información de la pagina web con value y la encripta con la función encriptar
function btnEncriptar() {
    imagen.style.display = "none";
    bold.style.display = "none";
    parr.style.display = "none";
    mensaje.style.display = "block";
    btnCopiar.style.display = "block";
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

//logica de encriptación.
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

//captura la información de la pagina web con value y la desencripta con la función desencriptar
function btnDesencriptar() {
    imagen.style.display = "none";
    bold.style.display = "none";
    parr.style.display = "none";
    mensaje.style.display = "block";
    btnCopiar.style.display = "block";
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

//logica de desencriptación
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}

//logica boton copiar
//copia la información en formato texto con el clipboarAPI
function btnCopiarAPI() {
    if (navigator.clipboard) {
        alert("Texto Copiado con exito");
        imagen.style.display = "block";
        bold.style.display = "block";
        parr.style.display = "block";
        mensaje.style.display = "none";
        btnCopiar.style.display = "none";
        navigator.clipboard.writeText(mensaje.value);
        textArea.focus();
    } else {
        alert("Este navegador no soporta el copiado");
    }
    
}

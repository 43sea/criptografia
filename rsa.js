// Gera as chaves pública e privada
function gerarChaves() {
  var p = 11; // Número primo
  var q = 13; // Outro número primo
  var n = p * q;
  var phi = (p - 1) * (q - 1);
  var e = 7; // Escolha um número primo e menor que phi
  while (phi % e === 0) {
    e++;
  }
  var d = inversoMod(e, phi);
  return {
    chavePublica: [e, n],
    chavePrivada: [d, n]
  };
}

//alert(String.fromCharCode(12))
// Encripta a mensagem usando a chave pública
function encriptar(messagem, chavePublica) {
  var e = chavePublica[0];
  var n = chavePublica[1];
  var cifra = [];
  for (var i = 0; i < messagem.length; i++) {
    var charCode = messagem.charCodeAt(i);
    cifra.push(modPow(charCode, e, n));
  }
  return cifra;
}


// Decifra a mensagem usando a chave privada
function descriptar(cifra, chavePrivada) {
  var d = chavePrivada[0];
  var n = chavePrivada[1];
  var messagem = "";
  for (var i = 0; i < cifra.length; i++) {
    var charCode = modPow(cifra[i], d, n);
    messagem += String.fromCharCode(charCode);
  }
  return messagem;
}

// Retorna o inverso modular de a módulo b
function inversoMod(a, b) {
  var b0 = b;
  var x0 = 0;
  var x1 = 1;
  var q, tmp;
  if (b === 1) {
    return 1;
  }
  while (a > 1) {
    q = Math.floor(a / b);
    tmp = a;
    a = b;
    b = tmp % b;
    tmp = x0;
    x0 = x1 - q * x0;
    x1 = tmp;
  }
  if (x1 < 0) {
    x1 += b0;
  }
  return x1;
}

// Retorna a potência de base elevada a expoente módulo m
function modPow(base, expoente, modulus) {
  if (modulus === 1) {
    return 0;
  }
  var result = 1;
  base = base % modulus;
  while (expoente > 0) {
    if (expoente % 2 === 1) {
      result = (result * base) % modulus;
    }
    expoente = Math.floor(expoente / 2);
    base = (base * base) % modulus;
  }
  return result;
}

function msgCifraDs(cifra){
  var j = ""
  for(var i=0; i<cifra.length; i++){
    j+=String.fromCharCode(cifra[i])
  }
  return j.trim()
}
// Exemplo de uso
var btnAscii = window.document.querySelector(".btnAscii");
btnAscii.addEventListener("click", ()=>{
    var msgAscii = document.querySelector(".msgAscii");
    var secretoAscii = document.querySelector(".secretoAscii")
    var descretoAsci = document.querySelector(".descretoAsci")
    var keys = gerarChaves();
    var messagem = msgAscii.value;
    var cifra = encriptar(messagem, keys.chavePublica);
    var descriptedMessagem = descriptar(cifra, keys.chavePrivada);
    console.log("Mensagem original: " + messagem);
    console.log("Mensagem criptografada: " + msgCifraDs(cifra));
    console.log("Mensagem decifrada: " + descriptedMessagem);
    secretoAscii.innerHTML = msgCifraDs(cifra)
    descretoAsci.innerHTML = descriptedMessagem
    //alert(String.fromCharCode(21))
    //var msgCifra
})

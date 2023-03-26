// Criptografa uma mensagem usando uma chave
function encriptar(mensagem, chave) {
    var cifra = "";
    for (var i = 0; i < mensagem.length; i++) {
      var charCode = mensagem.charCodeAt(i);
      var chaveChar = chave.charCodeAt(i % chave.length);
      var encriptadoChar = charCode ^ chaveChar; // Operador XOR
      cifra += String.fromCharCode(encriptadoChar);
    }
    return cifra;
  }
  
  // Descriptografa uma mensagem usando uma chave
  function decriptar(cifra, chave) {
    var mensagem = "";
    for (var i = 0; i < cifra.length; i++) {
      var cifraChar = cifra.charCodeAt(i);
      var chaveChar = chave.charCodeAt(i % chave.length);
      var decriptadoChar = cifraChar ^ chaveChar; // Operador XOR
      mensagem += String.fromCharCode(decriptadoChar);
      
    }
    return msgR(mensagem);
  }

  function msgE(mensagem){
    var j = mensagem[0]
    for(var i=0; i<mensagem.length; i++){
      if(i>1){
        j+=mensagem[i]
      }else if(i==1){
        j+=" "+mensagem[1]
      }
    }
    return j
  }

  function msgR(mensagem){
    var j = " "
    for(var i=0; i<mensagem.length; i++){
      if(i!=1){
        j+=mensagem[i]
      }
    }
    return j.trim()
  }
  
  // Exemplo de uso

var btnAscii = window.document.querySelector(".btnAscii2");
btnAscii.addEventListener("click", ()=>{
  var msgAscii = document.querySelector(".msgAscii2");
  var secretoAscii = document.querySelector(".secretoAscii2")
  var descretoAsci = document.querySelector(".descretoAsci2")
  var mensagem = msgAscii.value;
  var chave = "chave";
  var cifra = encriptar( msgE(mensagem), chave);
  var decriptadoMensagem = decriptar(cifra, chave);
  console.log("Mensagem original: " + mensagem);
  console.log("Mensagem criptografada: " + cifra);
  console.log("Mensagem descriptografada: " + decriptadoMensagem);
  secretoAscii.innerHTML = cifra
  descretoAsci.innerHTML = decriptadoMensagem 
  //alert(String.fromCharCode(21))
  //var msgCifra
})
  
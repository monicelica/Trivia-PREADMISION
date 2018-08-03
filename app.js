//solicitando nombre
function starall() {
var userName = prompt("Bienvenido\n Ingresa tu nombre");
document.getElementById("usuario").innerHTML = userName;
alert(userName + " elige la categoria de la trivia que quieres jugar");
}
function transport() {
var question=confirm( "¡Empecemos el juego!");
var score= 0;
var incorrecta=" es incorrecta";
//preguntaralusuario

if(question==true) {
  alert("Escribe el número de la respuesta correcta");
  var answer = prompt ("Menciona el color correspondiente a la linea 9\n 1.Cafe\n 2.Roja\n 3.Azul  ");
  //comenzando switch
  switch(answer) {

    case "1":
      alert("!Muy bien!");
      var answer = "Café es correcta";
      var score = score + 1;
    break;

    case "2":
      alert("Tu respuesta  incorrecta");
      var answer = "Roja es incorrecta";
      break;

    case "3":
      alert("Tu respuesta es incorrecta");
      var answer = "Naranja es incorrecta";
      break;

    default:
      alert("Tú respuesta es invalida");
      var answer = "Respuesta invalida";
      //answer= "tú respuesta fue invalida";
  }
  //comenzando switch pregunta 2
  var answer2 = prompt ("Menciona en que estación del metro corresponde el transborde de la línea Café a la Verde\n 1.Ermita\n 2.Chabacano\n 3.Jamaica ");
  switch (answer2) {
    case "1":
      alert("Tu respuesta es incorrecta");
      var answer2 = "Ermita es incorrecta";
    break;

    case "2":
      alert("Muy bien!");
      var answer2 = "Chabacano es correcta";
      var score = score + 1;
    break;

    case "3":
      alert("Tu respuesta es incorrecta");
      var answer2 = "Jamaica es incorrecta";
    break;

    default:
      alert("Tu respuesta es invalida");
      var answer2 = "Respuesta invalida";
  }



  //comenzando switch pregunta 3
  var answer3 = prompt("¿Con cuál imagen se representa la estacion Xola?\n 1.Ave\n 2.Palmera\n 3.Caballo ");
  switch (answer3) {
  	case "1":
      alert("Tu respuesta es incorrecta");
      var answer3 = "Ave es incorrecta"  
    break;

    case "2":
      alert("Muy bien!");
      var answer3 = "Palmera es correcta";
      var score = score + 1;
    break;

    case "3":
      alert("Tu respuesta es incorrecta");
      var answer3 = "Caballo es incorrecta"  
    break;

	default:
  	  alert("Tu respuesta es incorrecta");
	  var answer3 = "Respuesta invalida";
 }

 alert("Veamos tú resultado");

  document.getElementById("show").innerHTML ="Tús respuestas fueron las siguientes: " 
                                              + answer + ",  " 
                                              + answer2 + ",  " 
                                              +answer3;
  document.getElementById("puntuaje").innerHTML ="Tú puntuaje es: " + score+"/3";
  

}else{
	document.getElementById("wrong").innerHTML = "Jugaremos para la proxima";
}
}








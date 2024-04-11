// valor aleatorio generado
  var y = Math.floor(Math.random() * 10 + 1);
  var x = document.getElementById("guessField").ariaValueMax;
if(x == y)
{
    alert("guau guau"+playername+" Dejame hablar a mi"
          + guess + "Intento");
    guess= 1;
}
else if(x > y)
{
    guess++;
    alert("De nuevo con mas ganas")
}
else
{
    guess++;
    alert("De nuevo con menos ganas")
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
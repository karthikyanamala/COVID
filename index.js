var Alfa_bits=["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


var random_generator=Alfa_bits[Math.floor(Math.random()*Alfa_bits.length)];

document.getElementById("alfabits").innerHTML=random_generator;

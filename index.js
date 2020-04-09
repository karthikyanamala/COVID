var random_number=Math.floor((Math.random()*100)+1);
document.getElementById("alfabits").innerHTML=random_number + "%";
prompt("Enter Your Name");
if(random_number>50){
    document.getElementById("care").innerHTML="Take Care Be Safe"
}
else{
    document.getElementById("care").innerHTML="Be safe"
}

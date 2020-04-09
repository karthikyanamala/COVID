var random_number=Math.floor((Math.random()*100)+1);
document.getElementById("alfabits").innerHTML=random_number + "%";
var Name=prompt("Enter Your Name")
if(random_number>50){
    document.getElementById("care").innerHTML="Hey!!"+Name+" Take Care Be Safe"
}
else{
    document.getElementById("care").innerHTML="Hey!!"+Name+" Be safe"
}

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', myFunction);      
});

document.getElementById('textBoxId').style.height="200px";
document.getElementById('textBoxId').style.fontSize="14pt";

function myFunction() {
    var aut= document.getElementById("author").value;
    var datP= document.getElementById("dateP").value;
    var dat= document.getElementById("date").value;
    var tit= document.getElementById("title").value;
    var wnm= document.getElementById("wName").value;
    var wp= document.getElementsById("wPub").value;
    var space = ' ';
    var total = aut.concat(space,tit,space,wnm,space,wp,space,datP,space,dat);
    document.getElementById("citation").innerHTML = total;
}




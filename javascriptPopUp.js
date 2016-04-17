document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', myFunction);      
});

document.getElementById('textBoxId').style.height="200px";
document.getElementById('textBoxId').style.fontSize="14pt";

function myFunction() {
    var aut= document.getElementById("author").value;
    var url= document.getElementById("url").value;
    var dat= document.getElementById("date").value;
    var tit= document.getElementById("title").value;
    var space = ' ';
    var total = tit.concat(space,aut,space,dat,space,url);
    document.getElementById("citation").innerHTML = total;
}
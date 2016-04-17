

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', myFunction);      
});
    
document.getElementById('textBoxId').style.height="200px";
document.getElementById('textBoxId').style.fontSize="14pt";

function myFunction() {
    var aut= document.getElementById("author").value;
    var webT= document.getElementById("websiteTitle").value;
    var datA= document.getElementById("date").value;
    var datP= document.getElementById("datePublished").value;
    var tit= document.getElementById("title").value;
    var webP= document.getElementById("websitePublisher").value;
    var space = ' ';
    var total = aut.concat(space,tit,space,webT,space,webP,space,datP,space,datA);
    document.getElementById("citation").innerHTML = total;
}


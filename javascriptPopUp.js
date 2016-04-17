document.addEventListener("DOMContentLoaded",function (){
    //Fetch all contents
    chrome.storage.local.get(null,function (obj){
        console.log(JSON.stringify(obj));
    });
    //Set some content from browser action
    chrome.storage.local.set({"anotherIdentifier":"Another awesome Content"},function (){
        console.log("Storage Succesful");
    });
});

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

localStorage["mysetting"] = "inputTextToSave";
myvar = localStorage["mysetting"];



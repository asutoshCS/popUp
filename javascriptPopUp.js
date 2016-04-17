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
$("button").click(function() {
  // create `a` element
  $("<a />", {
      // if supported , set name of file
      download: $.now() + ".txt",
      // set `href` to `objectURL` of `Blob` of `textarea` value
      href: URL.createObjectURL(
        new Blob([$("textarea").val()], {
          type: "text/plain"
        }))
    })
    // append `a` element to `body`
    // call `click` on `DOM` element `a`
    .appendTo("body")[0].click();
    // remove appended `a` element after "Save File" dialog,
    // `window` regains `focus` 
    $(window).one("focus", function() {
      $("a").last().remove()
    })
})
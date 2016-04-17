var link = document.getElementById("link");
link.addEventListener("click", function(){
  chrome.tabs.getSelected({}, function(tab) {
    chrome.tabs.update(tab.id, {url: 'http://google.com'});
  });
}, false);

chrome.tabs.getSelected({}, function(tab) {
  chrome.tabs.update(tab.id, {url: 'http://google.com'});
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

function saveTextAsFile()
{
	var textToWrite = document.getElementById("inputTextToSave").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}

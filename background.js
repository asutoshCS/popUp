chrome.storage.local.set({"identifier":"Some awesome Content"},function (){
    console.log("Storage Succesful");
});
//get all contents of chrome storage
chrome.storage.local.get(null,function (obj){
        console.log(JSON.stringify(obj));
});
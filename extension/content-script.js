let msg = {
    "txt": "getData"
}
chrome.runtime.sendMessage(msg, function(response) {
    console.log(response);
    document.write(response.data);
});

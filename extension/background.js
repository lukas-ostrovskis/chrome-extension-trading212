
chrome.action.onClicked.addListener(buttonClicked);
chrome.runtime.onMessage.addListener(gotMessage);

function buttonClicked(tab) {
    let message = {
        "txt": "load"
    }
    chrome.tabs.sendMessage(tab.id, message);
}

let data;

function gotMessage(message, sender, sendResponse) {
    if(message.txt === 'putData') {
        data = message;
        chrome.tabs.create({ url: "dataTab.html" });
    }
    else if(message.txt === 'getData') {
        sendResponse(data);
    }
}
console.log('lets goo');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if(message.txt === "load") {
        let shares = document.querySelectorAll('.bucket-holding-instrument');

        let shareNames = "";
    
        for(let i = 0; i < shares.length; i++) {
            let target = shares[i].innerText.split('/')[1].split('\n')[1];
            shareNames += shares[i].getAttribute("data-qa-ticker").split('_')[0];
            shareNames += " ";
            shareNames += target;
            shareNames += "<br />";
        }
    
        let msg = {
            "txt": 'putData',
            "data": shareNames
        }
        chrome.runtime.sendMessage(msg);
    }
    
}
function getaddress(e) {
  var a = "https://sellercentral.amazon.com/gp/orders-v2/details?ie=UTF8&orderID=" + e;
  chrome.tabs.create({ url: a }, function (e) {
    makeRequest(e.id)
  })
}
function makeRequest(e) {
  console.log(e), tabtocloseid = e, chrome.tabs.update(originaltabid, { selected: !0 })
}
function closetab() {
  chrome.tabs.remove(tabtocloseid)
}
function handleMessage(e, a) {
  if ("getaddress" == e.command) {
    originaltabid = a.tab.id;
    var s = e.orderid;
    getaddress(s)
  }
  if ("sendaddress" == e.command) {
    var o = e.datax;
    console.log(e), chrome.tabs.sendMessage(originaltabid, { command: "hereistheaddress", datax: o })
  }
  "closetab" == e.command && closetab()
}
chrome.runtime.onMessage.addListener(handleMessage);
var originaltabid = 0, tabtocloseid = 0;
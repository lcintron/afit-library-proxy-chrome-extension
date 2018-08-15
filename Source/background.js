//Developed by Luis Cintron
//www.luiscintron.com
//August 2018
//Runs when the extension is loaded for the first time.
document.addEventListener('DOMContentLoaded', function () {
	console.log('Extension loaded.');
}, false);

//Inject Javascript that looks for BTC prices
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === 'loading' || changeInfo.status === 'complete') {
		chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {

			if (tab.url.startsWith('https://ieeexplore.ieee.org')
				|| tab.url.startsWith('https://dl.acm.org')
				|| tab.url.startsWith('https://ascelibrary.org')
				|| tab.url.startsWith('https://search.proquest.com')
				|| tab.url.startsWith('https://www.sciencedirect.com')
			) {
				let rUrl = 'https://afit.idm.oclc.org/login?url=' + tab.url;
				chrome.tabs.update(tab.id, { url: rUrl });
			}
			//if afit login site - inject js to post login
			else if (changeInfo.status === 'complete' && tab.url.startsWith('https://afit.idm.oclc.org/login')) {
				chrome.storage.sync.get(['userInfo'], function (items) {
					if (items.userInfo && items.userInfo.user && items.userInfo.pass && items.userInfo.verified)
						chrome.tabs.executeScript(tabId, { code: 'var afitlibuser="' + items.userInfo.user + '";var afitlibpass="' + items.userInfo.pass + '";' }, function () {
							chrome.tabs.executeScript(tabId, { file: 'inject.js' });
						});
				});
			}
		});
	}
});

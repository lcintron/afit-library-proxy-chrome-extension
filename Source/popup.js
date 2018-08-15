function btnClick(){
	 let rUrl = 'https://afit.idm.oclc.org/login';
	 let iuser = document.getElementById('userName').value;
	 let ipass = document.getElementById('password').value;
     let postData = 'user='+iuser+'&pass='+ipass;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", rUrl, true);
	xhr.setRequestHeader('Content-Type', 'application/text');
	xhr.onreadystatechange = function () {
		if(this.readyState === 4){
			var valid = !this.responseText.includes('username/password provided is not valid');
			if(valid){
				chrome.storage.sync.set({ "userInfo": {user: iuser,pass:ipass,verified:valid}});
				document.getElementById('btnSave').innerText = 'Verified';
			}
		}
	};
	xhr.send(postData);
	
}

chrome.storage.sync.get(['userInfo'], function(items){
    if(items.userInfo && items.userInfo.user && items.userInfo.pass){
		document.getElementById('userName').value = items.userInfo.user;
		document.getElementById('password').value = items.userInfo.pass;
		document.getElementById('btnSave').innerText = items.userInfo.verified?'Verified':"Save";
	}
});


document.getElementById('btnSave').addEventListener('click', btnClick);
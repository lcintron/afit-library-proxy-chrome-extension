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
				chrome.storage.sync.set({ "user": iuser,"pass": ipass });
				document.getElementById('btnSave').innerText = 'Verified';
			}
		}
	};
	xhr.send(postData);
	
}

chrome.storage.sync.get(['user','pass'], function(items){
    if(items.user){
		document.getElementById('userName').value = items.user;
	}
	if(items.pass){
		document.getElementById('password').value = items.pass;
	}
	
	if(items.user && items.pass){
		document.getElementById('btnSave').innerText = 'Verified';
	}
});


document.getElementById('btnSave').addEventListener('click', btnClick);
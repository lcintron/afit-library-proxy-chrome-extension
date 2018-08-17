var afitproxy = {
	loadingCount: 0,
	displayOverlay: function () {
		var wrapper = document.createElement('div');
		wrapper.innerHTML = '<div id="afitoverlay" style="position: fixed;display: none;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.5);z-index: 2;cursor: pointer;"><div id="afitoverlaytext" style="position: absolute;top: 50%;left: 50%;font-size: 50px;color: white;transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);">Loading<br/><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-double-ring" style="background: rgb(128, 128, 128);"><circle cx="50" cy="50"  fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke="#182731" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(336.298 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" fill="none" stroke-linecap="round" r="35" stroke-width="4" stroke="#06e1ff" stroke-dasharray="54.97787143782138 54.97787143782138" stroke-dashoffset="54.97787143782138" transform="rotate(-336.298 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg></div></div>';
		document.body.appendChild(wrapper);
		document.getElementById("afitoverlay").style.display = "block";
		document.getElementById('afitoverlaytext').innerText = 'Loading...';
	},
	login: function () {
		if (afitlibuser && afitlibpass) {
			document.getElementsByName('user')[0].value = afitlibuser;
			document.getElementsByName('pass')[0].value = afitlibpass;
			document.getElementsByTagName('form')[0].submit();
		}else{
			document.getElementById("afitoverlay").style.display = "none";
		}
	},
	execute: function () {
		afitproxy.displayOverlay();
		afitproxy.login();
	}
};

afitproxy.execute();

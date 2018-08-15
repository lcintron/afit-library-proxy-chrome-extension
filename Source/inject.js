var afitproxy = {
	loadingCount: 0,
	displayOverlay: function () {
		var wrapper = document.createElement('div');
		wrapper.innerHTML = '<div id="afitoverlay" style="position: fixed;display: none;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.5);z-index: 2;cursor: pointer;"><div id="afitoverlaytext" style="position: absolute;top: 50%;left: 50%;font-size: 50px;color: white;transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);">Loading</div></div>';
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

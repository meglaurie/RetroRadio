var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/searchByName?query=rfm");
xhr.setRequestHeader("x-rapidapi-host", "radio-world-50-000-radios-stations.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "ADD API  KEY HERE");

xhr.send(data);

var button = document.getElementById('counter');

button.onclick = function () {

	var request = new XMLHttpRequest.DONE();

	request.onreadystatechange = function () {
		if (request.readyState === XMLHttpRequest.DONE){
			if (request.readyState === 200) {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	}
	request.open('GET','http://subhampramanik.imad.hasura-app.io/counter', true);
	request.send(null);
};

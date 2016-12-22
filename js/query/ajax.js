const url = 'https://localhost:9999/';
var button = document.getElementById("button_id");

button.addEventListener("click", function(){

	var req = new XMLHttpRequest();
	req.open('GET', url);

	if (req.status == 0){
		alert(req.responseText);
	}  
    
	req.onload = function(){	

		if (req.status >= 200 && req.status < 400){
			var data = JSON.parse(req.responseText); 
			addPersonToCollectionFromURL(data);
		} else {
			alert('server has retutned error :(')
		}	
	}

	req.error() = function(){
		alert('connection failure :(');
	};

	req.send();

});  

function addPersonToCollectionFromURL(data){

	var peopleCollection = new PeopleCollection();
	peopleCollection.add(data);

	doView(peopleCollection);
}














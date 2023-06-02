let gero = document.getElementById("addd").value
let joshua = document.getElementsByClassName("tasks");
console.log(gero);
let div = document.createElement('div');
let subdiv1 = document.createElement('div')
let subdiv2 = document.createElement('div')
let p = document.createElement('p');
let button1 = document.createElement('button')
let button2 = document.createElement('button')
let i;
function geromie() {
	if(gero == ""){
		alert('Please provide a value.')
	}
	else {
		joshua[0].append(div);
		div.className = "content"
		div.append(subdiv1)
		subdiv1.innerText = gero;
		subdiv1.className = 'left'
		div.append(subdiv2);
		subdiv2.className = "grid"
		subdiv2.align = "right"
		let div2 = document.getElementsByClassName("grid");
		div2[0].append(button2);
		button2.className = "check";
		button2.innerText = "Done";
		div2[0].append(button1);
		button1.className = "hide";
		button1.innerText = "Delete";
	}
}
let func = document.getElementsByClassName("hide")
for(i = 0; i < func.length; i++){
	func[i].onclick = function hide(){
		var select = this.parentElement;
		select.style.display = "none";
	}
}

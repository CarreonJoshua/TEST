
let i = 0;
let comparator = 0
//more or less the adding of new entries
function script() {
	let gero = document.querySelector('#addData').value
	let joshua = document.querySelector('.tasks')
	let div = document.createElement('div')
	let button1 = document.createElement('button')
	let button2 = document.createElement('button')
	let li = document.createElement('li');
	if(gero == ""){
		alert('please input a task on the field.')
	}
	else {
		document.querySelector('.list').append(li)
		li.innerText = gero
		li.style.display = "block"
		li.append(div)
		div.className = "grid"
		div.append(button1)
		button1.innerText = "remove"
		button1.className = "close"+i
		div.append(button2)
		button2.innerText = "done"
		button2.className = "done"+i
		ode()
		edo()
		increment()
	}
}
//remove
function ode() {
	let li = document.querySelector('.list')
	let close = document.querySelector('.close'+i)
	close.onclick = function() {
		let select = this.parentElement.parentElement
		select.remove();
	}
}
function edo() {
	let li = document.querySelector('.list')
	let done = document.querySelector('.done'+i)
	done.onclick = function() {
		let select = this.parentElement.parentElement
		if(comparator == 1){
			select.style.textDecoration = "none"
			comparator = 0

		}
		else {
			select.style.textDecoration = "line-through"
			comparator = 1
			console.log(comparator)
		}
	}
}
function increment() {
	i++
}
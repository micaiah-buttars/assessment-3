console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	console.log(evt.target.data)
	
	alert('Submission successful!');
}

let cat = document.querySelector('#cat')
function compliment(){
	alert('You have nice teeth. :)')
}
cat.addEventListener('mouseover', compliment)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
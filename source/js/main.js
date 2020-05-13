//Instantiate
const formPassword = document.querySelector('#formPassword');
const submit = document.querySelector('#formSubmit');
const modalHugOverlay = document.querySelector('#modalHugOverlay');
const password = new Password(formPassword);

const letter = new Letter(modalHugOverlay);


//Display output
password.checkField(formPassword);
password.submitPassword(formPassword);
letter.showHug();
letter.closeHug();



/* letter.submitPassword(); */
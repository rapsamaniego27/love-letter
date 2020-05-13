class Letter {
  constructor(modalHugOverlay) {
    this.modalHugOverlay = modalHugOverlay;
  }



  // Properties
  showHug() {
    const hugButton = document.querySelector('#btnHug');

    hugButton.addEventListener('click', (e)=> {
      e.preventDefault();
      this.modalHugOverlay.classList.remove('modal--hide');
      
    });

  }

  closeHug(){
    const closeButton = document.querySelector('.modal-hug__close');
    
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();

      this.modalHugOverlay.classList.add('modal--hide');

    });

  }

}


// require ('bootstrap');

class Password {
  constructor(password, submit) {
    this.password = password;
    this.submit = submit;
    this.modalFormImg = document.querySelector('#modalFormImg');
    this.rightPassword = 'raprapiscool';

  }

  // Properties
  validatePassword() {
  
   const passwordValue = this.password.value;
   const errorClass = 'modal-form__error--show';
   const successClass = 'modal-form__success--show';
   const messageSpan = document.querySelector('#formMessage');
   /* Span Messages */
   const messageSuccess = 'Galing mo Besh! <br> Redirecting ...';
   const messageError = 'Mali password mo besh!';
   


   /* if Password is not equal to the right password */
   if(passwordValue != this.rightPassword) {
     this.setMessage(messageSpan, messageError, errorClass);

    /* Changes Hello Kitty's mood */
    this.modalFormImg.src = './images/angry-kitty.png';

    this.neutralizeKitty(messageSpan, errorClass);
     
   }else{
     
    this.setMessage(messageSpan, messageSuccess, successClass);

    setTimeout(() => {
      messageSpan.classList.remove(successClass);

      /* removes the blur effect of container */
      const letterContainer = document.querySelector('#letterContainer');
      letterContainer.classList.remove('letter--blur');

      /* removes the modal */
      const modal = document.querySelector('#modalFormOverlay');
      modal.classList.add('modal--hide');
    }, 2000);
    

    

   }
   /* End of Statement */

   
   
  }

  submitPassword(){
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e)=> {   
      e.preventDefault();
     this.validatePassword();
          
    });

  }

  checkField(){
    this.password.addEventListener('keyup', () => {
         
         const passwordValue = this.password.value;
         const errorClass = 'modal-form__error--show';
         const successClass = 'modal-form__success--show';
         const messageSpan = document.querySelector('#formMessage');

         const messageError = 'Mali password mo besh!';
         console.log(passwordValue);

         if (passwordValue != this.rightPassword){
           this.setMessage(messageSpan, messageError, errorClass);

           /* Changes Hello Kitty's mood */
           this.modalFormImg.src = './images/angry-kitty.png';
           
           
         }else{

            messageSpan.classList.remove(errorClass);

            this.setMessage(messageSpan, 'Try mo nga besh', successClass);

            this.modalFormImg.src = './images/hello-kitty.png';
         }





    });
  }
  
  setMessage(target, message, classname){

      target.classList.add(classname);
      target.innerHTML = message;


  }

  neutralizeKitty(target, errorClass){
    setTimeout(() => {
      target.classList.remove(errorClass);
      this.modalFormImg.src = './images/hello-kitty.png';
    }, 3000);

  }

}





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
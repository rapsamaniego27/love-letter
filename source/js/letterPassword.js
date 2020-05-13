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
    form.addEventListener('submit', ()=> {   

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





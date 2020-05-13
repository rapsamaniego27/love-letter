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


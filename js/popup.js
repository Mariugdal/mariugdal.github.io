var buttonForm = document.querySelector(".button-form");
var popup = document.querySelector(".contact");

var form = popup.querySelector("form");

var contactClose = popup.querySelector(".modal-close");

var yourName = popup.querySelector("[name=user-name]");
var yourEmail = popup.querySelector("[name=user-email]");

var isStorageSupport = true;
var storage = "";

var optionsDirectLabels = document.querySelectorAll('.options-directions-label');
var optionsLabels = document.querySelectorAll('.options-label');

var sliderControls = document.querySelectorAll('.slider-controls-label');

var contactForm = document.querySelector('.contact-form');
var modalContact = document.querySelector('.contact');
var uname = document.querySelector('.your-name');
var email = document.querySelector('.your-email');
var letter = document.querySelector('.your-comment');

try {
  storage = localStorage.getItem('yourName');
} catch (err) {
  isStorageSupport = false;
}

buttonForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    yourName.value = storage;
    yourEmail.focus();
  } else {
    yourName.focus();
  }
});

contactClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});

if(optionsLabels){
optionsLabels.forEach(function(oLabel){
  oLabel.addEventListener('click', function(evt){
    evt.preventDefault();
    var optionsLabelActive = document.querySelector('.options-label-active');
    optionsLabelActive.classList.remove('options-label-active');
    this.classList.add('options-label-active');
  });
});
}

if(optionsDirectLabels){
optionsDirectLabels.forEach(function(odLabel){
  odLabel.addEventListener('click', function(evt){
    evt.preventDefault();
    var optionsDLabelActive = document.querySelector('.options-directions-label-active');
    optionsDLabelActive.classList.remove('options-directions-label-active');
    this.classList.add('options-directions-label-active');
  });
});
}

if(sliderControls){
  sliderControls.forEach(function(sliderControl){
    sliderControl.addEventListener('click', function(evt){
      evt.preventDefault();
      var sliderActive = document.querySelector('.slider-controls-label-active');
      sliderActive.classList.remove('slider-controls-label-active');
      this.classList.add('slider-controls-label-active');
      var screenActive = document.querySelector('.slider-item-active');
      screenActive.classList.remove('slider-item-active');
      var newScreenActive = document.querySelector('.' + this.dataset.screen);
      newScreenActive.classList.add('slider-item-active');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', function (evt) {
    if (!uname.value || !email.value || !letter.value) {
      evt.preventDefault();
      if(!uname.value){
        uname.classList.add('error');
      }
      if(!email.value){
        email.classList.add('error');
      }
      if(!letter.value){
        letter.classList.add('error');
      }
      modalContact.classList.remove('modal-error');
      modalContact.offsetWidth = modalContact.offsetWidth;
      modalContact.classList.add('modal-error');
    }
  });
};

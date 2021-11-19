
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector(".feedback-form");
const textareaRef = document.querySelector(".feedback-form textarea");
const emailRef = document.querySelector(".feedback-form input");

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
// textareaRef.addEventListener('input', onTextareaInput);
// emailRef.addEventListener('input', onEmailInput);

populateTextarea();

function onFormInput(evt) {
    const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
    
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY); 
    evt.currentTarget.reset();
    
}

function populateTextarea() {
    
    if (localStorage.getItem(STORAGE_KEY)) {
        textareaRef.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
        emailRef.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    }
}

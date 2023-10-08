import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LS = 'feedback-form-state';
let formData = {};
loadForm();

form.addEventListener('input', _throttle(saveFormInput, 500));
form.addEventListener('submit', formSubmit);

function saveFormInput(evt) {
  formData = JSON.parse(localStorage.getItem(LS)) || {};
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LS, JSON.stringify(formData));
}

function formSubmit(evt) {
  evt.preventDefault();
  if (!evt.target.email.value || !evt.target.message.value) {
    alert('Enter all data');
    return;
  }
  evt.target.reset();
  localStorage.removeItem(LS);
}

function loadForm() {
  try {
    let formLoad = JSON.parse(localStorage.getItem(LS));
    if (!formLoad) {
      return;
    }

    formData = formLoad;
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  } catch (error) {
    console.error('Error.message ', error.message);
  }
}

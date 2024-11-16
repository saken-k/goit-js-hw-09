const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

loadFormData();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function loadFormData() {
  const inputData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (inputData) {
    formData = inputData;
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

function handleInput(event) {
  formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form data:', formData);
  localStorage.removeItem(STORAGE_KEY);
  //   formData = { email: '', message: '' };
  form.reset();
}

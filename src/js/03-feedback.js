import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

// Function to save form state to local storage
const saveStateToLocalStorage = throttle(() => {
  const formDate = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(FormData));
}, 500);

// Event listener for input events
form.addEventListener('input', saveStateToLocalStorage);

// Function to load form state from local storage
const loadStateFromLocalStorage = () => {
  const storedDate = localStorage.getItem(storageKey);

  if (storedData) {
    const formData = JSON.parse(storedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
};

// Load form state on page load
loadStateFromLocalStorage();

// Event listener for form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Display form data in the console
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);
  // Clear form fields and local storage
  form.reset();
  localStorage.removeItem(storageKey);
});

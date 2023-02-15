const form = document.getElementById('creditForm');
const submitBtn = document.getElementById('creditFormSubmit');

const serializeForm = (formNode) => {
  const { elements } = formNode;
  const data = [];

  Array.from(elements).forEach((element) => {
    const { name, value } = element;
    if (name && value) {
      data.push(`${name}: ${value}`);
    }
  });

  const dataAsString = data.join('\n');

  alert(dataAsString);
};

export const handleFormSubmit = (event) => {
  event.preventDefault()

  submitBtn.setAttribute('disabled', 'disabled');
  submitBtn.innerHTML = '<img src="../img/loader.png" alt="Loading..." />';

  setTimeout(() => {
    serializeForm(form);
    submitBtn.removeAttribute('disabled', 'disabled');
    submitBtn.innerHTML = 'Оставить заявку';
  }, 500);
};

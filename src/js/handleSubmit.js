const form = $('#creditForm');
const submitBtn = $('#creditFormSubmit');

const serializeForm = (formNode) => {
  const elements = formNode.serializeArray();
  const data = [];

  elements.forEach((element) => {
    const { name, value } = element;
    if (name && value) {
      data.push(`${name}: ${value}`);
    }
  });

  const dataAsString = data.join('\n');

  alert(dataAsString);
};

export const handleFormSubmit = (event) => {
  event.preventDefault();

  submitBtn.attr('disabled', 'disabled');
  submitBtn.html('<img src="./img/loader.png" alt="Loading..." />');

  setTimeout(() => {
    serializeForm(form);
    submitBtn.removeAttr('disabled');
    submitBtn.html('Оставить заявку');
  }, 500);
};

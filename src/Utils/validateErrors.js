export const validateErrors = (formData) => {
  const { question, answer } = formData;
  let errors = {};

  if (question === '') {
    errors.question = 'Please Enter text for question';
  }
  if (answer === '') {
    errors.answer = 'Please Enter text for answers';
  }
  return errors;
};
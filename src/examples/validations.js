const validateFields = (nickname, password, service) => {
  const validations = {};

  /* ***** VALIDATIONS ***** */
  // Nickname
  if (!nickname) {
    validations.nickname = 'Nickname is required';
  } else if (nickname.length < 5) {
    validations.nickname = 'Nickname is too short';
  }

  // Password
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (!password) {
    validations.password = 'Password is required';
  } else if (!regex.test(password)) {
    if (password.length < 8) {
      validations.password = 'The password must have at least 8 characters.';
    } else if (!/(?=.*\d)/.test(password)) {
      validations.password = 'The password must have at least a number.';
    } else if (!/(?=.*[a-z])/.test(password)) {
      validations.password = 'The password must have at least a minuscule letter.';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      validations.password = 'The password must have at least a capital letter.';
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      validations.password = 'The password must have at least a special character.';
    } else {
      validations.password = 'The password is not valid.';
    }
  }

  // Service
  if (!service) {
    validations.service = 'Service is required';
  }

  return { ...validations };
}

export default validateFields;
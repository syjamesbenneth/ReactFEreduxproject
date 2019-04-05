export const validations = {
	first_name: {
	  validateOnBlur: true,
      required: true
    },
    last_name: {
	  validateOnBlur: true,
      required: true
    },
    email: {
      validateOnBlur: true,
      required: true,
      email: true
    },
    password: {
      validateOnBlur: true,
      required: true,
    },
    confirm_password: {
      validateOnBlur: true,
      required: true,
      matchField: 'password',
    }
  }
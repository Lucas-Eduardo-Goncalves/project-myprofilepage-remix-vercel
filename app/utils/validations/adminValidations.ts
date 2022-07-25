export function adminLoginValidateForm(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {
    email: email ? null : "Email é obrigatório",
    password: password ? null : "Senha é obrigatória",
  }

  const hasErrors = Object.values(errors).some(errorMessage => errorMessage);

  if (hasErrors) return {
    isError: true,
    data: null,
    errors,
  };

  return {
    isError: false,
    errors: null,
    data: {
      email: String(email),
      password: String(password),
    }
  };
}
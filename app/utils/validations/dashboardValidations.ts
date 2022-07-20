export function dashboardValidateForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const errors = {
    name: name ? null : "Nome é obrigatório",
    email: email ? null : "Email é obrigatório",
    subject: subject ? null : "Sujeito é obrigatório",
    message: message ? null : "Messagem é obrigatória",
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
      name: String(name),
      email: String(email),
      subject: String(subject),
      message: String(message),
    }
  };
}
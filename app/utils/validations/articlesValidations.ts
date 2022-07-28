export function articlesValidateForm(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  const errors = {
    title: title ? null : "Titulo é obrigatório",
    description: description ? null : "Descrição é obrigatória",
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
      title: String(title),
      description: String(description),
    }
  };
}
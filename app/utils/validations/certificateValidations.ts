export function addCertificateValidateForm(formData: FormData) {
  const issuingOrganization = formData.get("issuingOrganization");
  const certificateName = formData.get("certificateName");
  const issueDate = formData.get("issueDate");
  const image = formData.get("image");

  const errors = {
    issuingOrganization: issuingOrganization ? null : "Organização emissora é obrigatória",
    certificateName: certificateName ? null : "Nome do certificado é obrigatório",
    issueDate: issueDate ? null : "Data de emissão é obrigatória",
    image: image ? null : "Imagem é obrigatória",
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
      issuingOrganization: String(issuingOrganization),
      certificateName: String(certificateName),
      issueDate: String(issueDate),
      image: image,
    }
  };
}
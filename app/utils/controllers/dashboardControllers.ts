import { addFormItemContact } from "~/models/contact.server";
import { dashboardValidateForm } from "../validations/dashboardValidations";

export async function dashboardActionController(request: Request) {
  const formData = await request.formData();
  const validateResponse = dashboardValidateForm(formData);

  if (validateResponse.isError || !validateResponse.data) {
    return { errors: validateResponse.errors }
  }

  return await addFormItemContact(validateResponse.data)
}
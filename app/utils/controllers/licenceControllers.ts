import { updateLicense } from "~/models/license.server";

export async function licenceActionController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch (_action) {
    case "submitLicenseForm":
      const textValue = formData.get("value");
      return await updateLicense(String(textValue));

    default:
      return null;
  }
}
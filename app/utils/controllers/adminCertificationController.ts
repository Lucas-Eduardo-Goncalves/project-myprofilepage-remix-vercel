import { addCertification } from "~/models/certification.server";

export async function AdminCertidficationActionController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch (_action) {
    case "addCertification":
      return await addCertification(formData);

    default:
      return null;
  }
}
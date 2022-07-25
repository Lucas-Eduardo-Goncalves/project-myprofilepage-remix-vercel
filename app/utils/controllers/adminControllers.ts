import { LoginAdminUser } from "~/models/login.server";

export async function AdminActionController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch (_action) {
    case "AdminFormLogin":
      return await LoginAdminUser(formData, request);

    default:
      return null;
  }
}
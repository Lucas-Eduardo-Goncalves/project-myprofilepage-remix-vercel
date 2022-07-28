import type { ActionFunction } from "@remix-run/node";
import { CertificationsForm } from "~/pages/Admin/Certifications/CertificationsForm";
import { AdminCertidficationActionController } from "~/utils/controllers/adminCertificationController";

export const action: ActionFunction = async ({ request }) => {
  return await AdminCertidficationActionController(request);
}

export default function () {
  return <CertificationsForm />
} 
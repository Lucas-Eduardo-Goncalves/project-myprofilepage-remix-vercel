import { redirect } from "@remix-run/node";
import { signInWithEmailAndPassword } from "firebase/auth";
import { commitSessionAuth, getSessionAuth } from "~/global/cookies/AuthCookie";
import { firebaseAuth } from "~/global/services/firebase/firebase.auth";
import { adminLoginValidateForm } from "~/utils/validations/adminValidations";
import { validationErrosFirebase } from "~/utils/validations/firebaseValidations";

export async function LoginAdminUser(formData: FormData, request: Request) {
  const validateResponse = adminLoginValidateForm(formData);

  if (validateResponse.isError || !validateResponse.data) {
    return { errors: validateResponse.errors }
  }

  const responseSignIn = await signInWithEmailAndPassword(
    firebaseAuth, validateResponse.data.email, validateResponse.data.password)
    .then(async ({ user }) => {
      const session = await getSessionAuth(request.headers.get("Cookie"));

      session.set("access_token", await user.getIdToken())
      session.set("user_credentials", {
        userEmail: user.email,
        userId: user.uid,
      })

      return redirect("/admin", {
        headers: { "Set-Cookie": await commitSessionAuth(session) }
      })
    })
    .catch(error => validationErrosFirebase(error.code))

  return responseSignIn;
}
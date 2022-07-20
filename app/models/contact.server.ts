import { addDoc, collection } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/firebase";

type AddFormItemContactProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function addFormItemContact(data: AddFormItemContactProps) {
  return await addDoc(collection(firebaseFirestore, "contacts"), data)
    .then(() => {
      return { firetoast: { message: "Seu formulário foi enviado", type: "success" } }
    })
    .catch(() => {
      return {
        firetoast: { message: "Ocorreu um erro", type: "error" }
      }
    })
}
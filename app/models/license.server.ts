import { collection, getDocs, query } from "firebase/firestore";
import { firebaseFirestore } from "../global/services/firebase";

export async function getLicense() {
  const q = query(collection(firebaseFirestore, "license"));
  const doc = await getDocs(q);

  const res: any[] = [];

  doc.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return res[0];
}
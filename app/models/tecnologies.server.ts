import { query, collection, getDocs } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/firebase";

type ResponseFunctionsGetProjects = {
  description: string;
  logo_url: string;
  name: string;
  type: string;
  website: string;
  id: string;
}

type ResponseData = {
  description: string;
  logo_url: string;
  name: string;
  type: string;
  website: string;
}

export async function getTecnologies() {
  const q = query(collection(firebaseFirestore, "technologies"));
  const doc = await getDocs(q);

  const res: ResponseFunctionsGetProjects[] = [];

  doc.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data() as ResponseData,
    });
  });

  return res;
}
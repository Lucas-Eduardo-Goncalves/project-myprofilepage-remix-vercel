import { collection, getDocs, query } from "firebase/firestore";
import { firebaseFirestore } from "../global/services/firebase";

export interface UnicProjectProps {
  name: string;
  created_at: string;
  url: string;
  logo_url: string;
  description: string;
  technologies: string[];
}

export interface ResponseFunctionsGetProjects extends UnicProjectProps {
  id: string;
}

export async function getAllProjects() {
  const q = query(collection(firebaseFirestore, "projects"));
  const doc = await getDocs(q);

  const res: ResponseFunctionsGetProjects[] = [];

  doc.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data() as UnicProjectProps
    });
  });

  return res;
}


export async function getTwoProjects() {
  const q = query(collection(firebaseFirestore, "projects"));
  const doc = await getDocs(q);

  const res: ResponseFunctionsGetProjects[] = [];

  doc.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data() as UnicProjectProps
    });
  });

  return res.splice(0, 2);
}
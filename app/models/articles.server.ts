import { redirect } from "@remix-run/node";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore"
import { firebaseFirestore } from "~/global/services/firebase";
import { articlesValidateForm } from "~/utils/validations/articlesValidations";

type FetchArticleProps = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  article: string;
}

type ArticleProps = {
  createdAt: string;
  title: string;
  description: string;
  article: string;
}

export async function addArticle(formData: FormData) {
  const validateResponse = articlesValidateForm(formData);

  if (validateResponse.isError || !validateResponse.data) {
    return { errors: validateResponse.errors }
  }

  const data: ArticleProps = {
    article: "",
    createdAt: new Date().toLocaleDateString(),
    title: validateResponse.data.title,
    description: validateResponse.data.description,
  }

  return await addDoc(collection(firebaseFirestore, "articles"), data)
    .then(() => {
      return redirect("/admin/articles")
    })
    .catch(() => {
      return {
        firetoast: { message: "Ocorreu um erro", type: "error" }
      }
    })
}

export async function getArticles() {
  const q = query(collection(firebaseFirestore, "articles"));
  const doc = await getDocs(q);

  const res: FetchArticleProps[] = [];

  doc.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data() as ArticleProps,
    });
  });

  return res;
}

export async function getUnicArticle(id: string) {
  const docRef = doc(firebaseFirestore, "articles", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return {
    id,
    ...docSnap.data()
  };
}

export async function editArticle(formData: FormData, id: string) {
  const validateResponse = articlesValidateForm(formData);

  if (validateResponse.isError || !validateResponse.data) {
    return { errors: validateResponse.errors }
  }

  const docRef = doc(firebaseFirestore, "articles", id);

  await updateDoc(docRef, {
    title: validateResponse.data.title,
    description: validateResponse.data.description
  });

  return redirect("/admin/articles")
}

export async function editMarkdownArticle(value: string, id: string) {
  const docRef = doc(firebaseFirestore, "articles", id);

  await updateDoc(docRef, {
    article: value,
  });

  return null;
}

export async function deleteArticle(id: string) {
  await deleteDoc(doc(firebaseFirestore, "articles", id));
  return null;
}
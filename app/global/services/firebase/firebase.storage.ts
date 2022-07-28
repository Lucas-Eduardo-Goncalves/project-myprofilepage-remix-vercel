import { getStorage } from "firebase/storage";
import { firebaseApp } from "./firebase.config";

const firebaseStorage = getStorage(firebaseApp);
export { firebaseStorage };
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { addCertificateValidateForm } from "~/utils/validations/certificateValidations";

export async function addCertification(formData: FormData) {
  const validateResponse = addCertificateValidateForm(formData);

  if (validateResponse.isError || !validateResponse.data) {
    return { errors: validateResponse.errors }
  }

  const image = validateResponse.data.image as File;

  const storage = getStorage();
  const storageRef = ref(storage, 'images/rivers.png');

  const uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );

  return null;
}
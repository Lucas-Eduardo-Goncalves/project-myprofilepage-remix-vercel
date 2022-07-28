import { useState } from "react";
import emptyIMG from "../../assets/empty.svg";
import type { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface SimpleInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string | null;
}

export function SimpleInputFile({ name, label, error }: SimpleInputFileProps) {
  const [fileLink, setFileLink] = useState(emptyIMG);

  async function handleImg(image: File) {
    const imgPreviewLink = URL.createObjectURL(image);
    setFileLink(imgPreviewLink);
  };

  return (
    <Container isError={!!error}>
      <label htmlFor={name}>
        <div>
          {label}
          {error && <p>{error}</p>}
        </div>
        <img src={fileLink} alt="" />
      </label>

      <input
        type="file"
        id={name}
        name={name}
        onChange={(e) => e.target.files && handleImg(e.target.files[0])}
      />
    </Container>
  );
}

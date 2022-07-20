import type { TextareaHTMLAttributes } from "react";
import { Container } from "./styled";

interface SimpleTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string | null;
}


export function SimpleTextArea({ name, label, error, ...rest }: SimpleTextAreaProps) {
  return (
    <Container isError={!!error}>
      <div>
        <label htmlFor={name}>{label}</label>
        {error && <p>{error}</p>}
      </div>
      <textarea name={name} id={name} {...rest} />
    </Container>
  )
}
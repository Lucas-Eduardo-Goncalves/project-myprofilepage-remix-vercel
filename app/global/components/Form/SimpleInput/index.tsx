import { Container } from "./styled";
import type { InputHTMLAttributes } from "react";

interface SimpleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string | null;
}

export function SimpleInput({ name, label, error, ...rest }: SimpleInputProps) {
  return (
    <Container isError={!!error}>
      <div>
        <label htmlFor={name}>{label}</label>
        {error && <p>{error}</p>}
      </div>

      <input name={name} id={name} {...rest} />
    </Container>
  );
}
import type { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function SimpleButton({ text, ...rest }: SimpleButtonProps) {
  return (
    <Container {...rest}>
      {text}
    </Container>
  );
}
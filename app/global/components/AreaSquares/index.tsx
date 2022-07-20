import { Container, Square } from "./styles";

export function AreaSquares() {
  return (
    <Container>
      <Square
        className="first"
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", delay: 0, duration: 2, repeat: Infinity }}
      />

      <Square
        className="second"
        animate={{ rotate: -360 }}
        transition={{ ease: "circOut", delay: 1, duration: 3, repeat: Infinity }}
      />

      <Square
        className="third"
        animate={{ rotate: 360 }}
        transition={{ ease: "easeOut", delay: 1.7, duration: 2, repeat: Infinity }}
      />
    </Container>
  );
}
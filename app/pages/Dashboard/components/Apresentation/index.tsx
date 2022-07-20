import { AreaSquares } from "~/global/components/AreaSquares";
import { Container, SubTitle, Title, SimpleButton } from "./styles";

type IApresentationProps = {
  id: string;
}

export function Apresentation({ id }: IApresentationProps) {
  return (
    <Container id={id}>
      <Title>
        Olá, <br />
        eu sou Lucas, <br />
        sou um webdesenvolvedor.
      </Title>

      <SubTitle>
        São João Del Rei
        <span>/</span>
        Minas Gerais, Brasil
      </SubTitle>

      <SimpleButton
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Me contate
      </SimpleButton>

      <AreaSquares />
    </Container>
  );
}
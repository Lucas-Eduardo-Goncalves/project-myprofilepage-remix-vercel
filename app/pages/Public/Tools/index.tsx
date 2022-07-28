import { ReturnButton } from "~/global/components/Buttons/ReturnButton";
import { Container, Title, TechnologiesCard } from "./styles";

type TecnologiesProps = {
  description: string;
  logo_url: string;
  name: string;
  type: string;
  website: string;
  id: string;
}

type ToolsProps = {
  tecnologies: TecnologiesProps[];
}

export function Tools({ tecnologies }: ToolsProps) {
  return (
    <Container>
      <ReturnButton />
      <Title>Conheça meu cinto de ferramentas</Title>

      {tecnologies.map(item => (
        <TechnologiesCard key={item.id}>
          <img src={item.logo_url} alt={item.name} />

          <div>
            <div>
              <h3>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              </h3>
              <p>{item.type}</p>
            </div>

            {item.description}
          </div>
        </TechnologiesCard>
      ))}
    </Container>
  )
}
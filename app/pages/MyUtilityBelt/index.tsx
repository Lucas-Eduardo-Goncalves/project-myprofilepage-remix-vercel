import { useNavigate } from "@remix-run/react";
import { CaretLeft } from "phosphor-react";

import { Container, ReturnHomeButton, MyUtilityBeltTitle, TechnologiesCard } from "./styles";

type TecnologiesProps = {
  description: string;
  logo_url: string;
  name: string;
  type: string;
  website: string;
  id: string;
}

type MyUtilityBeltProps = {
  tecnologies: TecnologiesProps[];
}

export function MyUtilityBelt({ tecnologies }: MyUtilityBeltProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <ReturnHomeButton onClick={() => navigate("/#about")}>
        <CaretLeft size={32} />
      </ReturnHomeButton>

      <MyUtilityBeltTitle>
        Conheça meu cinto de ferramentas
      </MyUtilityBeltTitle>

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
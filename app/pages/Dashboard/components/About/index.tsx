import { useNavigate } from "@remix-run/react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import { Tooltip } from "~/global/components/Tooltip";
import { SimpleButton } from "~/global/components/SimpleButton";
import { Container, AboutTitle, Content, SocialArea } from "./styles";

type IAboutProps = {
  id: string;
}

export function About({ id }: IAboutProps) {
  const navigate = useNavigate();
  const goToUtilityBelt = () => navigate("myutilitybelt");

  return (
    <Container id={id}>
      <AboutTitle>Sobre mim</AboutTitle>

      <Content>
        <p>Olá, meu nome é Lucas Eduardo Gonçalves. Sou um desenvolvedor web autodidata que vive no estado de Minas Gerais, Brasil. Tenho 18 anos e estudo programação desde fevereiro de 2021.</p>
        <p>Tenho interesse em me juntar ao lado "front-end da força", utilizando tecnologias como Vite, NextJS e RemixJS. Sou apaixonado pelo React e todos os frameworks a ele ligados.</p>
        <p>Eu tenho lutado na frente no último ano, e eventualmente comecei a desfrutar da ideia por trás de cada linha de código. A curiosidade de sempre aprender mais me impulsionou a buscar o proximo nivel. Agora, como profissionalmente conectado com a indústria de software, estou interessado em me juntar a comunidade tanto para ensinar quanto para principalmente aprender.</p>
      </Content>

      <SocialArea>
        <div style={{ display: "flex" }}>
          <Tooltip label="Github">
            <a href="https://github.com/Lucas-Eduardo-Goncalves" target="_blank" rel="noreferrer">
              <GithubLogo weight="fill" />
            </a>
          </Tooltip>

          <Tooltip label="Linkedin">
            <a href="https://www.linkedin.com/in/lucas-gon%C3%A7alves-62a16b209/" target="_blank" rel="noreferrer">
              <LinkedinLogo />
            </a>
          </Tooltip>

          <Tooltip label="Instagram">
            <a href="https://www.instagram.com/lukasedugoncalves/" target="_blank" rel="noreferrer">
              <InstagramLogo />
            </a>
          </Tooltip>
        </div>

        <SimpleButton text="Conhecer meu cinto de utilidades" onClick={goToUtilityBelt} />
      </SocialArea>
    </Container>
  );
}
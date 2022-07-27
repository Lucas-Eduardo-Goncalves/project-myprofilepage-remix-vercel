import { Link } from "@remix-run/react";

import { SimpleButton } from "~/global/components/SimpleButton";
import { Container, PortfolioTitle, ProjectsArea, NavArea } from "./styles";

type IProjectsProps = {
  id: string;
  name: string;
  logo_url: string;
}

type IPortfolioProps = {
  id: string;
  projects: IProjectsProps[];
}

export function Portfolio({ id, projects }: IPortfolioProps) {
  return (
    <Container id={id}>
      <PortfolioTitle>Meus Projetos</PortfolioTitle>
      <p>Alguns dos meus melhores projetos pessoais. Trabalhados nos últimos meses.</p>

      <ProjectsArea>
        {projects && projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <img src={project.logo_url} alt={project.name} />
          </li>
        ))}
      </ProjectsArea>

      <NavArea>
        <div>
          <p>Conheça também os meus:&nbsp;&nbsp;</p>

          <Link to="articles">Artigos</Link>,&nbsp;&nbsp;
          <Link to="certifications">Certificados</Link>,&nbsp;&nbsp;
          <Link to="games">Jogos</Link>
        </div>

        <SimpleButton text="Ver todos os meus projetos" />
      </NavArea>
    </Container>
  );
}
import BarbedWireImage from "~/global/assets/fundo.svg";
import { Taskbar } from "~/global/components/Taskbar";
import { Container, RigthImg } from "./styles";

import { Apresentation } from "./components/Apresentation";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Form } from "./components/Form";
import { Footer } from "~/global/components/Footer";

type IProjectsProps = {
  id: string;
  name: string;
  logo_url: string;
}

type IDashboardProps = {
  projects: IProjectsProps[];
  errors: {
    name: string | null;
    email: string | null;
    subject: string | null;
    message: string | null;
  };
}

export function Dasboard({ projects, errors }: IDashboardProps) {
  return (
    <>
      <Taskbar />

      <Container>
        <Apresentation id="home" />
        <About id="about" />
        <Portfolio id="projects" projects={projects} />
        <Form id="contact" errors={errors} />
        <Footer />
      </Container>

      <RigthImg>
        <img src={BarbedWireImage} alt="Imagem de arames farpados" />
      </RigthImg>
    </>
  );
}
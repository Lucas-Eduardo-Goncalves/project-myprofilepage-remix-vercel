import { Container, NavButton } from "./styles";
import { House, Code, Info, UserCirclePlus } from "phosphor-react";

export function Taskbar() {
  return (
    <Container>
      <NavButton to="home" spy={true} smooth={true} duration={500}>
        <House />
        <p>Home</p>
      </NavButton>

      <NavButton to="about" spy={true} smooth={true} duration={500}>
        <Info />
        <p>Sobre mim</p>
      </NavButton>

      <NavButton to="projects" spy={true} smooth={true} duration={500}>
        <Code />
        <p>Projetos</p>
      </NavButton>

      <NavButton to="contact" spy={true} smooth={true} duration={500}>
        <UserCirclePlus />
        <p>Me contate</p>
      </NavButton>
    </Container>
  );
}
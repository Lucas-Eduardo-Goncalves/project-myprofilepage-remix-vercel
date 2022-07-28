import { Link } from '@remix-run/react';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/Lucas-Eduardo-Goncalves"
      >
        &copy;
        Dev Lucas Gonçalves
      </a>

      <div>
        <Link to="/public/license">MIT  Licence</Link>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Lucas-Eduardo-Goncalves/project-myprofilepage-remix-vercel"
        >
          GithubRepo
        </a>
      </div>
    </Container>
  );
};
import { Link } from '@remix-run/react';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <p>&copy; Dev Lucas Gonçalves</p>

      <div>
        <Link to="/license">MIT Licence</Link>
        <p>V - 1.0.0</p>
      </div>
    </Container>
  );
};
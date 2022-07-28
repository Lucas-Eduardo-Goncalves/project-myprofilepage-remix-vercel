import { Container, Grid, GridItem } from './styles';

type AdminEmailsProps = {
  emails: {
    email: string;
    message: string;
    name: string;
    subject: string;
  }[];
}

export function AdminEmails({ emails }: AdminEmailsProps) {
  return (
    <Container>
      <h2>Emails</h2>

      <Grid>
        {emails.map(email => (
          <GridItem key={email.email}>
            <p>
              <strong>Nome: </strong>
              {email.name}
            </p>
            <p>
              <strong>Email: </strong>
              {email.email}
            </p>
            <p>
              <strong>Assunto: </strong>
              {email.subject}
            </p>
            <p>
              <strong>Mensagem: </strong>
              {email.message}
            </p>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

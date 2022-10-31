import { Background, Container, Description, Title } from './styles';

interface FilmProps {
  background: string;
  title: string;
  description: string;
}

export function Film({ title, description, background }: FilmProps) {
  return (
    <Container>
      <Background background={background} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

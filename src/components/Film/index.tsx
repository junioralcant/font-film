import {
  Background,
  Container,
  Description,
  Director,
  Productor,
  Title,
} from './styles';

interface FilmProps {
  background: string;
  title: string;
  description: string;
  productor: string;
  director: string;
}

export function Film({
  title,
  description,
  background,
  productor,
  director,
}: FilmProps) {
  return (
    <Container>
      <Background background={background} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Productor>Produtor - {productor}</Productor>
      <Director>Diretor - {director}</Director>
    </Container>
  );
}

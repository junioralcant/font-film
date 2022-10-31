import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import {
  BoxButtonNextPrevious,
  ButtonNextPrevious,
  Container,
  TotalFilms,
} from './styles';

interface HeaderProps {
  totalFilms: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

export function Header({
  totalFilms,
  onClickNext,
  onClickPrevious,
}: HeaderProps) {
  return (
    <Container>
      <TotalFilms>Filmes - {totalFilms}</TotalFilms>

      <BoxButtonNextPrevious>
        <ButtonNextPrevious onClick={onClickPrevious}>
          <ArrowCircleLeft size={32} />
        </ButtonNextPrevious>

        <ButtonNextPrevious onClick={onClickNext}>
          <ArrowCircleRight size={32} />
        </ButtonNextPrevious>
      </BoxButtonNextPrevious>
    </Container>
  );
}

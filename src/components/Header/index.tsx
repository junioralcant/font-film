import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import {
  BoxButtonNextPrevious,
  ButtonNextPrevious,
  Container,
  TotalFilms,
} from './styles';

interface HeaderProps {
  totalFilms: number;
  filmsToView: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
  disabledButtonNext: boolean;
  disabledButtonPrevious: boolean;
}

export function Header({
  totalFilms,
  filmsToView,
  onClickNext,
  onClickPrevious,
  disabledButtonNext = false,
  disabledButtonPrevious = false,
}: HeaderProps) {
  return (
    <Container>
      <TotalFilms>
        Filmes - {totalFilms}/{filmsToView}
      </TotalFilms>

      <BoxButtonNextPrevious>
        <ButtonNextPrevious
          onClick={onClickPrevious}
          disabled={disabledButtonPrevious}
        >
          <ArrowCircleLeft size={32} />
        </ButtonNextPrevious>

        <ButtonNextPrevious
          onClick={onClickNext}
          disabled={disabledButtonNext}
        >
          <ArrowCircleRight size={32} />
        </ButtonNextPrevious>
      </BoxButtonNextPrevious>
    </Container>
  );
}

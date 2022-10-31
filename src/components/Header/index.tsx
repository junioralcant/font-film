import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import {
  BoxButtonAndTitle,
  BoxButtonNextPrevious,
  ButtonNextPrevious,
  ButtonUpdateListFilms,
  Container,
  TotalFilms,
} from './styles';

interface HeaderProps {
  totalFilms: number;
  filmsToView: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickButtonUpdateListFilms: () => void;
  disabledButtonNext: boolean;
  disabledButtonPrevious: boolean;
  disabledButtonUpdateListFilms: boolean;
}

export function Header({
  totalFilms,
  filmsToView,
  onClickNext,
  onClickPrevious,
  onClickButtonUpdateListFilms,
  disabledButtonNext = false,
  disabledButtonPrevious = false,
  disabledButtonUpdateListFilms = false,
}: HeaderProps) {
  return (
    <Container>
      <BoxButtonAndTitle>
        <ButtonUpdateListFilms
          onClick={onClickButtonUpdateListFilms}
          disabled={disabledButtonUpdateListFilms}
        >
          Atualizar lista
        </ButtonUpdateListFilms>
        <TotalFilms>
          Filmes - {totalFilms}/{filmsToView}
        </TotalFilms>
      </BoxButtonAndTitle>

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

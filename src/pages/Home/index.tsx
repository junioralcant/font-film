import { useEffect, useState } from 'react';
import { Film } from '../../components/Film';
import { Header } from '../../components/Header';
import { FilmDTO } from '../../dtos/FilmDTO';
import { api } from '../../services/api';

import {
  Container,
  ContainerFilms,
  ContainerPagination,
} from './styles';

export function Home() {
  const [films, setFilms] = useState<FilmDTO[]>([]);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get(
        `/films/list?skip=${skip}&take=${take}`
      );

      setFilms(response.data);
    }

    loadFilms();
  }, [skip]);

  function nextPage() {
    setSkip(skip + 10);
  }

  function previousPage() {
    setSkip(skip - 10);
  }

  function disabledButtonPrevious() {
    return skip <= 0;
  }

  function disabledButtonNex() {
    return skip >= 50;
  }

  return (
    <Container>
      <ContainerPagination>
        <Header
          totalFilms={100}
          onClickPrevious={previousPage}
          onClickNext={nextPage}
          disabledButtonPrevious={disabledButtonPrevious()}
          disabledButtonNext={disabledButtonNex()}
        />
      </ContainerPagination>
      <ContainerFilms>
        {films.map((film) => (
          <Film
            key={film.id}
            background={film.banner}
            title={film.title}
            description={film.description}
          />
        ))}
      </ContainerFilms>
    </Container>
  );
}

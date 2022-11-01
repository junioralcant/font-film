import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
  const [totalFilms, setTotalFilms] = useState(0);
  const [
    disabledButtonUpdateListFilms,
    setDisabledButtonUpdateListFilms,
  ] = useState(false);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get(
        `/films/list?skip=${skip}&take=${take}`
      );

      setFilms(response.data);
    }

    loadFilms();
  }, [skip]);

  useEffect(() => {
    async function loadTotalFilms() {
      const response = await api.get('/films/list?take=1000');

      setTotalFilms(response.data.length);
    }

    loadTotalFilms();
  }, [skip]);

  async function updateListFilms() {
    try {
      setDisabledButtonUpdateListFilms(true);
      const response = await api.post('/films/update');

      if (response.data.length > 0) {
        const response = await api.get(
          `/films/list?skip=${skip}&take=${take}`
        );

        const responseTotal = await api.get('/films/list?take=1000');

        setFilms(response.data);
        setTotalFilms(responseTotal.data.length);
      }
      toast.success('Lista de filmes atualizada!');
      setDisabledButtonUpdateListFilms(false);
    } catch (error) {
      console.log(error);
      setDisabledButtonUpdateListFilms(false);
      toast.error('Erro em atualizar lista de filmes!');
    }
  }

  function nextPage() {
    setSkip(skip + 10);
  }

  function previousPage() {
    setSkip(skip - 10);
  }

  function disabledButtonPrevious() {
    return skip <= 0;
  }

  let subFilms = totalFilms - skip;
  function disabledButtonNex() {
    return subFilms <= 10;
  }

  return (
    <Container>
      <ContainerPagination>
        <Header
          totalFilms={totalFilms}
          filmsToView={subFilms}
          onClickPrevious={previousPage}
          onClickNext={nextPage}
          onClickButtonUpdateListFilms={updateListFilms}
          disabledButtonPrevious={disabledButtonPrevious()}
          disabledButtonNext={disabledButtonNex()}
          disabledButtonUpdateListFilms={
            disabledButtonUpdateListFilms
          }
        />
      </ContainerPagination>
      <ContainerFilms>
        {films.map((film) => (
          <Film
            key={film.id}
            background={film.banner}
            title={film.title}
            description={film.description}
            director={film.director}
            productor={film.producer}
          />
        ))}
      </ContainerFilms>
    </Container>
  );
}

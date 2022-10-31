import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3rem;
`;

export const ContainerPagination = styled.header`
  width: 1000px;

  margin-bottom: 1rem;

  @media (max-width: 900px) {
    width: 320px;
  }
`;

export const ContainerFilms = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  width: 1000px;

  padding-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    width: 320px;
  }
`;

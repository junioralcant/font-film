import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3rem;
`;

export const ContainerPagination = styled.header`
  margin-bottom: 1rem;
`;

export const ContainerFilms = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  width: 1000px;

  padding-bottom: 2rem;
`;

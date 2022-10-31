import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1000px;
`;

export const TotalFilms = styled.span`
  color: ${(props) => props.theme['white']};
  font-weight: bold;
`;

export const BoxButtonNextPrevious = styled.div``;

export const ButtonNextPrevious = styled.button`
  background: none;
  border: none;

  color: ${(props) => props.theme['white']};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['gray-600']};
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1000px;
`;

export const BoxButtonAndTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonUpdateListFilms = styled.button`
  background: none;
  border: none;

  background: rgb(255, 255, 255, 0.2);
  color: ${(props) => props.theme['gray-400']};
  cursor: pointer;
  padding: 0.4rem;

  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background: rgb(255, 255, 255, 0.1);
    color: ${(props) => props.theme['gray-600']};
  }

  &:disabled {
    background: rgb(255, 255, 255, 0.2);
    color: ${(props) => props.theme['gray-400']};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TotalFilms = styled.span`
  color: ${(props) => props.theme['white']};
  font-weight: bold;

  margin-top: 0.8rem;
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

  &:disabled {
    color: ${(props) => props.theme['gray-600']};
    cursor: not-allowed;
  }
`;

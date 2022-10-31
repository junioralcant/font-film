import styled from 'styled-components';

interface BackgroundProps {
  background: string;
}

export const Container = styled.div`
  position: relative;

  width: 20rem;
  height: 12rem;

  border-radius: 10px;
`;

export const Background = styled.div<BackgroundProps>`
  position: relative;

  width: 100%;
  height: 100%;

  background: ${(props) => `url(${props.background})`};
  background-size: 25rem 15rem;
  opacity: 0.6;

  border-radius: 10px;
`;

export const Title = styled.span`
  position: absolute;

  color: ${(props) => props.theme['white']};
  font-weight: bold;

  bottom: 4.3rem;
  left: 1rem;
`;

export const Description = styled.span`
  position: absolute;
  width: 90%;

  color: ${(props) => props.theme['gray-400']};
  font-size: 0.8rem;

  bottom: 1rem;
  left: 1rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;
`;

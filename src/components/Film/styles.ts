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

  bottom: 6.3rem;
  left: 1rem;
`;

const BaseText = styled.span`
  position: absolute;
  width: 90%;

  color: ${(props) => props.theme['gray-400']};
  font-size: 0.8rem;
  left: 1rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled(BaseText)`
  bottom: 3rem;
`;

export const Productor = styled(BaseText)`
  opacity: 0.8;
  bottom: 1.5rem;

  -webkit-line-clamp: 1;
`;

export const Director = styled(BaseText)`
  opacity: 0.8;
  bottom: 0.5rem;

  -webkit-line-clamp: 1;
`;

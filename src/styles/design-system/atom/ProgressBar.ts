import styled from 'styled-components';
import { token } from '../token/var';

export const CircularContainer = styled.div`
 position: relative;
  width: 70px;
  height: 70px;
`;

export const CircularSVG = styled.svg`
  transform: rotate(0deg);
  width: 100%;
  height: 100%;
`;

export const CircularBackground = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 6;
`;

interface CircularProgressProps {
  color?: string;
  circumference: number;
  progress: number;
}

export const CircularProgress = styled.circle<CircularProgressProps>`
  fill: none;
  stroke: ${({ color }) => color || '#4caf50'};
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${({ circumference, progress }) =>
    circumference - (progress / 100) * circumference};
  transition: stroke-dashoffset 0.35s;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
`;

interface ProgressTextProps {
  color?: string;
}

export const ProgressText = styled.text<ProgressTextProps>`
  font-size: ${token.fonts.fontSize20};
  fill: ${({ color }) => color || token.colors.base_Secondary_Color_6};
  text-anchor: middle;
  dominant-baseline: middle;
`;

import React from 'react';
import { CircularContainer, CircularSVG, CircularBackground, CircularProgress, ProgressText } from '../../../styles';

interface CircularProgressBarProps {
    progress: number;
    total: number;
    color?: string;
  }
const ProgressBar: React.FC<CircularProgressBarProps> = ({ progress, total, color }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const percentage = (progress / total) * 100;
  
    return (
      <CircularContainer>
        <CircularSVG>
          <CircularBackground cx="35" cy="35" r={radius} />
          <CircularProgress
            cx="35"
            cy="35"
            r={radius}
            circumference={circumference}
            progress={percentage}
            color={color}
          />
          <ProgressText x="35" y="35" color={color}>
            {progress}/{total}
          </ProgressText>
        </CircularSVG>
      </CircularContainer>
    );
  };

export { ProgressBar };
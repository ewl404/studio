'use client';

import { useEffect, useState } from 'react';

interface WinRateProgressBarProps {
  winRate: number;
}

const WinRateProgressBar = ({ winRate }: WinRateProgressBarProps) => {
  const [color, setColor] = useState('red');
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    // Color logic
    if (winRate >= 75) {
      setColor('green');
    } else if (winRate >= 50) {
      setColor('yellow');
    } else {
      setColor('red');
    }

    // Status text logic
    if (winRate >= 90) {
      setStatusText('Pagando Muito');
    } else if (winRate >= 70) {
      setStatusText('Bom para Operar');
    } else if (winRate >= 60) {
      setStatusText('Momento instável');
    } else {
      setStatusText('Não entre, recolhendo!');
    }
  }, [winRate]);

  const isActive = winRate >= 90;

  return (
    <div className="progress">
      <div
        className={`progress-bar ${color} ${isActive ? 'active' : ''}`}
        style={{ width: `${winRate}%` }}
      >
        <div className="progress-text">
          <span>{winRate}%</span>
          <span className="ml-2 font-normal text-xs">({statusText})</span>
        </div>
      </div>
    </div>
  );
};

export default WinRateProgressBar;

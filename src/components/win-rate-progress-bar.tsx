'use client';

import { useEffect, useState } from 'react';

interface WinRateProgressBarProps {
  winRate: number;
}

const WinRateProgressBar = ({ winRate }: WinRateProgressBarProps) => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    if (winRate >= 75) {
      setColor('green');
    } else if (winRate >= 50) {
      setColor('yellow');
    } else {
      setColor('red');
    }
  }, [winRate]);
  
  const isActive = color === 'green';

  return (
    <div className="progress">
        <div
            className={`progress-bar ${color} ${isActive ? 'active' : ''}`}
            style={{ width: `${winRate}%` }}
        >
            <span className="progress-text">{winRate}%</span>
        </div>
    </div>
  );
};

export default WinRateProgressBar;

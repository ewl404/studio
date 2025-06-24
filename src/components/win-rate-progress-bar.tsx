'use client';

import { useEffect, useState } from 'react';

interface WinRateProgressBarProps {
  winRate: number;
}

const WinRateProgressBar = ({ winRate }: WinRateProgressBarProps) => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    // Color logic
    if (winRate >= 75) {
      setColor('green');
    } else if (winRate >= 50) {
      setColor('yellow');
    } else {
      setColor('red');
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
        </div>
      </div>
    </div>
  );
};

export default WinRateProgressBar;

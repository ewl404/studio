'use client';

import { useState, useEffect } from 'react';

const LiveViewerCount = () => {
    const [count, setCount] = useState(52);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + Math.floor(Math.random() * 4) + 1); // Increment by 1 to 4
        }, 4000); // every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="live-viewer-count">
            <span className="live-dot-red"></span>
            <span className="live-text">LIVE</span>
            <span className="live-divider"></span>
            <span className="viewer-number">{count}</span>
        </div>
    );
};

export default LiveViewerCount;

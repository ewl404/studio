'use client';

import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const LiveViewerCount = () => {
    const [count, setCount] = useState(87);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + Math.floor(Math.random() * 4) + 1); // Increment by 1 to 4
        }, 4000); // every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="live-viewer-count">
            <span className="live-dot-red"></span>
            <span className="live-text">AO VIVO</span>
            <div className="separator-line"></div>
            <span className="viewer-number">{count}</span>
            <Eye className="w-4 h-4 text-white" />
        </div>
    );
};

export default LiveViewerCount;

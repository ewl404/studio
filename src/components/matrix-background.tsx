'use client';

import { useEffect, useState } from 'react';

const MatrixBackground = () => {
    const [streams, setStreams] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const generateStreams = () => {
            if (typeof window === 'undefined') return [];
            const numStreams = Math.floor(window.innerWidth / 25);
            return Array.from({ length: numStreams }).map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}vw`,
                    animationDuration: `${Math.random() * 5 + 5}s`,
                    animationDelay: `${Math.random() * -7}s`,
                    fontSize: `${Math.random() * 1 + 0.75}em`,
                    opacity: `${Math.random() * 0.5 + 0.3}`
                };
                const text = Array.from({ length: Math.floor(Math.random() * 30) + 20 })
                    .map(() => (Math.random() > 0.5 ? '1' : '0'))
                    .join('');

                return <div key={i} className="matrix-stream" style={style}>{text}</div>;
            });
        };
        setStreams(generateStreams());
        
        const handleResize = () => setStreams(generateStreams());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return <div className="matrix-background" aria-hidden="true">{streams}</div>;
};

export default MatrixBackground;

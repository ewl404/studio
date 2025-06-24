'use client';

import { useState, useEffect } from 'react';

export default function WithdrawnToday() {
    // Start with null to avoid hydration mismatch.
    const [amount, setAmount] = useState<number | null>(null);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        // Generate initial amount and start interval only on the client-side after mount.
        const initial = Math.random() * (50000 - 30000) + 30000;
        setAmount(initial);

        const interval = setInterval(() => {
            setAmount(prevAmount => (prevAmount || 0) + (Math.random() * (3000 - 300) + 300));
            setIsPulsing(true);
        }, 5000);

        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once on mount.

    useEffect(() => {
        if (isPulsing) {
            const timer = setTimeout(() => {
                setIsPulsing(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isPulsing]);

    if (amount === null) {
        // Render a placeholder on the server and during initial client render.
        return <span className="font-bold text-primary">R$ --,--</span>;
    }

    return (
        <span className={`font-bold text-primary ${isPulsing ? 'animate-green-pulse-once' : ''}`}>
            {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
    );
}
